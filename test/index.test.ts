import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import {removeSync} from 'fs-extra'
import {DeployableAwsCdkTypeScriptApp} from '../src'

const autoRemove = new Set<string>()

afterAll((done) => {
  Array.from(autoRemove).forEach(dir => removeSync(dir))
  done()
})

function mkdtemp() {
  const tmpdir = fs.mkdtempSync(path.join(os.tmpdir(), 'ecs-project-test-'))
  autoRemove.add(tmpdir)
  return tmpdir
}

function readFile(filePath: string, outdir: string): string {
  return fs.readFileSync(`${outdir}${filePath}`, 'utf-8')
}

describe('No stack pattern', () => {
  const outdir = mkdtemp()
  const project = new DeployableAwsCdkTypeScriptApp({
    name: 'my-test-app',
    defaultReleaseBranch: 'main',
    cdkVersion: '1.129.0',
    outdir,
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
      ],
    },
  })
  project.synth()

  test('release workflow', () => {
    const content = readFile('/.github/workflows/release.yml', project.outdir)
    expect(content).toMatchSnapshot()
  })
})

describe('specific stack', () => {
  const outdir = mkdtemp()
  const project = new DeployableAwsCdkTypeScriptApp({
    name: 'my-test-app',
    defaultReleaseBranch: 'main',
    cdkVersion: '1.129.0',
    outdir,
    deployOptions: {
      stackPattern: 'myStack',
      environments: [
        {
          name: 'dev',
          awsCredentials: {
            accessKeyIdSecretName: 'dev-secret-1',
            secretAccessKeySecretName: 'dev-secret-2',
            region: 'dev-aws-region-1',
          },
        },
      ],
    },
  })
  project.synth()

  test('release workflow', () => {
    const content = readFile('/.github/workflows/release.yml', project.outdir)
    expect(content).toMatchSnapshot()
  })
})

describe('assume role with default duration', () => {
  const outdir = mkdtemp()
  const project = new DeployableAwsCdkTypeScriptApp({
    name: 'my-test-app',
    defaultReleaseBranch: 'main',
    cdkVersion: '1.129.0',
    outdir,
    deployOptions: {
      environments: [
        {
          name: 'dev',
          awsCredentials: {
            accessKeyIdSecretName: 'dev-secret-1',
            secretAccessKeySecretName: 'dev-secret-2',
            region: 'dev-aws-region-1',
            roleToAssume: 'dev-role',
          },
        },
      ],
    },
  })
  project.synth()

  test('release workflow', () => {
    const content = readFile('/.github/workflows/release.yml', project.outdir)
    expect(content).toMatchSnapshot()
  })
})

describe('assume role with specified duration', () => {
  const outdir = mkdtemp()
  const project = new DeployableAwsCdkTypeScriptApp({
    name: 'my-test-app',
    defaultReleaseBranch: 'main',
    cdkVersion: '1.129.0',
    outdir,
    deployOptions: {
      environments: [
        {
          name: 'dev',
          awsCredentials: {
            accessKeyIdSecretName: 'dev-secret-1',
            secretAccessKeySecretName: 'dev-secret-2',
            region: 'dev-aws-region-1',
            roleToAssume: 'dev-role',
            assumeRoleDurationSeconds: 1200,
          },
        },
      ],
    },
  })
  project.synth()

  test('release workflow', () => {
    const content = readFile('/.github/workflows/release.yml', project.outdir)
    expect(content).toMatchSnapshot()
  })
})