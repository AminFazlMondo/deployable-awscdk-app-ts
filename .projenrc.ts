import { javascript, cdk, TextFile } from 'projen';

const workflowNodeVersion = '24';

const project = new cdk.JsiiProject({
  author: 'Amin Fazl',
  authorAddress: 'amin.fazl@mondo.com.au',
  defaultReleaseBranch: 'main',
  name: 'deployable-awscdk-app-ts',
  description: 'A projen project for Typescript AWS CDK App',
  keywords: [
    'projen',
    'Typescript',
    'AWS CDK',
    'Deployment',
  ],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/AminFazlMondo/deployable-awscdk-app-ts.git',
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: '9',
  npmTrustedPublishing: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [],
  bundledDeps: [
    'semver',
  ],
  peerDeps: [
    'projen',
    'constructs',
  ],
  devDeps: [
    'fs-extra',
    '@types/fs-extra',
    '@types/semver',
    'yaml',
  ],
  workflowNodeVersion,
  minNodeVersion: '20.0.0',
  publishTasks: true,
  autoApproveOptions: {
    allowedUsernames: ['AminFazlMondo'],
  },
  autoApproveUpgrades: true,
  jsiiVersion: '5.9.x',
  releaseFailureIssue: true,
});

project.npmrc.addConfig('node-linker', 'hoisted');
project.npmrc.addConfig('strict-peer-dependencies', 'false');

new TextFile(project, '.nvmrc', {
  lines: [workflowNodeVersion],
});

project.synth();