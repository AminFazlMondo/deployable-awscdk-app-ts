import { NodePackageManager } from 'projen/lib/javascript';
import { DeployableAwsCdkTypeScriptApp, DeployJobStrategy, DeployOptions } from '../../src';
import { DeployableAwsCdkTypeScriptAppStepsFactory } from '../../src/steps';

describe('getJobForEnvironment', () => {
  const deployOptions: DeployOptions = {
    environments: [
      {
        name: 'Dev',
        awsCredentials: {
          region: 'us-east-1',
        },
      },
      {
        name: 'UAT',
        awsCredentials: {
          region: 'us-east-1',
        },
        runsOn: 'stub-runner',
      },
    ],
    environmentVariableName: 'STACK_ENV',
  };
  const project = new DeployableAwsCdkTypeScriptApp({
    name: 'test',
    defaultReleaseBranch: 'main',
    cdkVersion: '2.0.0',
    deployOptions,
    packageManager: NodePackageManager.PNPM,
    minNodeVersion: '20.0.0',
  });

  const factory = new DeployableAwsCdkTypeScriptAppStepsFactory(
    project,
    {
      checkActiveDeployment: false,
      deployOptions,
      jobStrategy: DeployJobStrategy.MULTI_JOB,
    },
  );

  test('Should return a job definition with the default runsOn value When runsOn is NOT specified', () => {
    const result = factory.getJobForEnvironment(deployOptions.environments[0], deployOptions.environmentVariableName);

    expect(result.runsOn).toEqual(['ubuntu-latest']);
  });

  test('Should return a job definition with the correct runsOn value When runsOn is specified', () => {
    const result = factory.getJobForEnvironment(deployOptions.environments[1], deployOptions.environmentVariableName);

    expect(result.runsOn).toEqual(['stub-runner']);
  });
});