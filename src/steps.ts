import { javascript } from 'projen';
import { JobStep } from 'projen/lib/github/workflows-model';
import { CodeArtifactAuthProvider } from 'projen/lib/javascript';

const checkActiveDeploymentStepId = 'deployment-check';
const skipIfAlreadyActiveDeploymentCondition= `steps.${checkActiveDeploymentStepId}.outputs.has_active_deployment != 'true'`;

export interface DeployableAwsCdkTypeScriptAppStepsFactoryProps {
  readonly project: javascript.NodeProject;
  readonly checkActiveDeployment: boolean;
  readonly preInstallTaskName?: string;
  readonly authProvider: CodeArtifactAuthProvider;
  readonly npmConfig?: {
    name: string;
    value: string;
  };
}
/**
 * Factory to create reusable steps for the deployment workflow
 */
export class DeployableAwsCdkTypeScriptAppStepsFactory {
  constructor(
    private readonly props: DeployableAwsCdkTypeScriptAppStepsFactoryProps,
  ) {}

  /**
   * Condition to skip a step if an active deployment is already present
   * @returns JobStep condition or undefined if checkActiveDeployment is false
   */
  public get skipIfAlreadyActiveDeploymentCondition(): JobStep | undefined {
    return this.props.checkActiveDeployment ? { if: `\${{ ${skipIfAlreadyActiveDeploymentCondition} }}` } : undefined;
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
  public get checkActiveDeploymentStepForMatrix(): JobStep {
    return this.getCheckActiveDeploymentStepForEnvironment('${{ matrix.environment }}');
  }

  /**
   * Step to check if there is an active deployment for a specific environment
   * @param environment The environment to check
   * @returns JobStep
   */
  public getCheckActiveDeploymentStepForEnvironment(environment: string): JobStep {
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
  public get setupNpmConfig(): JobStep | undefined {
    const { npmConfig } = this.props;
    if (!npmConfig) {
      return undefined;
    }

    const environmentVariableName = 'CONFIG_VALUE';
    return {
      ...this.skipIfAlreadyActiveDeploymentCondition,
      name: 'Setting NPM Config',
      env: {
        [environmentVariableName]: npmConfig.value,
      },
      run: `npm config set ${npmConfig.name} $${environmentVariableName}`,
    };
  }

  /**
   * Get the step to run a specific script
   * @param scriptName The name of the script to run
   * @param hasScriptFlag Whether the script should be run
   * @returns The job step to run the script or undefined if not applicable
   * If hasScriptFlag is boolean and false will return undefined
   * If hasScriptFlag is string will always return a JobStep (for matrix strategy)
   */
  public getRunScriptStep(
    scriptName: string,
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
      name: `Run ${scriptName}`,
      run: `${this.props.project.runScriptCommand} ${scriptName}`,
    };
  }

  /**
   * Step to deploy the workflow
   * @returns JobStep
   */
  public get deploymentStep(): JobStep {
    return this.getRunScriptStep(
      'deploy:workflow',
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
      hasPostDeployTaskFlag,
    );
  }

}
