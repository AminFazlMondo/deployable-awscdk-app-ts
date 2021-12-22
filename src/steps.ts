import {JobStep} from 'projen/lib/github/workflows-model'

export function checkoutStep(): JobStep {
  return {
    name: 'Checkout',
    uses: 'actions/checkout@v2',
    with: {
      ref: '${{ github.sha }}',
    },
  }
}

export function setNodeVersionStep(nodeVersion: string, checkActiveDeployment: boolean): JobStep {
  return {
    ...getSkipIfAlreadyActiveDeploymentCondition(checkActiveDeployment),
    name: 'Setup Node.js',
    uses: 'actions/setup-node@v2.2.0',
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

export function deploymentStep(checkActiveDeployment: boolean): JobStep {
  return {
    ...getSkipIfAlreadyActiveDeploymentCondition(checkActiveDeployment),
    name: 'Deployment',
    run: 'npx projen deploy',
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
    run: `\n${commands.join('\n')}`,
    env: {
      accessKeyId: '${{ secrets[matrix.accessKeyIdSecretName] }}',
      secretAccessKey: '${{ secrets[matrix.secretAccessKeySecretName] }}',
      region: '${{ matrix.region }}',
    },
  }
}

function assumeAwsRoleStep(checkActiveDeployment: boolean): JobStep {
  const condition =
    checkActiveDeployment ?
      `\${{ matrix.assumeRole == 'true' && ${skipIfAlreadyActiveDeploymentCondition} }}` :
      '${{ matrix.assumeRole == \'true\' }}'
  return {
    if: condition,
    name: 'Assume AWS Role',
    uses: 'aws-actions/configure-aws-credentials@v1',
    with: {
      'aws-access-key-id': '${{ secrets[matrix.accessKeyIdSecretName] }}',
      'aws-secret-access-key': '${{ secrets[matrix.secretAccessKeySecretName] }}',
      'role-to-assume': '${{ matrix.roleToAssume }}',
      'aws-region': '${{ matrix.region }}',
      'role-duration-seconds': 1200, //'${{ matrix.assumeRoleDurationSeconds }}',
    },
  }
}

export function setAwsCredentialsSteps(checkActiveDeployment: boolean): JobStep[] {
  return [
    setAwsCredentialsInEnvironment(checkActiveDeployment),
    assumeAwsRoleStep(checkActiveDeployment),
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

const skipIfAlreadyActiveDeploymentCondition= `steps.${checkActiveDeploymentStepId}.outputs.has_active_deployment == 'true'`

function getSkipIfAlreadyActiveDeploymentCondition(checkActiveDeployment: boolean): JobStep | undefined {
  return checkActiveDeployment ? {if: `\${{ ${skipIfAlreadyActiveDeploymentCondition} }}`} : undefined
}