import { javascript, cdk, TextFile } from 'projen';

const nodeVersion = '20';

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
  packageManager: javascript.NodePackageManager.NPM,
  pnpmVersion: '8',
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    'projen',
  ],
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
  workflowNodeVersion: nodeVersion,
  publishTasks: true,
  autoApproveOptions: {
    allowedUsernames: ['AminFazlMondo'],
  },
  autoApproveUpgrades: true,
  jsiiVersion: '5.8.x',
  releaseFailureIssue: true,
});

new TextFile(project, '.nvmrc', {
  lines: [nodeVersion],
});

project.synth();