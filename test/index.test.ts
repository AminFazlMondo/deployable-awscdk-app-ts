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
    environments: ['dev', 'staging'],
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
    environments: ['dev'],
    stackPattern: 'myStack',
  })
  project.synth()

  test('release workflow', () => {
    const content = readFile('/.github/workflows/release.yml', project.outdir)
    expect(content).toMatchSnapshot()
  })
})