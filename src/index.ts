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

    this.addDeployWorkflow()
  }

  private addDeployWorkflow() {
    const workflow = this.github?.addWorkflow('deploy')

    if (!workflow)
      throw new Error('Failed to add workflow file')

    workflow.on({
      release: {
        types: ['published'],
      },
    })

    const include = this.options.environments.map((environment) => ({environment}))

    const jobDefinition: Job = {
      runsOn: 'ubuntu-latest',
      concurrency: 'deploy',
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
    workflow.addJobs({deploy: jobDefinition})
  }
}