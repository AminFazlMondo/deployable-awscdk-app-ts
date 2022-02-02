# Deployable Typescript AWS CDK App Projen Project

Inspired by [projen](https://github.com/projen/projen)
This is a projen project for typescript AWS CDK Applications deployed via github actions.

## Getting started

To create a new project, run the following command and follow the instructions:

### Typescript

```console
$ mkdir my-project
$ cd my-project
$ git init
$ npx projen new --from deployable-awscdk-app-ts --projenrc-ts
🤖 Synthesizing project...
...
```

This will initialize a projen project and will create `.projenrc.ts` file for capturing the project details and options. Below is an example of the contents in this file

### Javascript

```console
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
    environments: [
      {
        name: 'dev',
        awsCredentials: {
          accessKeyIdSecretName: 'dev-secret-1',
          secretAccessKeySecretName: 'dev-secret-2',
          region: 'dev-aws-region-1',
        },
      },
      {
        name: 'staging',
        awsCredentials: {
          accessKeyIdSecretName: 'staging-secret-1',
          secretAccessKeySecretName: 'staging-secret-2',
          region: 'staging-aws-region-1',
        },
      },
    ]
  }
});

project.synth()
```
