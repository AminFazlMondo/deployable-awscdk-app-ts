import {AwsCdkTypeScriptApp} from 'projen'
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
      push: {
        branches: [this.options.defaultReleaseBranch],
      },
    })
  }
}