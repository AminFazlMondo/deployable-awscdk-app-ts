import {JsiiProject, NodePackageManager, TextFile} from 'projen'

const project = new JsiiProject({
  author: 'Amin Fazl',
  authorAddress: 'amin.fazl@mondo.com.au',
  defaultReleaseBranch: 'main',
  name: 'deployable-awscdk-app-ts',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/amin.fazl/deployable-awscdk-app-ts.git',
  packageManager: NodePackageManager.NPM,
  deps: [
    'projen',
  ],
  devDeps: [
    'fs-extra',
    '@types/fs-extra',
  ],
})

new TextFile(project, '.nvmrc', {
  lines: ['14.18.1'],
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