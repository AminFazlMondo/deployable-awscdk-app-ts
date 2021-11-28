import {AwsCdkTypeScriptAppOptions} from 'projen'

export interface DeployableAwsCdkTypeScriptAppOptions extends AwsCdkTypeScriptAppOptions {
  /**
   * Environment names to deploy to
   */
  readonly environments: string[];

  /**
   * Regex for stacks to be deployed
   *
   * @default "undefined" - matches all of the stacks in the CDK App.
   */
  readonly stackPattern?: string;
}