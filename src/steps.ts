import { javascript } from 'projen';
import { WorkflowSteps } from 'projen/lib/github';
import { JobPermission, JobStep, Job } from 'projen/lib/github/workflows-model';
import { CodeArtifactAuthProvider } from 'projen/lib/javascript';
import { DeployJobStrategy, DeployOptions, EnvironmentDeploymentDependencies, EnvironmentOptions } from './types';

const checkActiveDeploymentStepId = 'deployment-check';
const skipIfAlreadyActiveDeploymentCondition= `steps.${checkActiveDeploymentStepId}.outputs.has_active_deployment != 'true'`;

export interface DeployableAwsCdkTypeScriptAppStepsFactoryProps {
  /**
   * Deployment options
   */
  readonly deployOptions: DeployOptions;

  /**
   * Whether to check for active deployments before proceeding with deployment
   */
  readonly checkActiveDeployment: boolean;

  /**
   * The name of the task to run before installing dependencies, if any
   */
  readonly preInstallTaskName?: string;

  /**
   * The authentication provider for CodeArtifact, if any
   */
  readonly authProvider?: CodeArtifactAuthProvider;

  /**
   * The npm config to set with the environment that is being deployed, if any
   * Note: This is not supported for node versions above 18
   */
  readonly npmConfigEnvironment?: string;

  /**
   * Deployment job strategy, whether to use a matrix job or multiple jobs for each environment
   */
  readonly jobStrategy: DeployJobStrategy;

  /**
   * Environment deployment dependencies, if any
   */
  readonly environmentDependencies?: EnvironmentDeploymentDependencies;
}

/**
 * Factory to create reusable steps for the deployment workflow
 * @experimental
 */
export class DeployableAwsCdkTypeScriptAppStepsFactory {

  /**
   * Validate that the provided environment deployment dependencies are valid
   * @param deployOptions The deployment options
   * @param environmentDependencies The environment deployment dependencies to validate
   */
  public static validateEnvironmentDeploymentDependencies(
    deployOptions: DeployOptions,
    environmentDependencies: EnvironmentDeploymentDependencies,
  ): void {

    if (deployOptions.jobStrategy !== DeployJobStrategy.MULTI_JOB) {
      throw new Error('Environment deployment dependencies are only supported for MULTI_JOB strategy');
    }

    Object.entries(environmentDependencies).forEach(([env, deps]) => {
      const hasEnvironment = deployOptions.environments.some(e => e.name === env);
      if (!hasEnvironment) {
        throw new Error(`Environment "${env}" defined in dependencies does not exist in deployOptions.environments`);
      }
      deps.forEach(dep => {
        const hasDepEnvironment = deployOptions.environments.some(e => e.name === dep);
        if (!hasDepEnvironment) {
          throw new Error(`Dependency environment "${dep}" for environment "${env}" does not exist in deployOptions.environments`);
        }
      });
    });
  }

  /**
   * Create a new DeployableAwsCdkTypeScriptAppStepsFactory
   * @param project The project
   * @param props The factory properties
   */
  constructor(
    private readonly project: javascript.NodeProject,
    private readonly props: DeployableAwsCdkTypeScriptAppStepsFactoryProps,
  ) {}

  /**
   * Condition to skip a step if an active deployment is already present
   * @returns JobStep condition or undefined if checkActiveDeployment is false
   */
  public get skipIfAlreadyActiveDeploymentCondition(): JobStep | undefined {
    return this.props.checkActiveDeployment ? { if: `\${{ ${skipIfAlreadyActiveDeploymentCondition} }}` } : undefined;
  }

  public get checkoutStep(): JobStep {
    return WorkflowSteps.checkout({
      with: {
        fetchDepth: 0,
        ref: '${{ github.sha }}',
      },
    });
  }

  /**
   * Step to run before installing dependencies if exists
   * @returns JobStep or undefined if no preInstallTaskName is provided
   */
  public get preInstallDependenciesStep(): JobStep | undefined {
    if (!this.props.preInstallTaskName) {
      return undefined;
    }

    return {
      ...this.skipIfAlreadyActiveDeploymentCondition,
      name: this.props.preInstallTaskName,
      run: `npx projen ${this.props.preInstallTaskName}`,
    };
  }

  /**
   * Step to check if there is an active deployment for the environment in the matrix strategy
   * @returns JobStep
   */
  public get checkActiveDeploymentStepForMatrix(): JobStep | undefined {
    return this.getCheckActiveDeploymentStepForEnvironment('${{ matrix.environment }}');
  }

  /**
   * Step to check if there is an active deployment for a specific environment
   * @param environment The environment to check
   * @returns JobStep
   */
  public getCheckActiveDeploymentStepForEnvironment(environment: string): JobStep | undefined {
    if (!this.props.checkActiveDeployment) {
      return undefined;
    }

    return {
      id: checkActiveDeploymentStepId,
      uses: 'AminFazlMondo/check-deployed-environment@v1',
      with: {
        environment: environment,
      },
      env: {
        GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
      },
    };
  }

  /**
   * Step to setup AWS credentials in the environment for the matrix strategy
   * @returns JobStep[]
   */
  public get setupAwsCredentialsStepsForMatrix(): JobStep[] {
    return [
      this.setupAwsCredentialsInEnvironmentForMatrix,
      this.assumeAwsRoleStepForMatrix,
    ];
  }

  /**
   * Get the steps to setup AWS credentials for a specific environment
   * @param environmentOptions The environment options
   * @returns JobStep[]
   */
  public getSetupAwsCredentialsStepsForEnvironment(environmentOptions: EnvironmentOptions): JobStep[] {
    const steps: JobStep[] = [];

    const fromEnvVariableStep = this.getSetupAwsCredentialsInEnvironmentForEnvironment(
      environmentOptions.awsCredentials.roleToAssume ? true : false,
      environmentOptions.awsCredentials.accessKeyIdSecretName ?? 'AWS_ACCESS_KEY_ID',
      environmentOptions.awsCredentials.secretAccessKeySecretName ?? 'AWS_SECRET_ACCESS_KEY',
      environmentOptions.awsCredentials.region,
    );

    if (fromEnvVariableStep) {
      steps.push(fromEnvVariableStep);
    }

    const assumeRoleStep = this.getAssumeAwsRoleStepForEnvironment(
      environmentOptions.awsCredentials.roleToAssume ? true : false,
      environmentOptions.awsCredentials.accessKeyIdSecretName ?? 'AWS_ACCESS_KEY_ID',
      environmentOptions.awsCredentials.secretAccessKeySecretName ?? 'AWS_SECRET_ACCESS_KEY',
      environmentOptions.awsCredentials.region,
      environmentOptions.awsCredentials.roleToAssume ?? '',
      environmentOptions.awsCredentials.assumeRoleDurationSeconds ?? 900,
    );

    if (assumeRoleStep) {
      steps.push(assumeRoleStep);
    }

    return steps;
  }

  /**
   * Step to setup AWS credentials in the environment for the matrix strategy
   * @returns JobStep
   */
  public get setupAwsCredentialsInEnvironmentForMatrix(): JobStep {
    return this.getSetupAwsCredentialsInEnvironmentForEnvironment(
      'matrix.assumeRole',
      'matrix.accessKeyIdSecretName',
      'matrix.secretAccessKeySecretName',
      '${{ matrix.region }}',
    )!;
  }

  /**
   * Step to setup AWS credentials in the environment for a specific environment
   * @param assumeRoleFlag Whether to assume a role, can be a boolean or a string for matrix strategy
   * @param accessKeyIdSecretName The GitHub secret name for the access key ID
   * @param secretAccessKeySecretName The GitHub secret name for the secret access key
   * @param region The region
   * @returns JobStep or undefined if no AWS credentials are provided,
   * if assumeRoleFlag is boolean will be evaluated and return a JobStep only if false
   * if assumeRoleFlag is string will always return a JobStep (for matrix strategy)
   */
  public getSetupAwsCredentialsInEnvironmentForEnvironment(
    assumeRoleFlag: boolean | string,
    accessKeyIdSecretName: string,
    secretAccessKeySecretName: string,
    region: string,
  ): JobStep | undefined {

    function getCondition(factory: DeployableAwsCdkTypeScriptAppStepsFactory) {
      if (typeof assumeRoleFlag === 'boolean') {
        if (assumeRoleFlag) {
          return undefined;
        }
        return factory.props.checkActiveDeployment ? skipIfAlreadyActiveDeploymentCondition : undefined;
      }
      return factory.props.checkActiveDeployment ?
        `\${{ ${assumeRoleFlag} == 'false' && ${skipIfAlreadyActiveDeploymentCondition} }}` :
        `\${{ ${assumeRoleFlag} == 'false' }}`;
    }

    const commands = [
      'echo "AWS_ACCESS_KEY_ID=$accessKeyId" >> $GITHUB_ENV',
      'echo "AWS_SECRET_ACCESS_KEY=$secretAccessKey" >> $GITHUB_ENV',
      'echo "AWS_REGION=$region" >> $GITHUB_ENV',
    ];

    if (typeof assumeRoleFlag === 'boolean' && assumeRoleFlag) {
      return undefined;
    }

    const condition = getCondition(this);

    return {
      if: condition,
      name: 'Configure AWS Credentials',
      run: `${commands.join('\n')}`,
      env: {
        accessKeyId: `\${{ secrets[${accessKeyIdSecretName}] }}`,
        secretAccessKey: `\${{ secrets[${secretAccessKeySecretName}] }}`,
        region,
      },
    };
  }

  /**
   * Step to assume an AWS role for the matrix strategy
   * @returns JobStep
   */
  public get assumeAwsRoleStepForMatrix(): JobStep {
    return this.getAssumeAwsRoleStepForEnvironment(
      'matrix.assumeRole',
      'matrix.accessKeyIdSecretName',
      'matrix.secretAccessKeySecretName',
      '${{ matrix.region }}',
      '${{ matrix.roleToAssume }}',
      '${{ matrix.assumeRoleDurationSeconds }}',
    )!;
  }

  /**
   * Step to assume an AWS role for a specific environment
   * @param assumeRoleFlag Whether to assume a role, can be a boolean or a string for matrix strategy
   * @param accessKeyIdSecretName The GitHub secret name for the access key ID
   * @param secretAccessKeySecretName The GitHub secret name for the secret access key
   * @param region The region
   * @param roleToAssume The role to assume
   * @param assumeRoleDurationSeconds The duration for assuming the role
   * @returns JobStep or undefined if assumeRoleFlag is boolean and false
   * if assumeRoleFlag is string will always return a JobStep (for matrix strategy)
   */
  public getAssumeAwsRoleStepForEnvironment(
    assumeRoleFlag: boolean | string,
    accessKeyIdSecretName: string,
    secretAccessKeySecretName: string,
    region: string,
    roleToAssume: string,
    assumeRoleDurationSeconds?: string | number,
  ): JobStep | undefined {
    function getCondition(factory: DeployableAwsCdkTypeScriptAppStepsFactory) {
      if (typeof assumeRoleFlag === 'boolean') {
        if (!assumeRoleFlag) {
          return undefined;
        }
        return factory.props.checkActiveDeployment ? skipIfAlreadyActiveDeploymentCondition : undefined;
      }
      return factory.props.checkActiveDeployment ?
        `\${{ ${assumeRoleFlag} == 'true' && ${skipIfAlreadyActiveDeploymentCondition} }}` :
        `\${{ ${assumeRoleFlag} == 'true' }}`;
    }

    if (typeof assumeRoleFlag === 'boolean' && !assumeRoleFlag) {
      return undefined;
    }

    const condition = getCondition(this);

    const secretsParams =
      this.props.authProvider === CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR ?
        {
          'aws-access-key-id': `\${{ secrets[${accessKeyIdSecretName}] }}`,
          'aws-secret-access-key': `\${{ secrets[${secretAccessKeySecretName}] }}`,
        } : undefined;
    return {
      if: condition,
      name: 'Assume AWS Role',
      uses: 'aws-actions/configure-aws-credentials@v4',
      with: {
        ...secretsParams,
        'role-to-assume': roleToAssume,
        'aws-region': region,
        'role-duration-seconds': assumeRoleDurationSeconds,
      },
    };
  }

  /**
   * Step to setup NPM config if provided
   * @returns JobStep or undefined if no npmConfig is provided
   */
  public get setupNpmConfigForMatrix(): JobStep | undefined {
    return this.getSetupNpmConfigForEnvironment('${{ matrix.environment }}');
  }

  public getSetupNpmConfigForEnvironment(environment: string): JobStep | undefined {
    const { npmConfigEnvironment } = this.props;
    if (!npmConfigEnvironment) {
      return undefined;
    }

    const environmentVariableName = 'CONFIG_VALUE';
    return {
      ...this.skipIfAlreadyActiveDeploymentCondition,
      name: 'Setting NPM Config',
      env: {
        [environmentVariableName]: environment,
      },
      run: `npm config set ${npmConfigEnvironment} $${environmentVariableName}`,
    };
  }

  /**
   * Get the step to run a specific script
   * @param scriptName The name of the script to run
   * @param stepName The name of the step in the workflow
   * @param hasScriptFlag Whether the script should be run
   * @returns The job step to run the script or undefined if not applicable
   * If hasScriptFlag is boolean and false will return undefined
   * If hasScriptFlag is string will always return a JobStep (for matrix strategy)
   */
  public getRunScriptStep(
    scriptName: string,
    stepName: string,
    hasScriptFlag: boolean | string,
  ): JobStep | undefined {
    function getCondition(factory: DeployableAwsCdkTypeScriptAppStepsFactory) {
      if (typeof hasScriptFlag === 'boolean') {
        if (!hasScriptFlag) {
          return undefined;
        }
        return factory.props.checkActiveDeployment ? skipIfAlreadyActiveDeploymentCondition : undefined;
      }
      return factory.props.checkActiveDeployment ?
        `\${{ ${hasScriptFlag} == 'true' && ${skipIfAlreadyActiveDeploymentCondition} }}` :
        `\${{ ${hasScriptFlag} == 'true' }}`;
    }
    if (typeof hasScriptFlag === 'boolean' && !hasScriptFlag) {
      return undefined;
    }

    const condition = getCondition(this);

    return {
      if: condition,
      name: `Run ${stepName}`,
      run: `${this.project.runScriptCommand} ${scriptName}`,
    };
  }

  /**
   * Step to deploy the workflow
   * @returns JobStep
   */
  public get deploymentStep(): JobStep {
    return this.getRunScriptStep(
      'deploy:workflow',
      'Deployment',
      true,
    )!;
  }

  /**
   * Step to run post deployment script in matrix strategy
   * @returns JobStep
   */
  public get preDeploymentStepForMatrix(): JobStep {
    return this.getPreDeploymentStepForEnvironment(
      'matrix.hasPreDeployTask',
      '${{ matrix.preDeploymentScript }}',
    )!;
  }

  /**
   * Get the pre-deployment step for a specific environment
   * @param hasPreDeployTaskFlag Whether the pre-deployment task should be run
   * @param preDeploymentScript The script to run
   * @returns The job step to run the pre-deployment script or undefined if not applicable
   * If hasPreDeployTaskFlag is boolean and false will return undefined
   * If hasPreDeployTaskFlag is string will always return a JobStep (for matrix strategy)
   */
  public getPreDeploymentStepForEnvironment(
    hasPreDeployTaskFlag: boolean | string,
    preDeploymentScript: string,
  ): JobStep | undefined {

    return this.getRunScriptStep(
      preDeploymentScript,
      'Pre Deployment',
      hasPreDeployTaskFlag,
    );
  }

  /**
   * Step to run post deployment script in matrix strategy
   * @returns JobStep
   */
  public get postDeploymentStepForMatrix(): JobStep {
    return this.getPostDeploymentStepForEnvironment(
      'matrix.hasPostDeployTask',
      '${{ matrix.postDeploymentScript }}',
    )!;
  }

  /**
   * Get the post-deployment step for a specific environment
   * @param hasPostDeployTaskFlag Whether the post-deployment task should be run
   * @param postDeploymentScript The script to run
   * @returns The job step to run the post-deployment script or undefined if not applicable
   * If hasPostDeployTaskFlag is boolean and false will return undefined
   * If hasPostDeployTaskFlag is string will always return a JobStep (for matrix strategy)
   */
  public getPostDeploymentStepForEnvironment(
    hasPostDeployTaskFlag: boolean | string,
    postDeploymentScript: string,
  ): JobStep | undefined {

    return this.getRunScriptStep(
      postDeploymentScript,
      'Post Deployment',
      hasPostDeployTaskFlag,
    );
  }

  /**
   * Get all deployment jobs whether for matrix strategy or not
   * @returns Record of jobs
   */
  public get deploymentJobs(): Record<string, Job> {

    if (this.props.deployOptions.environments.length === 0) {
      this.project.logger.warn('The project does not have any environment set, make sure this is desired setting');
    }
    return this.props.jobStrategy === DeployJobStrategy.MATRIX ? this.deploymentJobsForMatrix : this.getDeploymentJobsForMultiJob();
  }

  /**
   * Get deployment jobs for matrix strategy
   * @returns Record of jobs
   */
  public get deploymentJobsForMatrix(): Record<string, Job> {

    const { environments, environmentVariableName } = this.props.deployOptions;

    const include = environments.map(environmentOptions => {
      const { awsCredentials } = environmentOptions;

      const assumeRole = awsCredentials.roleToAssume ? 'true' : 'false';

      const assumeRoleSettings = awsCredentials.roleToAssume ? {
        roleToAssume: awsCredentials.roleToAssume,
        assumeRoleDurationSeconds: awsCredentials.assumeRoleDurationSeconds || 900,
      }: undefined;

      const accessKeyIdSecretName = awsCredentials.accessKeyIdSecretName ?? 'AWS_ACCESS_KEY_ID';
      const secretAccessKeySecretName = awsCredentials.secretAccessKeySecretName ?? 'AWS_SECRET_ACCESS_KEY';

      const hasPostDeployTask = environmentOptions.postDeployWorkflowScript ? 'true' : 'false';
      const hasPreDeployTask = environmentOptions.preDeployWorkflowScript ? 'true' : 'false';

      return {
        environment: environmentOptions.name,
        accessKeyIdSecretName,
        secretAccessKeySecretName,
        region: awsCredentials.region,
        assumeRole,
        hasPostDeployTask,
        postDeploymentScript: environmentOptions.postDeployWorkflowScript || '',
        hasPreDeployTask,
        preDeploymentScript: environmentOptions.preDeployWorkflowScript || '',
        ...assumeRoleSettings,
      };
    });

    const deployJobEnv = environmentVariableName ? {
      [environmentVariableName]: '${{ matrix.environment }}',
    } : undefined;

    const jobDefinition: Job = {
      runsOn: ['ubuntu-latest'],
      concurrency: {
        'group': '${{ matrix.environment }}-deploy',
        'cancel-in-progress': false,
      },
      needs: [
        'release_github',
      ],
      permissions: {
        contents: JobPermission.READ,
        deployments: JobPermission.READ,
        idToken: this.props.authProvider === CodeArtifactAuthProvider.GITHUB_OIDC ? JobPermission.WRITE : undefined,
      },
      strategy: {
        maxParallel: 1,
        matrix: {
          domain: {
            environment: include.map(e => e.environment),
          },
          include,
        },
      },
      environment: {
        name: '${{ matrix.environment }}',
      },
      env: deployJobEnv,
      steps: [],
    };

    jobDefinition.steps.push(this.checkoutStep);

    const preInstallDependenciesStep = this.preInstallDependenciesStep;
    if (preInstallDependenciesStep) {
      jobDefinition.steps.push(preInstallDependenciesStep);
    }

    jobDefinition.steps.push(...(this.project).renderWorkflowSetup());

    const checkActiveDeploymentStepForMatrix = this.checkActiveDeploymentStepForMatrix;
    if (checkActiveDeploymentStepForMatrix) {
      jobDefinition.steps.push(checkActiveDeploymentStepForMatrix);
    }

    jobDefinition.steps.push(...this.setupAwsCredentialsStepsForMatrix);

    const setupNpmConfigStep = this.setupNpmConfigForMatrix;
    if (setupNpmConfigStep) {
      jobDefinition.steps.push(setupNpmConfigStep);
    }

    jobDefinition.steps.push(this.preDeploymentStepForMatrix);
    jobDefinition.steps.push(this.deploymentStep);
    jobDefinition.steps.push(this.postDeploymentStepForMatrix);

    return { deploy: jobDefinition };
  }

  /**
   * Get the IDs of the jobs that must be completed before the specified environment's deployment job
   * @param environmentName The name of the environment
   * @returns An array of job IDs
   */
  public getDeploymentJobPrerequisiteJobIds(environmentName: string): string[] {
    const result = ['release_github'];
    if (!this.props.environmentDependencies) {
      const index = this.props.deployOptions.environments.findIndex(env => env.name === environmentName);
      const prerequisiteEnvironment = index > 0 ? this.props.deployOptions.environments[index - 1] : undefined;
      if (prerequisiteEnvironment) {
        result.push(getDeployJobId(prerequisiteEnvironment.name));
      }
    } else {
      const dependencies = this.props.environmentDependencies[environmentName];
      if (dependencies) {
        dependencies.forEach(dep => {
          result.push(getDeployJobId(dep));
        });
      }
    }
    return result;
  }

  /**
   * Get deployment jobs for multi-job strategy
   * @returns Record of jobs
   */
  public getDeploymentJobsForMultiJob(): Record<string, Job> {
    const { environmentVariableName, environments } = this.props.deployOptions;
    const jobs = environments.map((environmentOptions): [string, Job] => {
      return [getDeployJobId(environmentOptions.name), this.getJobForEnvironment(environmentOptions, environmentVariableName)];
    });
    return Object.fromEntries(jobs);
  }

  /**
   * Get the job definition for a specific environment
   * @param environmentOptions The environment options
   * @param environmentVariableName The name of the environment variable to set with the environment name, if any
   * @returns The job definition for the environment
   */
  public getJobForEnvironment(
    environmentOptions: EnvironmentOptions,
    environmentVariableName: string | undefined,
  ): Job {
    const { name } = environmentOptions;
    const deployJobEnv = environmentVariableName ? {
      [environmentVariableName]: name,
    } : undefined;

    const jobDefinition: Job = {
      runsOn: ['ubuntu-latest'],
      concurrency: {
        'group': `${name}-deploy`,
        'cancel-in-progress': false,
      },
      needs: this.getDeploymentJobPrerequisiteJobIds(name),
      permissions: {
        contents: JobPermission.READ,
        deployments: JobPermission.READ,
        idToken: this.props.authProvider === CodeArtifactAuthProvider.GITHUB_OIDC ? JobPermission.WRITE : undefined,
      },
      environment: {
        name: name,
      },
      env: deployJobEnv,
      steps: [],
    };

    jobDefinition.steps.push(this.checkoutStep);

    const preInstallDependenciesStep = this.preInstallDependenciesStep;
    if (preInstallDependenciesStep) {
      jobDefinition.steps.push(preInstallDependenciesStep);
    }

    jobDefinition.steps.push(...(this.project).renderWorkflowSetup());

    const checkActiveDeploymentStep = this.getCheckActiveDeploymentStepForEnvironment(name);
    if (checkActiveDeploymentStep) {
      jobDefinition.steps.push(checkActiveDeploymentStep);
    }

    jobDefinition.steps.push(...this.getSetupAwsCredentialsStepsForEnvironment(environmentOptions));

    const setupNpmConfigStep = this.getSetupNpmConfigForEnvironment(name);
    if (setupNpmConfigStep) {
      jobDefinition.steps.push(setupNpmConfigStep);
    }

    const preDeploymentStep = this.getPreDeploymentStepForEnvironment(
      environmentOptions.preDeployWorkflowScript ? true : false,
      environmentOptions.preDeployWorkflowScript || '',
    );
    if (preDeploymentStep) {
      jobDefinition.steps.push(preDeploymentStep);
    }

    jobDefinition.steps.push(this.deploymentStep);

    const postDeploymentStep = this.getPostDeploymentStepForEnvironment(
      environmentOptions.postDeployWorkflowScript ? true : false,
      environmentOptions.postDeployWorkflowScript || '',
    );
    if (postDeploymentStep) {
      jobDefinition.steps.push(postDeploymentStep);
    }

    return jobDefinition;
  }

}

/**
 * Get the deploy job ID for a specific environment
 * @param environmentName The name of the environment
 * @returns The deploy job ID
 */
export function getDeployJobId(environmentName: string): string {
  return `Deploy-${environmentName}`;
}
