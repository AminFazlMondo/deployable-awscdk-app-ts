import * as path from 'path';
import { awscdk, SourceCode, Task, TextFile } from 'projen';
import { CodeArtifactOptions } from 'projen/lib/javascript';
import { DeployableAwsCdkTypeScriptAppStepsFactory } from './steps';
import { DeployableAwsCdkTypeScriptAppDiffOutputOptions, DeployableAwsCdkTypeScriptAppOptions, DeployJobStrategy, DeployOptions, EnvironmentDeploymentDependencies, EnvironmentOptions } from './types';
import { getMajorNodeVersion } from './utils';

export * from './types';
export * as utils from './utils';
export * from './steps';

export class DeployableAwsCdkTypeScriptApp extends awscdk.AwsCdkTypeScriptApp {

  /**
   * Task to deploy your app.
   */
  public readonly deployWorkflowTask: Task;

  private readonly deployable: boolean;
  private readonly generateNvmrc: boolean;
  private readonly checkActiveDeployment: boolean;
  private readonly workflowNodeVersion?: string;
  private readonly codeArtifactOptions?: CodeArtifactOptions;
  private readonly deployJobStrategy: DeployJobStrategy;
  private readonly diffOutputOptions: DeployableAwsCdkTypeScriptAppDiffOutputOptions;

  protected deployOptions: DeployOptions;
  protected environmentDependencies: EnvironmentDeploymentDependencies | undefined;

  constructor(options: DeployableAwsCdkTypeScriptAppOptions) {
    const deployable = options.release ?? true;
    super({
      ...options,
      release: deployable,
    });
    this.deployable = deployable;
    this.generateNvmrc = options.generateNvmrc ?? true;
    this.checkActiveDeployment = options.checkActiveDeployment ?? false;
    this.workflowNodeVersion = options.workflowNodeVersion;
    this.deployOptions = options.deployOptions ?? { environments: [] };
    this.codeArtifactOptions = options.codeArtifactOptions;
    this.deployJobStrategy = this.deployOptions.jobStrategy ?? DeployJobStrategy.MATRIX;
    this.diffOutputOptions = {
      enable: options.diffOutput?.enable ?? false,
      annotateOnBuild: (options.diffOutput?.annotateOnBuild ?? options.diffOutput?.enable ?? false),
    };

    this.addDevDeps('deployable-awscdk-app-ts');
    this.addDiffOutputScript();

    if (!deployable) {this.logger.warn('The project is explicitly set to not release, make sure this is desired setting');}

    if (this.generateNvmrc && !this.workflowNodeVersion) {this.workflowNodeVersion = '14.18.1';}

    if (this.deployOptions.npmConfigEnvironment && this.majorNodeVersion >= 18) {throw new Error(`npmConfigEnvironment is not supported for node versions above version 18. Current version is ${this.nodeVersion}`);}

    const deployArgument = this.deployOptions.stackPattern ? ` ${this.deployOptions.stackPattern}`: '';
    const deployCommand = `cdk deploy${deployArgument} ${this.getMethodArgument()} --require-approval never`;
    const requiredEnv = this.deployOptions.npmConfigEnvironment ? [`npm_config_${this.deployOptions.npmConfigEnvironment}`] : undefined;
    this.deployWorkflowTask = this.addTask('deploy:workflow', {
      requiredEnv,
      exec: deployCommand,
    });
    this.addTask('deploy:hotswap', {
      requiredEnv,
      exec: `${deployCommand} --hotswap`,
    });
  }

  /**
   * return the major node version set for the project
   * @default 16
   */
  get majorNodeVersion(): number {
    return getMajorNodeVersion(this.nodeVersion);
  }

  private getMethodArgument() {
    return `--method ${this.deployOptions.method ?? 'change-set'}`;
  }

  /**
   * If the diff output is enabled, adds a script and a job step to generate the CDK diff output to a file in cdk.out
   * @returns void
   */
  private addDiffOutputScript() {
    if (!this.diffOutputOptions.enable) {return;}

    this.addDevDeps(
      '@aws-cdk/toolkit-lib',
      '@aws-cdk/cloudformation-diff',
    );

    const sourceCode = new SourceCode(this, 'scripts/generateDiffOutput.ts');
    sourceCode.line("import {createWriteStream} from 'fs'");
    sourceCode.line("import {formatDifferences} from '@aws-cdk/cloudformation-diff';");
    sourceCode.line("import {Toolkit} from '@aws-cdk/toolkit-lib';");
    sourceCode.line('');
    sourceCode.line('const cdk = new Toolkit({});');
    sourceCode.line('');
    sourceCode.open('async function main() {');
    sourceCode.line(`const cx = await cdk.fromCdkApp('ts-node-transpile-only ${path.posix.join(this.srcdir, this.appEntrypoint)}');`);
    sourceCode.line('const diffs = await cdk.diff(cx, {});');
    sourceCode.line("const stream = createWriteStream('./cdk.out/diff.log');");
    sourceCode.open('Object.entries(diffs).forEach(([stackName, diff]) => {');
    sourceCode.line('stream.write(`Difference for stack ${stackName}:\n`);');
    sourceCode.line('stream.write(`Difference for stack ${stackName}:\n`);');
    sourceCode.close('});');
    sourceCode.close('}');
    sourceCode.line('');
    sourceCode.open('main().catch((err) => {');
    sourceCode.line('console.error(err);');
    sourceCode.line('process.exit(1);');
    sourceCode.close('});');

    this.addTask('diff:output', {
      exec: 'ts-node --transpile-only scripts/generateDiff.ts',
    });
  }

  /**
   * If the diff output is enabled with annotation, adds the diff output generation step and the annotation steps to the build jobs
   * The annotation steps will add a comment to the GitHub PR with the diff output, and also add an annotation to the lines of code that are different between the deployed stack and the changes made on PR
   * @returns void
   */
  private addDiffAnnotation(): void {
    if (!this.diffOutputOptions.annotateOnBuild) {return;}

    const stepFactory = new DeployableAwsCdkTypeScriptAppStepsFactory(this, {
      checkActiveDeployment: this.checkActiveDeployment,
      deployOptions: this.deployOptions,
      preInstallTaskName: this.deployOptions.taskToRunPreInstall,
      npmConfigEnvironment: this.deployOptions.npmConfigEnvironment,
      jobStrategy: this.deployJobStrategy,
      environmentDependencies: this.environmentDependencies,
    });

    Object.entries(stepFactory.diffAnnotationJobs).forEach(([name, job]) => {
      this.buildWorkflow?.addPostBuildJob(name, job);
    });
  }

  synth() {
    if (this.deployable) {this.addDeployJobs();}

    if (this.generateNvmrc) {
      new TextFile(this, '.nvmrc', {
        lines: [this.workflowNodeVersion ?? ''],
      });
    }

    this.addDiffAnnotation();

    super.synth();
  }

  /**
   * Add new environments to the application
   * @param items list of environment options
   */
  addEnvironments(...items: EnvironmentOptions[]) {
    this.deployOptions.environments.push(...items);
  }

  private updateEnvironments(newEnvironments: EnvironmentOptions[]) {
    this.deployOptions = {
      ...this.deployOptions,
      environments: newEnvironments,
    };
  }

  /**
   * Updates the postDeployWorkflowScript for environments
   * @param script the script to be added, for example "post:deploy"
   * @param environmentNameFilter the name of environments to add the scripts to, if not provided or empty will update all
   */
  updatePostDeployWorkflowScriptToEnvironments(script: string, environmentNameFilter?: string[]) {
    const newEnvironments = this.deployOptions.environments.map(environment => {
      if (environmentNameFilter && environmentNameFilter.length > 0 && !environmentNameFilter.includes(environment.name)) {return environment;}

      return {
        ...environment,
        postDeployWorkflowScript: script,
      };
    });
    this.updateEnvironments(newEnvironments);
  }

  /**
   * Updates the preDeployWorkflowScript for environments
   * @param script the script to be added, for example "pre:deploy"
   * @param environmentNameFilter the name of environments to add the scripts to, if not provided or empty will update all
   */
  updatePreDeployWorkflowScriptToEnvironments(script: string, environmentNameFilter?: string[]) {
    const newEnvironments = this.deployOptions.environments.map(environment => {
      if (environmentNameFilter && environmentNameFilter.length > 0 && !environmentNameFilter.includes(environment.name)) {return environment;}

      return {
        ...environment,
        preDeployWorkflowScript: script,
      };
    });
    this.updateEnvironments(newEnvironments);
  }

  private addDeployJobs() {

    const stepFactory = new DeployableAwsCdkTypeScriptAppStepsFactory(this, {
      authProvider: this.codeArtifactOptions?.authProvider,
      checkActiveDeployment: this.checkActiveDeployment,
      deployOptions: this.deployOptions,
      preInstallTaskName: this.deployOptions.taskToRunPreInstall,
      npmConfigEnvironment: this.deployOptions.npmConfigEnvironment,
      jobStrategy: this.deployJobStrategy,
      environmentDependencies: this.environmentDependencies,
    });

    this.release?.addJobs(stepFactory.deploymentJobs);
  }

  /**
   * Update environment deployment dependencies
   * @param environmentDependencies an object defining dependencies between environments
   */
  public updateEnvironmentDeploymentDependencies(environmentDependencies: EnvironmentDeploymentDependencies) {
    DeployableAwsCdkTypeScriptAppStepsFactory.validateEnvironmentDeploymentDependencies(
      this.deployOptions,
      environmentDependencies,
    );

    this.environmentDependencies = environmentDependencies;
  }
}