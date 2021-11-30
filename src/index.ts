import {AwsCdkTypeScriptApp} from 'projen'
import {Job, JobPermission} from 'projen/lib/github/workflows-model'
import * as steps from './steps'
import {DeployableAwsCdkTypeScriptAppOptions, DeployOptions} from './types'

export * from './types'

export class DeployableAwsCdkTypeScriptApp extends AwsCdkTypeScriptApp {

  private readonly deployOptions: DeployOptions

  constructor(options: DeployableAwsCdkTypeScriptAppOptions) {
    const release = options.release ?? true
    super({
      ...options,
      release,
    })
    this.deployOptions = options.deployOptions

    if (release)
      this.addDeployJobs(options.workflowNodeVersion)
  }

  private addDeployJobs(workflowNodeVersion?: string) {

    const include = this.deployOptions.environments.map((environment) => ({environment}))

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

    if (workflowNodeVersion)
      jobDefinition.steps.push(steps.setNodeVersionStep(workflowNodeVersion))

    jobDefinition.steps.push(steps.installDependenciesStep())
    jobDefinition.steps.push(steps.setAwsCredentials(this.deployOptions.awsCredentials))
    jobDefinition.steps.push(steps.deploymentStep(this.deployOptions.stackPattern))

    this.release?.addJobs({deploy: jobDefinition})
  }
}