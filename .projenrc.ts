import {javascript, cdk, TextFile} from 'projen'

const nodeVersion = '14.18.1'

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
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    'projen',
  ],
  peerDeps: [
    'projen',
  ],
  devDeps: [
    'fs-extra',
    '@types/fs-extra',
  ],
  workflowNodeVersion: nodeVersion,
  publishTasks: true,
  autoApproveOptions: {
    allowedUsernames: ['AminFazlMondo'],
  },
  autoApproveUpgrades: true,
})

new TextFile(project, '.nvmrc', {
  lines: [nodeVersion],
})

project.eslint?.addRules({
  'curly': [
    'error',
    'multi',
    'consistent',
  ],
  'semi': [
    'error',
    'never',
  ],
  'object-curly-spacing': 'error',
  'nonblock-statement-body-position': ['error', 'below'],
})

project.synth()