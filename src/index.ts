import {awscdk, TextFile} from 'projen'
import {Job, JobPermission} from 'projen/lib/github/workflows-model'
import * as steps from './steps'
import {DeployableAwsCdkTypeScriptAppOptions, DeployOptions, EnvironmentOptions} from './types'

export * from './types'

export class DeployableAwsCdkTypeScriptApp extends awscdk.AwsCdkTypeScriptApp {

  private readonly deployable: boolean
  private readonly generateNvmrc: boolean
  private readonly workflowNodeVersion?: string
  private readonly deployOptions: DeployOptions

  constructor(options: DeployableAwsCdkTypeScriptAppOptions) {
    const deployable = options.release ?? true
    super({
      ...options,
      release: deployable,
    })
    this.deployable = deployable
    this.generateNvmrc = options.generateNvmrc ?? true
    this.workflowNodeVersion = options.workflowNodeVersion
    this.deployOptions = options.deployOptions

    if (!deployable)
      console.warn('The project is explicitly set to not release, make sure this is desired setting')

    if (this.generateNvmrc && !this.workflowNodeVersion)
      throw new Error('workflowNodeVersion is required for nvmrc')
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

  addEnvironments(...items: EnvironmentOptions[]) {
    this.deployOptions.environments.push(...items)
  }

  private addDeployJobs() {

    if (this.deployOptions.environments.length === 0)
      console.warn('The project does not have any environment set, make sure this is desired setting')

    const include = this.deployOptions.environments.map(environmentOptions => {
      const {awsCredentials} = environmentOptions

      const assumeRole = awsCredentials.roleToAssume ? 'true' : 'false'

      const assumeRoleSettings = awsCredentials.roleToAssume ? {
        roleToAssume: awsCredentials.roleToAssume,
        assumeRoleDurationSeconds: (awsCredentials.assumeRoleDurationSeconds || 300).toString(),
      }: undefined

      return {
        environment: environmentOptions.name,
        accessKeyId: awsCredentials.accessKeyIdSecretName ?? 'AWS_ACCESS_KEY_ID',
        secretAccessKey: awsCredentials.secretAccessKeySecretName ?? 'AWS_SECRET_ACCESS_KEY',
        region: awsCredentials.region,
        assumeRole,
        ...assumeRoleSettings,
      }
    })

    const jobDefinition: Job = {
      runsOn: 'ubuntu-latest',
      concurrency: 'deploy',
      needs: [
        'release_github',
      ],
      permissions: {
        contents: JobPermission.READ,
      },
      strategy: {
        maxParallel: 1,
        matrix: {
          include,
        },
      },
      environment: {
        name: '${{ matrix.environment }}',
      },
      steps: [],
    }

    jobDefinition.steps.push(steps.checkoutStep())

    if (this.workflowNodeVersion)
      jobDefinition.steps.push(steps.setNodeVersionStep(this.workflowNodeVersion))

    jobDefinition.steps.push(steps.installDependenciesStep())
    jobDefinition.steps.push(...steps.setAwsCredentialsSteps())
    if (this.deployOptions.npmConfigEnvironment)
      jobDefinition.steps.push(steps.setNpmConfig(this.deployOptions.npmConfigEnvironment, '${{ matrix.environment }}'))

    jobDefinition.steps.push(steps.deploymentStep(this.deployOptions.stackPattern))

    this.release?.addJobs({deploy: jobDefinition})
  }
}