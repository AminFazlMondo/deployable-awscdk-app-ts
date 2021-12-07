import {awscdk} from 'projen'

export interface DeployableAwsCdkTypeScriptAppOptions extends awscdk.AwsCdkTypeScriptAppOptions {
  /**
   * Deployment options
   */
  readonly deployOptions: DeployOptions;

  /**
   * Whether to generate nvmrc file for the node version of the project
   * @default true
   */
  readonly generateNvmrc?: boolean;
}

export interface DeployOptions {
  /**
   * Environment settings to deploy to
   */
  readonly environments: EnvironmentOptions[];

  /**
   * Regex for stacks to be deployed
   *
   * if not provided matches all of the stacks in the CDK App.
   * @default undefined
   */
  readonly stackPattern?: string;

  /**
   * npm config name to set as the environment name
   * This might be useful in deployment process
   *
   * if not provided will not set
   * @default undefined
   */
  readonly npmConfigEnvironment?: string;
}

export interface EnvironmentOptions {
  /**
   * Environment name to deploy to
   */
  readonly name: string;

  /**
   * AWS credential details for deployment
   */
  readonly awsCredentials: AWSCredentials;
}

export interface AWSCredentials {
  /**
   * GitHub Secret name for AWS Access Key Id
   * @default "AWS_ACCESS_KEY_ID"
   */
  readonly accessKeyIdSecretName?: string;

  /**
   * GitHub Secret name for AWS Secret Access Key
   * @default "AWS_SECRET_ACCESS_KEY"
   */
  readonly secretAccessKeySecretName?: string;

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
