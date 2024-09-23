import {awscdk, Task, TextFile} from 'projen'
import {Job, JobPermission} from 'projen/lib/github/workflows-model'
import {CodeArtifactAuthProvider, CodeArtifactOptions, NodeProject} from 'projen/lib/javascript'
import * as steps from './steps'
import {DeployableAwsCdkTypeScriptAppOptions, DeployOptions, EnvironmentOptions} from './types'
import {getMajorNodeVersion} from './utils'

export * from './types'
export * as utils from './utils'

export class DeployableAwsCdkTypeScriptApp extends awscdk.AwsCdkTypeScriptApp {

  /**
   * Task to deploy your app.
   */
  public readonly deployWorkflowTask: Task

  private readonly deployable: boolean
  private readonly generateNvmrc: boolean
  private readonly checkActiveDeployment: boolean
  private readonly workflowNodeVersion?: string
  protected deployOptions: DeployOptions
  private readonly codeArtifactOptions?: CodeArtifactOptions

  constructor(options: DeployableAwsCdkTypeScriptAppOptions) {
    const deployable = options.release ?? true
    super({
      ...options,
      release: deployable,
    })
    this.deployable = deployable
    this.generateNvmrc = options.generateNvmrc ?? true
    this.checkActiveDeployment = options.checkActiveDeployment ?? false
    this.workflowNodeVersion = options.workflowNodeVersion
    this.deployOptions = options.deployOptions ?? {environments: []}
    this.codeArtifactOptions = options.codeArtifactOptions
    this.addDevDeps('deployable-awscdk-app-ts')

    if (!deployable)
      this.logger.warn('The project is explicitly set to not release, make sure this is desired setting')

    if (this.generateNvmrc && !this.workflowNodeVersion)
      this.workflowNodeVersion = '14.18.1'

    if (this.deployOptions.npmConfigEnvironment && this.majorNodeVersion >= 18)
      throw new Error(`npmConfigEnvironment is not supported for node versions above version 18. Current version is ${this.nodeVersion}`)

    const deployArgument = this.deployOptions.stackPattern ? ` ${this.deployOptions.stackPattern}`: ''
    const deployCommand = `cdk deploy${deployArgument} ${this.getMethodArgument()} --require-approval never`
    const requiredEnv = this.deployOptions.npmConfigEnvironment ? [`npm_config_${this.deployOptions.npmConfigEnvironment}`] : undefined
    this.deployWorkflowTask = this.addTask('deploy:workflow', {
      requiredEnv,
      exec: deployCommand,
    })
    this.addTask('deploy:hotswap', {
      requiredEnv,
      exec: `${deployCommand} --hotswap`,
    })
  }

  /**
   * return the major node version set for the project
   * @default 16
   */
  get majorNodeVersion(): number {
    return getMajorNodeVersion(this.nodeVersion)
  }

  private getMethodArgument() {
    return `--method ${this.deployOptions.method ?? 'change-set'}`
  }

  synth() {
    if (this.deployable)
      this.addDeployJobs()

    if (this.generateNvmrc)
      new TextFile(this, '.nvmrc', {
        lines: [this.workflowNodeVersion ?? ''],
      })

    super.synth()
  }

  /**
   * Add new environments to the application
   * @param items list of environment options
   */
  addEnvironments(...items: EnvironmentOptions[]) {
    this.deployOptions.environments.push(...items)
  }

  private updateEnvironments(newEnvironments: EnvironmentOptions[]) {
    this.deployOptions = {
      ...this.deployOptions,
      environments: newEnvironments,
    }
  }

  /**
   * Updates the postDeployWorkflowScript for environments
   * @param script the script to be added, for example "post:deploy"
   * @param environmentNameFilter the name of environments to add the scripts to, if not provided or empty will update all
   */
  updatePostDeployWorkflowScriptToEnvironments(script: string, environmentNameFilter?: string[]) {
    const newEnvironments = this.deployOptions.environments.map(environment => {
      if (environmentNameFilter && environmentNameFilter.length > 0 && !environmentNameFilter.includes(environment.name))
        return environment

      return {
        ...environment,
        postDeployWorkflowScript: script,
      }
    })
    this.updateEnvironments(newEnvironments)
  }

  /**
   * Updates the preDeployWorkflowScript for environments
   * @param script the script to be added, for example "pre:deploy"
   * @param environmentNameFilter the name of environments to add the scripts to, if not provided or empty will update all
   */
  updatePreDeployWorkflowScriptToEnvironments(script: string, environmentNameFilter?: string[]) {
    const newEnvironments = this.deployOptions.environments.map(environment => {
      if (environmentNameFilter && environmentNameFilter.length > 0 && !environmentNameFilter.includes(environment.name))
        return environment

      return {
        ...environment,
        preDeployWorkflowScript: script,
      }
    })
    this.updateEnvironments(newEnvironments)
  }

  private addDeployJobs() {

    if (this.deployOptions.environments.length === 0)
      this.logger.warn('The project does not have any environment set, make sure this is desired setting')

    const include = this.deployOptions.environments.map(environmentOptions => {
      const {awsCredentials} = environmentOptions

      const assumeRole = awsCredentials.roleToAssume ? 'true' : 'false'

      const assumeRoleSettings = awsCredentials.roleToAssume ? {
        roleToAssume: awsCredentials.roleToAssume,
        assumeRoleDurationSeconds: awsCredentials.assumeRoleDurationSeconds || 900,
      }: undefined

      const accessKeyIdSecretName = awsCredentials.accessKeyIdSecretName ?? 'AWS_ACCESS_KEY_ID'
      const secretAccessKeySecretName = awsCredentials.secretAccessKeySecretName ?? 'AWS_SECRET_ACCESS_KEY'

      const hasPostDeployTask = environmentOptions.postDeployWorkflowScript ? 'true' : 'false'
      const hasPreDeployTask = environmentOptions.preDeployWorkflowScript ? 'true' : 'false'

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
      }
    })

    const deployJobEnv = this.deployOptions.environmentVariableName ? {
      [this.deployOptions.environmentVariableName]: '${{ matrix.environment }}',
    } : undefined

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
        idToken: this.codeArtifactOptions?.authProvider === CodeArtifactAuthProvider.GITHUB_OIDC ? JobPermission.WRITE : undefined,
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
    }

    jobDefinition.steps.push(steps.checkoutStep())

    const {taskToRunPreInstall} = this.deployOptions
    if (taskToRunPreInstall)
      jobDefinition.steps.push(steps.preInstallDependenciesStep(taskToRunPreInstall, this.checkActiveDeployment))

    jobDefinition.steps.push(...(this.package.project as NodeProject).renderWorkflowSetup())

    if (this.checkActiveDeployment)
      jobDefinition.steps.push(steps.checkActiveDeploymentStep())

    jobDefinition.steps.push(...steps.setAwsCredentialsSteps(this.checkActiveDeployment, this.codeArtifactOptions?.authProvider))

    if (this.deployOptions.npmConfigEnvironment)
      jobDefinition.steps.push(steps.setNpmConfig(this.deployOptions.npmConfigEnvironment, '${{ matrix.environment }}', this.checkActiveDeployment))

    jobDefinition.steps.push(steps.preDeploymentStep(this.checkActiveDeployment, this.package.packageManager))
    jobDefinition.steps.push(steps.deploymentStep(this.checkActiveDeployment, this.package.packageManager))
    jobDefinition.steps.push(steps.postDeploymentStep(this.checkActiveDeployment, this.package.packageManager))

    this.release?.addJobs({deploy: jobDefinition})

  }
}