import {AwsCdkTypeScriptAppOptions} from 'projen'

export interface DeployableAwsCdkTypeScriptAppOptions extends AwsCdkTypeScriptAppOptions {
  /**
   * Environment names to deploy to
   */
  readonly environments: string[];
}