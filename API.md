# API Reference <a name="API Reference"></a>


## Structs <a name="Structs"></a>

### AWSCredentials <a name="deployable-awscdk-app-ts.AWSCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AWSCredentials } from 'deployable-awscdk-app-ts'

const aWSCredentials: AWSCredentials = { ... }
```

##### `region`<sup>Required</sup> <a name="deployable-awscdk-app-ts.AWSCredentials.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

Default AWS region for the account.

---

##### `accessKeyIdSecretName`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.AWSCredentials.property.accessKeyIdSecretName"></a>

```typescript
public readonly accessKeyIdSecretName: string;
```

- *Type:* `string`
- *Default:* "AWS_ACCESS_KEY_ID"

GitHub Secret name for AWS Access Key Id.

---

##### `assumeRoleDurationSeconds`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.AWSCredentials.property.assumeRoleDurationSeconds"></a>

```typescript
public readonly assumeRoleDurationSeconds: number;
```

- *Type:* `number`
- *Default:* 300

Duration of assume role session.

---

##### `roleToAssume`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.AWSCredentials.property.roleToAssume"></a>

```typescript
public readonly roleToAssume: string;
```

- *Type:* `string`

ARN of AWS role to be assumed.

---

##### `secretAccessKeySecretName`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.AWSCredentials.property.secretAccessKeySecretName"></a>

```typescript
public readonly secretAccessKeySecretName: string;
```

- *Type:* `string`
- *Default:* "AWS_SECRET_ACCESS_KEY"

GitHub Secret name for AWS Secret Access Key.

---

### DeployableAwsCdkTypeScriptAppOptions <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DeployableAwsCdkTypeScriptAppOptions } from 'deployable-awscdk-app-ts'

const deployableAwsCdkTypeScriptAppOptions: DeployableAwsCdkTypeScriptAppOptions = { ... }
```

##### `name`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* $BASEDIR

This is the name of your project.

---

##### `logging`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* [`projen.LoggerOptions`](#projen.LoggerOptions)
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* `string`
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.  If this project has a parent, this directory is relative to the parent directory and it cannot be the same as the parent or any of it's other sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* [`projen.Project`](#projen.Project)

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* `string`
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* `boolean`
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcOptions;
```

- *Type:* [`projen.json.ProjenrcOptions`](#projen.json.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.json.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions)
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions)
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if `github.mergify` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* `boolean`
- *Default:* true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* [`projen.github.GitHubOptions`](#projen.github.GitHubOptions)
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* [`projen.github.MergifyOptions`](#projen.github.MergifyOptions)
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* [`projen.ProjectType`](#projen.ProjectType)
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `readme`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* [`projen.SampleReadmeProps`](#projen.SampleReadmeProps)
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `stale`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* `boolean`
- *Default:* true

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* [`projen.github.StaleOptions`](#projen.github.StaleOptions)
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* `boolean`
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* `string`

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* `string`

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* `boolean`

Author's Organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* `string`

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in your `package.json`, but unless `autoDetectBin` is `false`, every executable file under `bin` will automatically be added to this section.

---

##### `bundledDeps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* `string`[]

List of dependencies to bundle into this module.

These modules will be added both to the `dependencies` section and `peerDependencies` section of your `package.json`.  The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* [`projen.CodeArtifactOptions`](#projen.CodeArtifactOptions)
- *Default:* undefined

Options for publishing npm package to AWS CodeArtifact.

---

##### `deps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* `string`[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `description`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well. See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be available in your build environment but will not be fetched when this module is consumed.  The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `entrypoint`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* `string`
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* `string`

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* `string`[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* `string`
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses. Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* `string`
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* `string`
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* [`projen.NpmAccess`](#projen.NpmAccess)
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* `string`
- *Default:* "latest"

Tags can be used to provide an alias instead of version numbers.

For example, a project might choose to have multiple streams of development and use a different tag for each stream, e.g., stable, beta, dev, canary.  By default, the `latest` tag is used by npm to identify the current version of a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>` specifier) installs the latest tag. Typically, projects only use the `latest` tag for stable release versions, and use other tags for unstable versions such as prereleases.  The `next` tag is used by some projects to identify the upcoming version.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* `string`

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* `string`
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* `string`
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* [`projen.NodePackageManager`](#projen.NodePackageManager)
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* `string`
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* [`projen.PeerDependencyOptions`](#projen.PeerDependencyOptions)

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to be installed (and satisfied) by the _consumer_ of this library. Using peer dependencies allows you to ensure that only a single module of a certain library exists in the `node_modules` tree of your consumers.  Note that prior to npm@7, peer dependencies are _not_ automatically installed, which means that adding peer dependencies to a library will be a breaking change for your customers.  Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is enabled by default), projen will automatically add a dev dependency with a pinned version for each peer dependency. This will ensure that you build & test your module against the lowest peer version required.

---

##### `repository`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scripts`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.scripts"></a>

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script, the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* `string`

Package's Stability.

---

##### `antitamper`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.antitamper"></a>

```typescript
public readonly antitamper: boolean;
```

- *Type:* `boolean`
- *Default:* true

Checks that after build there are no modified files on git.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* `string`
- *Default:* "dist"

A directory which will contain artifacts to be published to npm.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

Version requirement of `jsii-release` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* `number`
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line. If not specified, we bump the global latest version.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* `string`
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `releaseBranches`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each release branch which will publish releases from commits in this branch. Each release branch _must_ be assigned a major version number which is used to enforce that versions published from that branch always use that major version. If multiple branches are used, the `majorVersion` field must also be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* `boolean`
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* `string`
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* `string`
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* `string`
- *Default:* no prefix

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version when bumping, so if you change this on a project with an existing version history, you may need to manually tag your latest release with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* [`projen.release.ReleaseTrigger`](#projen.release.ReleaseTrigger)
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* `string`
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* `string`
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* `string`
- *Default:* "main"

The name of the main release branch.

---

##### `autoApproveProjenUpgrades`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.autoApproveProjenUpgrades"></a>

```typescript
public readonly autoApproveProjenUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* [`projen.javascript.BundlerOptions`](#projen.javascript.BundlerOptions)

Options for `Bundler`.

---

##### `codeCov`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* `boolean`
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* `string`
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* `string`
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* `string`
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* [`projen.github.DependabotOptions`](#projen.github.DependabotOptions)
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* `boolean`
- *Default:* true

Use github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* [`projen.UpgradeDependenciesOptions`](#projen.UpgradeDependenciesOptions)
- *Default:* default options

Options for depsUpgrade.

---

##### `gitignore`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* `string`[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* [`projen.JestOptions`](#projen.JestOptions)
- *Default:* default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means that any files synthesized by projen or e.g. test snapshots will always be up-to-date before a PR is merged.  Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* `string`[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* `boolean`
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.js.

---

##### ~~`projenUpgradeAutoMerge`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenUpgradeAutoMerge"></a>

- *Deprecated:* use `autoApproveProjenUpgrades`.

```typescript
public readonly projenUpgradeAutoMerge: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `projenUpgradeSchedule`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenUpgradeSchedule"></a>

```typescript
public readonly projenUpgradeSchedule: string[];
```

- *Type:* `string`[]
- *Default:* [ "0 6 * * *" ]

Customize the projenUpgrade schedule in cron expression.

---

##### `projenUpgradeSecret`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenUpgradeSecret"></a>

```typescript
public readonly projenUpgradeSecret: string;
```

- *Type:* `string`
- *Default:* no automatic projen upgrade pull requests

Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).

This setting is a GitHub secret name which contains a GitHub Access Token with `repo` and `workflow` permissions.  This token is used to submit the upgrade pull request, which will likely include workflow updates.  To create a personal access token see https://github.com/settings/tokens

---

##### `projenVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* `string`
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* `boolean`
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* `string`[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* `boolean`
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: any[];
```

- *Type:* `any`[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* [`projen.github.GitIdentity`](#projen.github.GitIdentity)
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* `string`
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* `boolean`
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `docgen`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* `boolean`
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* `string`
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* `string`
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* [`projen.EslintOptions`](#projen.EslintOptions)
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* `string`
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `package`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines a `yarn package` command that will produce a tarball and place it under `dist/js`.

---

##### `projenrcTs`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* [`projen.typescript.ProjenrcOptions`](#projen.typescript.ProjenrcOptions)

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* `string`
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* `string`
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`), then tests are going to be compiled into `lib/` and executed as javascript. If the test directory is outside of `src`, then we configure jest to compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* [`projen.TypescriptConfigOptions`](#projen.TypescriptConfigOptions)
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* [`projen.TypescriptConfigOptions`](#projen.TypescriptConfigOptions)
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* `string`
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `cdkout`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* `string`
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* `boolean`
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* [`projen.awscdk.ApprovalLevel`](#projen.awscdk.ApprovalLevel)
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `cdkVersion`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* `string`
- *Default:* "1.129.0"

AWS CDK version to use.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* `string`
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `cdkDependencies`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkDependencies"></a>

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* `string`[]

Which AWS CDK modules (those that start with "@aws-cdk/") this app uses.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use pinned version instead of caret version for CDK.

You can use this to prevent yarn to mix versions for your CDK dependencies and to prevent auto-updates. If you use experimental features this will let you define the moment you include breaking changes.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* [`projen.awscdk.LambdaFunctionCommonOptions`](#projen.awscdk.LambdaFunctionCommonOptions)
- *Default:* default options

Common options for all AWS Lambda functions.

---

##### `deployOptions`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.deployOptions"></a>

```typescript
public readonly deployOptions: DeployOptions;
```

- *Type:* [`deployable-awscdk-app-ts.DeployOptions`](#deployable-awscdk-app-ts.DeployOptions)

Deployment options.

---

##### `generateNvmrc`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions.property.generateNvmrc"></a>

```typescript
public readonly generateNvmrc: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether to generate nvmrc file for the node version of the project.

---

### DeployOptions <a name="deployable-awscdk-app-ts.DeployOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DeployOptions } from 'deployable-awscdk-app-ts'

const deployOptions: DeployOptions = { ... }
```

##### `environments`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployOptions.property.environments"></a>

```typescript
public readonly environments: EnvironmentOptions[];
```

- *Type:* [`deployable-awscdk-app-ts.EnvironmentOptions`](#deployable-awscdk-app-ts.EnvironmentOptions)[]

Environment settings to deploy to.

---

##### `stackPattern`<sup>Optional</sup> <a name="deployable-awscdk-app-ts.DeployOptions.property.stackPattern"></a>

```typescript
public readonly stackPattern: string;
```

- *Type:* `string`

Regex for stacks to be deployed.

if not provided matches all of the stacks in the CDK App.

---

### EnvironmentOptions <a name="deployable-awscdk-app-ts.EnvironmentOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EnvironmentOptions } from 'deployable-awscdk-app-ts'

const environmentOptions: EnvironmentOptions = { ... }
```

##### `awsCredentials`<sup>Required</sup> <a name="deployable-awscdk-app-ts.EnvironmentOptions.property.awsCredentials"></a>

```typescript
public readonly awsCredentials: AWSCredentials;
```

- *Type:* [`deployable-awscdk-app-ts.AWSCredentials`](#deployable-awscdk-app-ts.AWSCredentials)

AWS credential details for deployment.

---

##### `name`<sup>Required</sup> <a name="deployable-awscdk-app-ts.EnvironmentOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Environment name to deploy to.

---

## Classes <a name="Classes"></a>

### DeployableAwsCdkTypeScriptApp <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptApp"></a>

#### Initializers <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptApp.Initializer"></a>

```typescript
import { DeployableAwsCdkTypeScriptApp } from 'deployable-awscdk-app-ts'

new DeployableAwsCdkTypeScriptApp(options: DeployableAwsCdkTypeScriptAppOptions)
```

##### `options`<sup>Required</sup> <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptApp.parameter.options"></a>

- *Type:* [`deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions`](#deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptAppOptions)

---

#### Methods <a name="Methods"></a>

##### `synth` <a name="deployable-awscdk-app-ts.DeployableAwsCdkTypeScriptApp.synth"></a>

```typescript
public synth()
```





