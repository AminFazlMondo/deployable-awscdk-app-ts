# Deployable Typescript AWS CDK App Projen Project

Inspired by [projen](https://github.com/projen/projen)
This is a projen project for typescript AWS CDK Applications deployed via github actions.

## Getting started

To create a new project, run the following command and follow the instructions:

```
console
$ mkdir my-project
$ cd my-project
$ git init
$ npx projen new --from deployable-awscdk-app-ts
🤖 Synthesizing project...
...
```

This will initialize a projen project and will create `.projenrc.js` file for capturing the project details and options. Below is an example of the contents in this file

### Example
```javascript
const { DeployableAwsCdkTypeScriptApp } = require('deployable-awscdk-app-ts');

const project = new TypeScriptProject({
  name: 'my-test-app',
  defaultReleaseBranch: 'main',
  cdkVersion: '1.129.0',
  workflowNodeVersion: '14.18.1',
  deployOptions: {
    environments: ['dev', 'prod'],
    awsCredentials: {
      accessKeyIdSecretName: 'secret-1',
      secretAccessKeySecretName: 'secret-2',
      region: 'aws-region-1',
    },
  }
});

project.synth()
```
