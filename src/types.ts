import {awscdk} from 'projen'

export interface DeployableAwsCdkTypeScriptAppOptions extends awscdk.AwsCdkTypeScriptAppOptions {
  /**
   * Deployment options
   * @default "config with empty list of environments"
   */
  readonly deployOptions?: DeployOptions;

  /**
   * Whether to generate nvmrc file for the node version of the project
   * if set to true, and no "workflowNodeVersion" is specified will use version 14.18.1
   * @default true
   */
  readonly generateNvmrc?: boolean;

  /**
   * Whether to check and skip the deployment for environments that have active deployment of the same commit
   * @default false
   */
  readonly checkActiveDeployment?: boolean;
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
   * Does not support node versions above 18.
   *
   * if not provided will not set
   * @default undefined
   */
  readonly npmConfigEnvironment?: string;

  /**
   * task name to run prior to installation in deploy job of workflow
   * if not provided will not add to workflow
   * @default undefined
   */
  readonly taskToRunPreInstall?: string;

  /**
   * How to perform the deployment. Direct is a bit faster but lacks progress information
   * @default "change-set"
   */
  readonly method?: 'direct' | 'change-set' | 'prepare-change-set';
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

  /**
   * The script/task to run after deployment of the environment in the workflow
   * If not present, the workflow will not execute that
   *
   * @example "post:deploy"
   */
  readonly postDeployWorkflowScript?: string;

  /**
   * The script/task to run before deployment of the environment in the workflow
   * If not present, the workflow will not execute that
   *
   * @example "pre:deploy"
   */
  readonly preDeployWorkflowScript?: string;
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
   * @default 900
   */
  readonly assumeRoleDurationSeconds?: number;

  /**
   * Default AWS region for the account
   * @example "us-east-2"
   */
  readonly region: string;
}
