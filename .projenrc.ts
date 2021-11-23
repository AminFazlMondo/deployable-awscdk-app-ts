import { JsiiProject, NodePackageManager } from 'projen';

const project = new JsiiProject({
  author: 'Amin Fazl',
  authorAddress: 'amin.fazl@mondo.com.au',
  defaultReleaseBranch: 'main',
  name: 'deployable-awscdk-app-ts',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/amin.fazl/deployable-awscdk-app-ts.git',
  packageManager: NodePackageManager.NPM,
});

project.synth();