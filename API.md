# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="structs"></a>

### AWSCredentials <a name="deployable-awscdk-app-ts.AWSCredentials" id="deployableawscdkapptsawscredentials"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AWSCredentials } from 'deployable-awscdk-app-ts'

const aWSCredentials: AWSCredentials = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`region`](#deployableawscdkapptsawscredentialspropertyregion)<span title="Required">*</span> | `string` | Default AWS region for the account. |
| [`accessKeyIdSecretName`](#deployableawscdkapptsawscredentialspropertyaccesskeyidsecretname) | `string` | GitHub Secret name for AWS Access Key Id. |
| [`assumeRoleDurationSeconds`](#deployableawscdkapptsawscredentialspropertyassumeroledurationseconds) | `number` | Duration of assume role session. |
| [`roleToAssume`](#deployableawscdkapptsawscredentialspropertyroletoassume) | `string` | ARN of AWS role to be assumed. |
| [`secretAccessKeySecretName`](#deployableawscdkapptsawscredentialspropertysecretaccesskeysecretname) | `string` | GitHub Secret name for AWS Secret Access Key. |

---

##### `region`<sup>Required</sup> <a name="deployable-awscdk-app-ts.AWSCredentials.property.region" id="deployableawscdkapptsawscredentialspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

Default AWS region for the account.

---

##### `accessKeyIdSecretName`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.AWSCredentials.property.accessKeyIdSecretName" id="deployableawscdkapptsawscredentialspropertyaccesskeyidsecretname"></a>

```typescript
public readonly accessKeyIdSecretName: string;
```

- *Type:* `string`
- *Default:* "AWS_ACCESS_KEY_ID"

GitHub Secret name for AWS Access Key Id.

---

##### `assumeRoleDurationSeconds`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.AWSCredentials.property.assumeRoleDurationSeconds" id="deployableawscdkapptsawscredentialspropertyassumeroledurationseconds"></a>

```typescript
public readonly assumeRoleDurationSeconds: number;
```

- *Type:* `number`
- *Default:* 300

Duration of assume role session.

---

##### `roleToAssume`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.AWSCredentials.property.roleToAssume" id="deployableawscdkapptsawscredentialspropertyroletoassume"></a>

```typescript
public readonly roleToAssume: string;
```

- *Type:* `string`

ARN of AWS role to be assumed.

---

##### `secretAccessKeySecretName`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.AWSCredentials.property.secretAccessKeySecretName" id="deployableawscdkapptsawscredentialspropertysecretaccesskeysecretname"></a>

```typescript
public readonly secretAccessKeySecretName: string;
```

- *Type:* `string`
- *Default:* "AWS_SECRET_ACCESS_KEY"

GitHub Secret name for AWS Secret Access Key.

---

### DeployableAwsCdkTypeScriptAppOptions <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DeployableAwsCdkTypeScriptAppOptions } from 'deployable-awscdk-app-ts'

const deployableAwsCdkTypeScriptAppOptions: DeployableAwsCdkTypeScriptAppOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyname)<span title="Required">*</span> | `string` | This is the name of your project. |
| [`logging`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylogging) | [`projen.LoggerOptions`](#projen.LoggerOptions) | Configure logging options such as verbosity. |
| [`outdir`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyoutdir) | `string` | The root directory of the project. |
| [`parent`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyparent) | [`projen.Project`](#projen.Project) | The parent project, if this project is part of a bigger project. |
| [`projenCommand`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojencommand) | `string` | The shell command to use in order to run the projen CLI. |
| [`projenrcJson`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrcjson) | `boolean` | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| [`projenrcJsonOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrcjsonoptions) | [`projen.ProjenrcOptions`](#projen.ProjenrcOptions) | Options for .projenrc.json. |
| [`autoApproveOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyautoapproveoptions) | [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions) | Enable and configure the 'auto approve' workflow. |
| [`autoMergeOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyautomergeoptions) | [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions) | Configure options for automatic merging on GitHub. |
| [`clobber`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyclobber) | `boolean` | Add a `clobber` task which resets the repo to origin. |
| [`devContainer`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydevcontainer) | `boolean` | Add a VSCode development environment (used for GitHub Codespaces). |
| [`github`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertygithub) | `boolean` | Enable GitHub integration. |
| [`githubOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertygithuboptions) | [`projen.github.GitHubOptions`](#projen.github.GitHubOptions) | Options for GitHub integration. |
| [`gitpod`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertygitpod) | `boolean` | Add a Gitpod development environment. |
| [`mergify`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertymergify) | `boolean` | Whether mergify should be enabled on this repository or not. |
| [`mergifyOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertymergifyoptions) | [`projen.github.MergifyOptions`](#projen.github.MergifyOptions) | Options for mergify. |
| [`projectType`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojecttype) | [`projen.ProjectType`](#projen.ProjectType) | Which type of project this is (library/app). |
| [`projenTokenSecret`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojentokensecret) | `string` | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| [`readme`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreadme) | [`projen.SampleReadmeProps`](#projen.SampleReadmeProps) | The README setup. |
| [`stale`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertystale) | `boolean` | Auto-close of stale issues and pull request. |
| [`staleOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertystaleoptions) | [`projen.github.StaleOptions`](#projen.github.StaleOptions) | Auto-close stale issues and pull requests. |
| [`vscode`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyvscode) | `boolean` | Enable VSCode integration. |
| [`allowLibraryDependencies`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyallowlibrarydependencies) | `boolean` | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| [`authorEmail`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyauthoremail) | `string` | Author's e-mail. |
| [`authorName`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyauthorname) | `string` | Author's name. |
| [`authorOrganization`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyauthororganization) | `boolean` | Author's Organization. |
| [`authorUrl`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyauthorurl) | `string` | Author's URL / Website. |
| [`autoDetectBin`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyautodetectbin) | `boolean` | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| [`bin`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybin) | {[ key: string ]: `string`} | Binary programs vended with your module. |
| [`bugsEmail`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybugsemail) | `string` | The email address to which issues should be reported. |
| [`bugsUrl`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybugsurl) | `string` | The url to your project's issue tracker. |
| [`bundledDeps`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybundleddeps) | `string`[] | List of dependencies to bundle into this module. |
| [`codeArtifactOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycodeartifactoptions) | [`projen.javascript.CodeArtifactOptions`](#projen.javascript.CodeArtifactOptions) | Options for publishing npm package to AWS CodeArtifact. |
| [`deps`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydeps) | `string`[] | Runtime dependencies of this module. |
| [`description`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydescription) | `string` | The description is just a string that helps people understand the purpose of the package. |
| [`devDeps`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydevdeps) | `string`[] | Build dependencies for this module. |
| [`entrypoint`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyentrypoint) | `string` | Module entrypoint (`main` in `package.json`). |
| [`homepage`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyhomepage) | `string` | Package's Homepage / Website. |
| [`keywords`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertykeywords) | `string`[] | Keywords to include in `package.json`. |
| [`license`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylicense) | `string` | License's SPDX identifier. |
| [`licensed`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylicensed) | `boolean` | Indicates if a license should be added. |
| [`maxNodeVersion`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertymaxnodeversion) | `string` | Minimum node.js version to require via `engines` (inclusive). |
| [`minNodeVersion`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyminnodeversion) | `string` | Minimum Node.js version to require via package.json `engines` (inclusive). |
| [`npmAccess`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmaccess) | [`projen.javascript.NpmAccess`](#projen.javascript.NpmAccess) | Access level of the npm package. |
| [`npmRegistry`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmregistry) | `string` | The host name of the npm registry to publish to. |
| [`npmRegistryUrl`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmregistryurl) | `string` | The base URL of the npm package registry. |
| [`npmTokenSecret`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmtokensecret) | `string` | GitHub secret which contains the NPM token to use when publishing packages. |
| [`packageManager`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypackagemanager) | [`projen.javascript.NodePackageManager`](#projen.javascript.NodePackageManager) | The Node Package Manager used to execute scripts. |
| [`packageName`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypackagename) | `string` | The "name" in package.json. |
| [`peerDependencyOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypeerdependencyoptions) | [`projen.javascript.PeerDependencyOptions`](#projen.javascript.PeerDependencyOptions) | Options for `peerDeps`. |
| [`peerDeps`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypeerdeps) | `string`[] | Peer dependencies for this module. |
| [`repository`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyrepository) | `string` | The repository is the location where the actual code for your package lives. |
| [`repositoryDirectory`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyrepositorydirectory) | `string` | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| [`scripts`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyscripts) | {[ key: string ]: `string`} | npm scripts to include. |
| [`stability`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertystability) | `string` | Package's Stability. |
| [`jsiiReleaseVersion`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyjsiireleaseversion) | `string` | Version requirement of `jsii-release` which is used to publish modules to npm. |
| [`majorVersion`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertymajorversion) | `number` | Major version to release from the default branch. |
| [`npmDistTag`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmdisttag) | `string` | The npmDistTag to use when publishing from the default branch. |
| [`postBuildSteps`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypostbuildsteps) | [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[] | Steps to execute after build as part of the release workflow. |
| [`prerelease`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprerelease) | `string` | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| [`publishDryRun`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypublishdryrun) | `boolean` | Instead of actually publishing to package managers, just print the publishing command. |
| [`publishTasks`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypublishtasks) | `boolean` | Define publishing tasks that can be executed manually as well as workflows. |
| [`releaseBranches`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasebranches) | {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)} | Defines additional release branches. |
| [`releaseEveryCommit`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleaseeverycommit) | `boolean` | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| [`releaseFailureIssue`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasefailureissue) | `boolean` | Create a github issue on every failed publishing task. |
| [`releaseFailureIssueLabel`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasefailureissuelabel) | `string` | The label to apply to issues indicating publish failures. |
| [`releaseSchedule`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleaseschedule) | `string` | CRON schedule to trigger new releases. |
| [`releaseTagPrefix`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasetagprefix) | `string` | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| [`releaseTrigger`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasetrigger) | [`projen.release.ReleaseTrigger`](#projen.release.ReleaseTrigger) | The release trigger to use. |
| [`releaseWorkflowName`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleaseworkflowname) | `string` | The name of the default release workflow. |
| [`releaseWorkflowSetupSteps`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleaseworkflowsetupsteps) | [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[] | A set of workflow steps to execute in order to setup the workflow container. |
| [`versionrcOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyversionrcoptions) | {[ key: string ]: `any`} | Custom configuration used when creating changelog with standard-version package. |
| [`workflowContainerImage`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyworkflowcontainerimage) | `string` | Container image to use for GitHub workflows. |
| [`workflowRunsOn`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyworkflowrunson) | `string`[] | Github Runner selection labels. |
| [`defaultReleaseBranch`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydefaultreleasebranch)<span title="Required">*</span> | `string` | The name of the main release branch. |
| [`artifactsDirectory`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyartifactsdirectory) | `string` | A directory which will contain build artifacts. |
| [`autoApproveProjenUpgrades`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyautoapproveprojenupgrades) | `boolean` | Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued). |
| [`autoApproveUpgrades`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyautoapproveupgrades) | `boolean` | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| [`buildWorkflow`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybuildworkflow) | `boolean` | Define a GitHub workflow for building PRs. |
| [`buildWorkflowTriggers`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybuildworkflowtriggers) | [`projen.github.workflows.Triggers`](#projen.github.workflows.Triggers) | Build workflow triggers. |
| [`bundlerOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybundleroptions) | [`projen.javascript.BundlerOptions`](#projen.javascript.BundlerOptions) | Options for `Bundler`. |
| [`codeCov`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycodecov) | `boolean` | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. |
| [`codeCovTokenSecret`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycodecovtokensecret) | `string` | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| [`copyrightOwner`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycopyrightowner) | `string` | License copyright owner. |
| [`copyrightPeriod`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycopyrightperiod) | `string` | The copyright years to put in the LICENSE file. |
| [`dependabot`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydependabot) | `boolean` | Use dependabot to handle dependency upgrades. |
| [`dependabotOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydependabotoptions) | [`projen.github.DependabotOptions`](#projen.github.DependabotOptions) | Options for dependabot. |
| [`depsUpgrade`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydepsupgrade) | `boolean` | Use github workflows to handle dependency upgrades. |
| [`depsUpgradeOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydepsupgradeoptions) | [`projen.javascript.UpgradeDependenciesOptions`](#projen.javascript.UpgradeDependenciesOptions) | Options for depsUpgrade. |
| [`gitignore`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertygitignore) | `string`[] | Additional entries to .gitignore. |
| [`jest`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyjest) | `boolean` | Setup jest unit tests. |
| [`jestOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyjestoptions) | [`projen.javascript.JestOptions`](#projen.javascript.JestOptions) | Jest options. |
| [`mutableBuild`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertymutablebuild) | `boolean` | Automatically update files modified during builds to pull-request branches. |
| [`npmignore`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmignore) | `string`[] | Additional entries to .npmignore. |
| [`npmignoreEnabled`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmignoreenabled) | `boolean` | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| [`package`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypackage) | `boolean` | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| [`prettier`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprettier) | `boolean` | Setup prettier. |
| [`prettierOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprettieroptions) | [`projen.javascript.PrettierOptions`](#projen.javascript.PrettierOptions) | Prettier options. |
| [`projenDevDependency`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojendevdependency) | `boolean` | Indicates of "projen" should be installed as a devDependency. |
| [`projenrcJs`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrcjs) | `boolean` | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| [`projenrcJsOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrcjsoptions) | [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions) | Options for .projenrc.js. |
| [`projenUpgradeAutoMerge`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenupgradeautomerge) | `boolean` | Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued). |
| [`projenUpgradeSchedule`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenupgradeschedule) | `string`[] | Customize the projenUpgrade schedule in cron expression. |
| [`projenUpgradeSecret`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenupgradesecret) | `string` | Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`). |
| [`projenVersion`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenversion) | `string` | Version of projen to install. |
| [`pullRequestTemplate`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypullrequesttemplate) | `boolean` | Include a GitHub pull request template. |
| [`pullRequestTemplateContents`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypullrequesttemplatecontents) | `string`[] | The contents of the pull request template. |
| [`release`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyrelease) | `boolean` | Add release management to this project. |
| [`releaseToNpm`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasetonpm) | `boolean` | Automatically release to npm when new versions are introduced. |
| [`releaseWorkflow`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleaseworkflow) | `boolean` | DEPRECATED: renamed to `release`. |
| [`workflowBootstrapSteps`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyworkflowbootstrapsteps) | `any`[] | Workflow steps to use in order to bootstrap this repo. |
| [`workflowGitIdentity`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyworkflowgitidentity) | [`projen.github.GitIdentity`](#projen.github.GitIdentity) | The git identity to use in workflows. |
| [`workflowNodeVersion`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyworkflownodeversion) | `string` | The node version to use in GitHub workflows. |
| [`disableTsconfig`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydisabletsconfig) | `boolean` | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| [`docgen`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydocgen) | `boolean` | Docgen by Typedoc. |
| [`docsDirectory`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydocsdirectory) | `string` | Docs directory. |
| [`entrypointTypes`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyentrypointtypes) | `string` | The .d.ts file that includes the type declarations for this module. |
| [`eslint`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyeslint) | `boolean` | Setup eslint. |
| [`eslintOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyeslintoptions) | [`projen.javascript.EslintOptions`](#projen.javascript.EslintOptions) | Eslint options. |
| [`libdir`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylibdir) | `string` | Typescript  artifacts output directory. |
| [`projenrcTs`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrcts) | `boolean` | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| [`projenrcTsOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrctsoptions) | [`projen.typescript.ProjenrcOptions`](#projen.typescript.ProjenrcOptions) | Options for .projenrc.ts. |
| [`sampleCode`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertysamplecode) | `boolean` | Generate one-time sample in `src/` and `test/` if there are no files there. |
| [`srcdir`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertysrcdir) | `string` | Typescript sources directory. |
| [`testdir`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertytestdir) | `string` | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| [`tsconfig`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertytsconfig) | [`projen.javascript.TypescriptConfigOptions`](#projen.javascript.TypescriptConfigOptions) | Custom TSConfig. |
| [`tsconfigDev`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertytsconfigdev) | [`projen.javascript.TypescriptConfigOptions`](#projen.javascript.TypescriptConfigOptions) | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| [`tsconfigDevFile`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertytsconfigdevfile) | `string` | The name of the development tsconfig.json file. |
| [`typescriptVersion`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertytypescriptversion) | `string` | TypeScript version to use. |
| [`buildCommand`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybuildcommand) | `string` | A command to execute before synthesis. |
| [`cdkout`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkout) | `string` | cdk.out directory. |
| [`context`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycontext) | {[ key: string ]: `any`} | Additional context to include in `cdk.json`. |
| [`featureFlags`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyfeatureflags) | `boolean` | Include all feature flags in cdk.json. |
| [`requireApproval`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyrequireapproval) | [`projen.awscdk.ApprovalLevel`](#projen.awscdk.ApprovalLevel) | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| [`watchExcludes`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertywatchexcludes) | `string`[] | Glob patterns to exclude from `cdk watch`. |
| [`watchIncludes`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertywatchincludes) | `string`[] | Glob patterns to include in `cdk watch`. |
| [`cdkVersion`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkversion)<span title="Required">*</span> | `string` | Minimum version of the AWS CDK to depend on. |
| [`cdkAssert`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkassert) | `boolean` | Warning: NodeJS only. |
| [`cdkAssertions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkassertions) | `boolean` | Install the assertions library? |
| [`cdkDependencies`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkdependencies) | `string`[] | Which AWS CDKv1 modules this project requires. |
| [`cdkDependenciesAsDeps`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkdependenciesasdeps) | `boolean` | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| [`cdkTestDependencies`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdktestdependencies) | `string`[] | AWS CDK modules required for testing. |
| [`cdkVersionPinning`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkversionpinning) | `boolean` | Use pinned version instead of caret version for CDK. |
| [`constructsVersion`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyconstructsversion) | `string` | Minimum version of the `constructs` library to depend on. |
| [`appEntrypoint`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyappentrypoint) | `string` | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| [`integrationTestAutoDiscover`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyintegrationtestautodiscover) | `boolean` | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. |
| [`lambdaAutoDiscover`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylambdaautodiscover) | `boolean` | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| [`lambdaOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylambdaoptions) | [`projen.awscdk.LambdaFunctionCommonOptions`](#projen.awscdk.LambdaFunctionCommonOptions) | Common options for all AWS Lambda functions. |
| [`checkActiveDeployment`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycheckactivedeployment) | `boolean` | Whether to check and skip the deployment for environments that have active deployment of the same commit. |
| [`deployOptions`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydeployoptions) | [`deployable-awscdk-app-ts.DeployOptions`](#deployable-awscdk-app-ts.DeployOptions) | Deployment options. |
| [`generateNvmrc`](#deployableawscdkapptsdeployableawscdktypescriptappoptionspropertygeneratenvmrc) | `boolean` | Whether to generate nvmrc file for the node version of the project if set to true, and no "workflowNodeVersion" is specified will use version 14.18.1. |

---

##### `name`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.name" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* $BASEDIR

This is the name of your project.

---

##### `logging`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.logging" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylogging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* [`projen.LoggerOptions`](#projen.LoggerOptions)
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.outdir" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyoutdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* `string`
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.  If this project has a parent, this directory is relative to the parent directory and it cannot be the same as the parent or any of it's other sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.parent" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyparent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* [`projen.Project`](#projen.Project)

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenCommand" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojencommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* `string`
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcJson" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrcjson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* `boolean`
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcJsonOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrcjsonoptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcOptions;
```

- *Type:* [`projen.ProjenrcOptions`](#projen.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.json.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.autoApproveOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyautoapproveoptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions)
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.autoMergeOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyautomergeoptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions)
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if `github.mergify` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.clobber" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyclobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* `boolean`
- *Default:* true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.devContainer" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydevcontainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.github" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertygithub"></a>

```typescript
public readonly github: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.githubOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertygithuboptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* [`projen.github.GitHubOptions`](#projen.github.GitHubOptions)
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.gitpod" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertygitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.mergify" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertymergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.mergifyOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertymergifyoptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* [`projen.github.MergifyOptions`](#projen.github.MergifyOptions)
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projectType" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojecttype"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* [`projen.ProjectType`](#projen.ProjectType)
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenTokenSecret`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenTokenSecret" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojentokensecret"></a>

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* `string`
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows` and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.readme" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreadme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* [`projen.SampleReadmeProps`](#projen.SampleReadmeProps)
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `stale`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.stale" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertystale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* `boolean`
- *Default:* true

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.staleOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertystaleoptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* [`projen.github.StaleOptions`](#projen.github.StaleOptions)
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.vscode" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyvscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.allowLibraryDependencies" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyallowlibrarydependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* `boolean`
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.authorEmail" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyauthoremail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* `string`

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.authorName" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyauthorname"></a>

```typescript
public readonly authorName: string;
```

- *Type:* `string`

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.authorOrganization" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyauthororganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* `boolean`

Author's Organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.authorUrl" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyauthorurl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* `string`

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.autoDetectBin" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyautodetectbin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.bin" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in your `package.json`, but unless `autoDetectBin` is `false`, every executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.bugsEmail" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybugsemail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* `string`

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.bugsUrl" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybugsurl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* `string`

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.bundledDeps" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybundleddeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* `string`[]

List of dependencies to bundle into this module.

These modules will be added both to the `dependencies` section and `bundledDependencies` section of your `package.json`.  The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.codeArtifactOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycodeartifactoptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* [`projen.javascript.CodeArtifactOptions`](#projen.javascript.CodeArtifactOptions)
- *Default:* undefined

Options for publishing npm package to AWS CodeArtifact.

---

##### `deps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.deps" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydeps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* `string`[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `description`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.description" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well. See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.devDeps" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydevdeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be available in your build environment but will not be fetched when this module is consumed.  The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `entrypoint`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.entrypoint" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyentrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* `string`
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.homepage" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyhomepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* `string`

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.keywords" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertykeywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* `string`[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.license" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylicense"></a>

```typescript
public readonly license: string;
```

- *Type:* `string`
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses. Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.licensed" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylicensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.maxNodeVersion" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertymaxnodeversion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* `string`
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.minNodeVersion" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyminnodeversion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* `string`
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmAccess" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmaccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* [`projen.javascript.NpmAccess`](#projen.javascript.NpmAccess)
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmRegistry" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmregistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* `string`

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmRegistryUrl" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmregistryurl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* `string`
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmTokenSecret" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmtokensecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* `string`
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.packageManager" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypackagemanager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* [`projen.javascript.NodePackageManager`](#projen.javascript.NodePackageManager)
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.packageName" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypackagename"></a>

```typescript
public readonly packageName: string;
```

- *Type:* `string`
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.peerDependencyOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypeerdependencyoptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* [`projen.javascript.PeerDependencyOptions`](#projen.javascript.PeerDependencyOptions)

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.peerDeps" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypeerdeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to be installed (and satisfied) by the _consumer_ of this library. Using peer dependencies allows you to ensure that only a single module of a certain library exists in the `node_modules` tree of your consumers.  Note that prior to npm@7, peer dependencies are _not_ automatically installed, which means that adding peer dependencies to a library will be a breaking change for your customers.  Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is enabled by default), projen will automatically add a dev dependency with a pinned version for each peer dependency. This will ensure that you build & test your module against the lowest peer version required.

---

##### `repository`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.repository" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyrepository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.repositoryDirectory" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyrepositorydirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scripts`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.scripts" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyscripts"></a>

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script, the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.stability" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertystability"></a>

```typescript
public readonly stability: string;
```

- *Type:* `string`

Package's Stability.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.jsiiReleaseVersion" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyjsiireleaseversion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

Version requirement of `jsii-release` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.majorVersion" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertymajorversion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* `number`
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line. If not specified, we bump the global latest version.

---

##### `npmDistTag`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmDistTag" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmdisttag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* `string`
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.postBuildSteps" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypostbuildsteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.prerelease" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* `string`
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.publishDryRun" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypublishdryrun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* `boolean`
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.publishTasks" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypublishtasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* `boolean`
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this in order to create a publishing task for each publishing activity.

---

##### `releaseBranches`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseBranches" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasebranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each release branch which will publish releases from commits in this branch. Each release branch _must_ be assigned a major version number which is used to enforce that versions published from that branch always use that major version. If multiple branches are used, the `majorVersion` field must also be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseEveryCommit" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleaseeverycommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseFailureIssue" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasefailureissue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* `boolean`
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseFailureIssueLabel" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasefailureissuelabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* `string`
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseSchedule" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleaseschedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* `string`
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseTagPrefix" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasetagprefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* `string`
- *Default:* no prefix

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version when bumping, so if you change this on a project with an existing version history, you may need to manually tag your latest release with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseTrigger" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasetrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* [`projen.release.ReleaseTrigger`](#projen.release.ReleaseTrigger)
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseWorkflowName" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleaseworkflowname"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* `string`
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseWorkflowSetupSteps" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleaseworkflowsetupsteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.versionrcOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyversionrcoptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.workflowContainerImage" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyworkflowcontainerimage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* `string`
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.workflowRunsOn" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyworkflowrunson"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* `string`[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.defaultReleaseBranch" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydefaultreleasebranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* `string`
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.artifactsDirectory" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyartifactsdirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* `string`
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveProjenUpgrades`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.autoApproveProjenUpgrades" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyautoapproveprojenupgrades"></a>

```typescript
public readonly autoApproveProjenUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.autoApproveUpgrades" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyautoapproveupgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.buildWorkflow" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybuildworkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.buildWorkflowTriggers" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybuildworkflowtriggers"></a>

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* [`projen.github.workflows.Triggers`](#projen.github.workflows.Triggers)
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.bundlerOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybundleroptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* [`projen.javascript.BundlerOptions`](#projen.javascript.BundlerOptions)

Options for `Bundler`.

---

##### `codeCov`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.codeCov" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycodecov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* `boolean`
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.codeCovTokenSecret" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycodecovtokensecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* `string`
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.copyrightOwner" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycopyrightowner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* `string`
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.copyrightPeriod" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycopyrightperiod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* `string`
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.dependabot" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.dependabotOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydependabotoptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* [`projen.github.DependabotOptions`](#projen.github.DependabotOptions)
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.depsUpgrade" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydepsupgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* `boolean`
- *Default:* true

Use github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.depsUpgradeOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydepsupgradeoptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* [`projen.javascript.UpgradeDependenciesOptions`](#projen.javascript.UpgradeDependenciesOptions)
- *Default:* default options

Options for depsUpgrade.

---

##### `gitignore`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.gitignore" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertygitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* `string`[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.jest" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyjest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.jestOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyjestoptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* [`projen.javascript.JestOptions`](#projen.javascript.JestOptions)
- *Default:* default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.mutableBuild" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertymutablebuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means that any files synthesized by projen or e.g. test snapshots will always be up-to-date before a PR is merged.  Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmignore" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* `string`[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmignoreEnabled" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertynpmignoreenabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `package`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.package" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypackage"></a>

```typescript
public readonly package: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.prettier" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* `boolean`
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.prettierOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprettieroptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* [`projen.javascript.PrettierOptions`](#projen.javascript.PrettierOptions)
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenDevDependency" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojendevdependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcJs" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrcjs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* `boolean`
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcJsOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrcjsoptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.js.

---

##### ~~`projenUpgradeAutoMerge`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenUpgradeAutoMerge" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenupgradeautomerge"></a>

- *Deprecated:* use `autoApproveProjenUpgrades`.

```typescript
public readonly projenUpgradeAutoMerge: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `projenUpgradeSchedule`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenUpgradeSchedule" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenupgradeschedule"></a>

```typescript
public readonly projenUpgradeSchedule: string[];
```

- *Type:* `string`[]
- *Default:* [ "0 6 * * *" ]

Customize the projenUpgrade schedule in cron expression.

---

##### ~~`projenUpgradeSecret`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenUpgradeSecret" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenupgradesecret"></a>

- *Deprecated:* use `githubTokenSecret` instead.

```typescript
public readonly projenUpgradeSecret: string;
```

- *Type:* `string`
- *Default:* no automatic projen upgrade pull requests

Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).

This setting is a GitHub secret name which contains a GitHub Access Token with `repo` and `workflow` permissions.  This token is used to submit the upgrade pull request, which will likely include workflow updates.  To create a personal access token see https://github.com/settings/tokens

---

##### `projenVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenVersion" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenversion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* `string`
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.pullRequestTemplate" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypullrequesttemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* `boolean`
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.pullRequestTemplateContents" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertypullrequesttemplatecontents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* `string`[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.release" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyrelease"></a>

```typescript
public readonly release: boolean;
```

- *Type:* `boolean`
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseToNpm" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleasetonpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseWorkflow" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyreleaseworkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.workflowBootstrapSteps" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyworkflowbootstrapsteps"></a>

```typescript
public readonly workflowBootstrapSteps: any[];
```

- *Type:* `any`[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.workflowGitIdentity" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyworkflowgitidentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* [`projen.github.GitIdentity`](#projen.github.GitIdentity)
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.workflowNodeVersion" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyworkflownodeversion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* `string`
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.disableTsconfig" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydisabletsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* `boolean`
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `docgen`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.docgen" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydocgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* `boolean`
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.docsDirectory" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydocsdirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* `string`
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.entrypointTypes" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyentrypointtypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* `string`
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.eslint" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyeslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.eslintOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyeslintoptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* [`projen.javascript.EslintOptions`](#projen.javascript.EslintOptions)
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.libdir" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylibdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* `string`
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcTs" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrcts"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcTsOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyprojenrctsoptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* [`projen.typescript.ProjenrcOptions`](#projen.typescript.ProjenrcOptions)

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.sampleCode" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertysamplecode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.srcdir" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertysrcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* `string`
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.testdir" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertytestdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* `string`
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`), then tests are going to be compiled into `lib/` and executed as javascript. If the test directory is outside of `src`, then we configure jest to compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.tsconfig" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertytsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* [`projen.javascript.TypescriptConfigOptions`](#projen.javascript.TypescriptConfigOptions)
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.tsconfigDev" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertytsconfigdev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* [`projen.javascript.TypescriptConfigOptions`](#projen.javascript.TypescriptConfigOptions)
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.tsconfigDevFile" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertytsconfigdevfile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* `string`
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.typescriptVersion" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertytypescriptversion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `buildCommand`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.buildCommand" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertybuildcommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* `string`
- *Default:* no build command

A command to execute before synthesis.

This command will be called when running `cdk synth` or when `cdk watch` identifies a change in your source code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkout" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* `string`
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.context" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycontext"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.featureFlags" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyfeatureflags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* `boolean`
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.requireApproval" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyrequireapproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* [`projen.awscdk.ApprovalLevel`](#projen.awscdk.ApprovalLevel)
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.watchExcludes" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertywatchexcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* `string`[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.watchIncludes" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertywatchincludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* `string`[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `cdkVersion`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkVersion" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkversion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* `string`
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkAssert" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkassert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* `boolean`
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the @aws-cdk/assert library?

---

##### `cdkAssertions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkAssertions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkassertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* `boolean`
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkDependencies" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkdependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* `string`[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkDependenciesAsDeps" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkdependenciesasdeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* `boolean`
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed when using npm < 7 or yarn, where peer dependencies are not automatically installed. If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure they are present during development.  Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkTestDependencies" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdktestdependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* `string`[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkVersionPinning" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycdkversionpinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* `boolean`

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates. If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.constructsVersion" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyconstructsversion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* `string`
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.appEntrypoint" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyappentrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* `string`
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.integrationTestAutoDiscover" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertyintegrationtestautodiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.lambdaAutoDiscover" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylambdaautodiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.lambdaOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertylambdaoptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* [`projen.awscdk.LambdaFunctionCommonOptions`](#projen.awscdk.LambdaFunctionCommonOptions)
- *Default:* default options

Common options for all AWS Lambda functions.

---

##### `checkActiveDeployment`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.checkActiveDeployment" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertycheckactivedeployment"></a>

```typescript
public readonly checkActiveDeployment: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to check and skip the deployment for environments that have active deployment of the same commit.

---

##### `deployOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.deployOptions" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertydeployoptions"></a>

```typescript
public readonly deployOptions: DeployOptions;
```

- *Type:* [`deployable-awscdk-app-ts.DeployOptions`](#deployable-awscdk-app-ts.DeployOptions)
- *Default:* "config with empty list of environments"

Deployment options.

---

##### `generateNvmrc`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.generateNvmrc" id="deployableawscdkapptsdeployableawscdktypescriptappoptionspropertygeneratenvmrc"></a>

```typescript
public readonly generateNvmrc: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether to generate nvmrc file for the node version of the project if set to true, and no "workflowNodeVersion" is specified will use version 14.18.1.

---

### DeployOptions <a name="deployable-awscdk-app-ts.DeployOptions" id="deployableawscdkapptsdeployoptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DeployOptions } from 'deployable-awscdk-app-ts'

const deployOptions: DeployOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`environments`](#deployableawscdkapptsdeployoptionspropertyenvironments)<span title="Required">*</span> | [`deployable-awscdk-app-ts.EnvironmentOptions`](#deployable-awscdk-app-ts.EnvironmentOptions)[] | Environment settings to deploy to. |
| [`npmConfigEnvironment`](#deployableawscdkapptsdeployoptionspropertynpmconfigenvironment) | `string` | npm config name to set as the environment name This might be useful in deployment process. |
| [`stackPattern`](#deployableawscdkapptsdeployoptionspropertystackpattern) | `string` | Regex for stacks to be deployed. |

---

##### `environments`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployOptions.property.environments" id="deployableawscdkapptsdeployoptionspropertyenvironments"></a>

```typescript
public readonly environments: EnvironmentOptions[];
```

- *Type:* [`deployable-awscdk-app-ts.EnvironmentOptions`](#deployable-awscdk-app-ts.EnvironmentOptions)[]

Environment settings to deploy to.

---

##### `npmConfigEnvironment`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployOptions.property.npmConfigEnvironment" id="deployableawscdkapptsdeployoptionspropertynpmconfigenvironment"></a>

```typescript
public readonly npmConfigEnvironment: string;
```

- *Type:* `string`
- *Default:* undefined

npm config name to set as the environment name This might be useful in deployment process.

if not provided will not set

---

##### `stackPattern`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployOptions.property.stackPattern" id="deployableawscdkapptsdeployoptionspropertystackpattern"></a>

```typescript
public readonly stackPattern: string;
```

- *Type:* `string`
- *Default:* undefined

Regex for stacks to be deployed.

if not provided matches all of the stacks in the CDK App.

---

### EnvironmentOptions <a name="deployable-awscdk-app-ts.EnvironmentOptions" id="deployableawscdkapptsenvironmentoptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EnvironmentOptions } from 'deployable-awscdk-app-ts'

const environmentOptions: EnvironmentOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`awsCredentials`](#deployableawscdkapptsenvironmentoptionspropertyawscredentials)<span title="Required">*</span> | [`deployable-awscdk-app-ts.AWSCredentials`](#deployable-awscdk-app-ts.AWSCredentials) | AWS credential details for deployment. |
| [`name`](#deployableawscdkapptsenvironmentoptionspropertyname)<span title="Required">*</span> | `string` | Environment name to deploy to. |
| [`postDeployWorkflowScript`](#deployableawscdkapptsenvironmentoptionspropertypostdeployworkflowscript) | `string` | The script/task to run after deployment of the environment in the workflow If not present, the workflow will not execute that. |

---

##### `awsCredentials`<sup>Required</sup> <a name="deployable-awscdk-app-ts.EnvironmentOptions.property.awsCredentials" id="deployableawscdkapptsenvironmentoptionspropertyawscredentials"></a>

```typescript
public readonly awsCredentials: AWSCredentials;
```

- *Type:* [`deployable-awscdk-app-ts.AWSCredentials`](#deployable-awscdk-app-ts.AWSCredentials)

AWS credential details for deployment.

---

##### `name`<sup>Required</sup> <a name="deployable-awscdk-app-ts.EnvironmentOptions.property.name" id="deployableawscdkapptsenvironmentoptionspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Environment name to deploy to.

---

##### `postDeployWorkflowScript`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.EnvironmentOptions.property.postDeployWorkflowScript" id="deployableawscdkapptsenvironmentoptionspropertypostdeployworkflowscript"></a>

```typescript
public readonly postDeployWorkflowScript: string;
```

- *Type:* `string`

The script/task to run after deployment of the environment in the workflow If not present, the workflow will not execute that.

---

## Classes <a name="Classes" id="classes"></a>

### DeployableAwsCdkTypeScriptApp <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptApp" id="deployableawscdkapptsdeployableawscdktypescriptapp"></a>

#### Initializers <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptApp.Initializer" id="deployableawscdkapptsdeployableawscdktypescriptappinitializer"></a>

```typescript
import { DeployableAwsCdkTypeScriptApp } from 'deployable-awscdk-app-ts'

new DeployableAwsCdkTypeScriptApp(options: DeployableAwsCdkTypeScriptAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`options`](#deployableawscdkapptsdeployableawscdktypescriptappparameteroptions)<span title="Required">*</span> | [`deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions`](#deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions) | *No description.* |

---

##### `options`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptApp.parameter.options" id="deployableawscdkapptsdeployableawscdktypescriptappparameteroptions"></a>

- *Type:* [`deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions`](#deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`addEnvironments`](#deployableawscdkapptsdeployableawscdktypescriptappaddenvironments) | *No description.* |
| [`synth`](#deployableawscdkapptsdeployableawscdktypescriptappsynth) | (experimental) Synthesize all project files into `outdir`. |

---

##### `addEnvironments` <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptApp.addEnvironments" id="deployableawscdkapptsdeployableawscdktypescriptappaddenvironments"></a>

```typescript
public addEnvironments(items: EnvironmentOptions)
```

###### `items`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptApp.parameter.items" id="deployableawscdkapptsdeployableawscdktypescriptappparameteritems"></a>

- *Type:* [`deployable-awscdk-app-ts.EnvironmentOptions`](#deployable-awscdk-app-ts.EnvironmentOptions)

---

##### `synth` <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptApp.synth" id="deployableawscdkapptsdeployableawscdktypescriptappsynth"></a>

```typescript
public synth()
```





