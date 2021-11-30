import {AwsCdkTypeScriptAppOptions} from 'projen'

export interface DeployableAwsCdkTypeScriptAppOptions extends AwsCdkTypeScriptAppOptions {
  /**
   * Deployment options
   */
  readonly deployOptions: DeployOptions;
}

export interface DeployOptions {
  /**
   * Environment names to deploy to
   */
  readonly environments: string[];

  /**
   * Regex for stacks to be deployed
   *
   * if not provided matches all of the stacks in the CDK App.
   */
  readonly stackPattern?: string;

  /**
   * AWS credential details for deployment
   */
  readonly awsCredentials: AWSCredentials;
}

export type AWSCredentials = AWSCredentialsValues | AWSCredentialsGitHubSecrets

export interface AWSCredentialsGitHubSecrets extends AWSCredentialsBase {
  /**
   * GitHub Secret name for AWS Access Key Id
   */
  readonly accessKeyIdSecretName: string;

  /**
   * GitHub Secret name for AWS Secret Access Key
   */
  readonly secretAccessKeySecretName: string;
}

export interface AWSCredentialsValues extends AWSCredentialsBase {
  /**
   * AWS Access Key Id
   */
  readonly accessKeyId: string;

  /**
   * AWS Secret Access Key
   */
  readonly secretAccessKey: string;
}

export interface AWSCredentialsBase {
  /**
   * ARN of AWS role to be assumed
   */
  readonly roleToAssume?: string;

  /**
   * Duration of assume role session
   * @default 300
   */
  readonly assumeRoleDurationSeconds?: number;

  /**
   * Default AWS region for the account
   * @example "us-east-2"
   */
  readonly region: string;
}
