import {AwsCdkTypeScriptApp} from 'projen'
import {Job, JobPermission} from 'projen/lib/github/workflows-model'
import {DeployableAwsCdkTypeScriptAppOptions} from './types'

export * from './types'

export class DeployableAwsCdkTypeScriptApp extends AwsCdkTypeScriptApp {

  private readonly options: DeployableAwsCdkTypeScriptAppOptions

  constructor(options: DeployableAwsCdkTypeScriptAppOptions) {
    const release = options.release ?? true
    super({
      ...options,
      release,
    })
    this.options = options

    if (release)
      this.addDeployJobs()
  }

  private addDeployJobs() {

    const include = this.options.environments.map((environment) => ({environment}))

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
    jobDefinition.steps.push({
      name: 'Checkout',
      uses: 'actions/checkout@v2',
      with: {
        ref: '${{ github.sha }}',
      },
    })

    if (this.options.workflowNodeVersion)
      jobDefinition.steps.push({
        name: 'Setup Node.js',
        uses: 'actions/setup-node@v2.2.0',
        with: {
          'node-version': this.options.workflowNodeVersion,
        },
      })

    jobDefinition.steps.push({
      name: 'Install dependencies',
      run: 'npm ci',
    })

    const deployArgument = this.options.stackPattern ? ` ${this.options.stackPattern}`: ''

    jobDefinition.steps.push({
      name: 'Deployment',
      run: `npx projen deploy${deployArgument}`,
    })

    this.release?.addJobs({deploy: jobDefinition})
  }
}