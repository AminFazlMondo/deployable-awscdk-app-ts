import { CodeArtifactAuthProvider, NodePackageManager } from 'projen/lib/javascript';
import { DeployableAwsCdkTypeScriptApp, DeployJobStrategy, DeployOptions } from '../../src';
import { DeployableAwsCdkTypeScriptAppStepsFactory } from '../../src/steps';

describe('DeployableAwsCdkTypeScriptAppStepsFactory', () => {
  describe('diffAnnotationJobs', () => {
    const deployOptions: DeployOptions = {
      environments: [
        {
          name: 'Dev',
          awsCredentials: {
            region: 'us-east-1',
          },
        },
        {
          name: 'Prod',
          awsCredentials: {
            region: 'us-east-2',
          },
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

    it('Should generate diff annotation jobs When No Auth provider and npm config set', () => {

      const factory = new DeployableAwsCdkTypeScriptAppStepsFactory(
        project,
        {
          checkActiveDeployment: false,
          deployOptions,
          jobStrategy: DeployJobStrategy.MULTI_JOB,
        },
      );

      const jobs = factory.diffAnnotationJobs;

      expect(jobs).toMatchSnapshot();
    });

    it('Should generate diff annotation jobs When Auth provider and npm config set', () => {

      const factory = new DeployableAwsCdkTypeScriptAppStepsFactory(
        project,
        {
          checkActiveDeployment: false,
          deployOptions,
          jobStrategy: DeployJobStrategy.MULTI_JOB,
          authProvider: CodeArtifactAuthProvider.GITHUB_OIDC,
          npmConfigEnvironment: 'TEST_CONFIG_ENV',
        },
      );

      const jobs = factory.diffAnnotationJobs;

      expect(jobs).toMatchSnapshot();
    });
  });
});