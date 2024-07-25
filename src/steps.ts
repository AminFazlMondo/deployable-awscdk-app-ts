import {javascript} from 'projen'
import {JobStep} from 'projen/lib/github/workflows-model'
import {CodeArtifactAuthProvider} from 'projen/lib/javascript'

export function checkoutStep(): JobStep {
  return {
    name: 'Checkout',
    uses: 'actions/checkout@v4',
    with: {
      'ref': '${{ github.sha }}',
      'fetch-depth': 0,
    },
  }
}

export function setNodeVersionStep(nodeVersion: string, checkActiveDeployment: boolean): JobStep {
  return {
    ...getSkipIfAlreadyActiveDeploymentCondition(checkActiveDeployment),
    name: 'Setup Node.js',
    uses: 'actions/setup-node@v4',
    with: {
      'node-version': nodeVersion,
    },
  }
}

export function installDependenciesStep(command: string, checkActiveDeployment: boolean): JobStep {
  return {
    ...getSkipIfAlreadyActiveDeploymentCondition(checkActiveDeployment),
    name: 'Install dependencies',
    run: command,
  }
}

function getPackageManagerCommandPrefix(packageManager: javascript.NodePackageManager): string {
  if (packageManager === javascript.NodePackageManager.NPM)
    return 'npm run'

  if (packageManager === javascript.NodePackageManager.YARN)
    return 'yarn'

  if (packageManager === javascript.NodePackageManager.PNPM)
    return 'pnpm'

  throw new Error(`Invalid package manager selected (${packageManager})`)
}

export function deploymentStep(checkActiveDeployment: boolean, packageManager: javascript.NodePackageManager): JobStep {

  return {
    ...getSkipIfAlreadyActiveDeploymentCondition(checkActiveDeployment),
    name: 'Deployment',
    run: `${getPackageManagerCommandPrefix(packageManager)} deploy:workflow`,
  }
}

function setAwsCredentialsInEnvironment(checkActiveDeployment: boolean): JobStep {
  const commands = [
    'echo "AWS_ACCESS_KEY_ID=$accessKeyId" >> $GITHUB_ENV',
    'echo "AWS_SECRET_ACCESS_KEY=$secretAccessKey" >> $GITHUB_ENV',
    'echo "AWS_REGION=$region" >> $GITHUB_ENV',
  ]

  const condition =
    checkActiveDeployment ?
      `\${{ matrix.assumeRole == 'false' && ${skipIfAlreadyActiveDeploymentCondition} }}` :
      '${{ matrix.assumeRole == \'false\' }}'

  return {
    if: condition,
    name: 'Configure AWS Credentials',
    run: `${commands.join('\n')}`,
    env: {
      accessKeyId: '${{ secrets[matrix.accessKeyIdSecretName] }}',
      secretAccessKey: '${{ secrets[matrix.secretAccessKeySecretName] }}',
      region: '${{ matrix.region }}',
    },
  }
}

function assumeAwsRoleStep(checkActiveDeployment: boolean, authProvider: CodeArtifactAuthProvider): JobStep {
  const condition =
    checkActiveDeployment ?
      `\${{ matrix.assumeRole == 'true' && ${skipIfAlreadyActiveDeploymentCondition} }}` :
      '${{ matrix.assumeRole == \'true\' }}'

  const secretsParams =
    authProvider === CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR ?
      {
        'aws-access-key-id': '${{ secrets[matrix.accessKeyIdSecretName] }}',
        'aws-secret-access-key': '${{ secrets[matrix.secretAccessKeySecretName] }}',
      } : undefined
  return {
    if: condition,
    name: 'Assume AWS Role',
    uses: 'aws-actions/configure-aws-credentials@v4',
    with: {
      ...secretsParams,
      'role-to-assume': '${{ matrix.roleToAssume }}',
      'aws-region': '${{ matrix.region }}',
      'role-duration-seconds': '${{ matrix.assumeRoleDurationSeconds }}',
    },
  }
}

export function setAwsCredentialsSteps(
  checkActiveDeployment: boolean,
  authProvider: CodeArtifactAuthProvider = CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR)
  : JobStep[] {
  return [
    setAwsCredentialsInEnvironment(checkActiveDeployment),
    assumeAwsRoleStep(checkActiveDeployment, authProvider),
  ]
}

export function setNpmConfig(configName: string, configValue: string, checkActiveDeployment: boolean): JobStep {
  const environmentVariableName = 'CONFIG_VALUE'
  return {
    ...getSkipIfAlreadyActiveDeploymentCondition(checkActiveDeployment),
    name: 'Setting NPM Config',
    env: {
      [environmentVariableName]: configValue,
    },
    run: `npm config set ${configName} $${environmentVariableName}`,
  }
}

const checkActiveDeploymentStepId = 'deployment-check'
export function checkActiveDeploymentStep(): JobStep {
  return {
    id: checkActiveDeploymentStepId,
    uses: 'AminFazlMondo/check-deployed-environment@v1',
    with: {
      environment: '${{ matrix.environment }}',
    },
    env: {
      GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
    },
  }
}

const skipIfAlreadyActiveDeploymentCondition= `steps.${checkActiveDeploymentStepId}.outputs.has_active_deployment != 'true'`

function getSkipIfAlreadyActiveDeploymentCondition(checkActiveDeployment: boolean): JobStep | undefined {
  return checkActiveDeployment ? {if: `\${{ ${skipIfAlreadyActiveDeploymentCondition} }}`} : undefined
}

export function postDeploymentStep(checkActiveDeployment: boolean, packageManager: javascript.NodePackageManager): JobStep {
  const condition =
  checkActiveDeployment ?
    `\${{ matrix.hasPostDeployTask == 'true' && ${skipIfAlreadyActiveDeploymentCondition} }}` :
    '${{ matrix.hasPostDeployTask == \'true\' }}'
  return {
    if: condition,
    name: 'Post Deployment',
    run: `${getPackageManagerCommandPrefix(packageManager)} \${{ matrix.postDeploymentScript }}`,
  }
}

export function preDeploymentStep(checkActiveDeployment: boolean, packageManager: javascript.NodePackageManager): JobStep {
  const condition =
  checkActiveDeployment ?
    `\${{ matrix.hasPreDeployTask == 'true' && ${skipIfAlreadyActiveDeploymentCondition} }}` :
    '${{ matrix.hasPreDeployTask == \'true\' }}'
  return {
    if: condition,
    name: 'Pre Deployment',
    run: `${getPackageManagerCommandPrefix(packageManager)} \${{ matrix.preDeploymentScript }}`,
  }
}

export function preInstallDependenciesStep(taskName: string, checkActiveDeployment: boolean): JobStep {
  return {
    ...getSkipIfAlreadyActiveDeploymentCondition(checkActiveDeployment),
    name: taskName,
    run: `npx projen ${taskName}`,
  }
}