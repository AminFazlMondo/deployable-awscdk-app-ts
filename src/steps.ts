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

export function setNodeVersionStep(nodeVersion: string): JobStep {
  return {
    name: 'Setup Node.js',
    uses: 'actions/setup-node@v2.2.0',
    with: {
      'node-version': nodeVersion,
    },
  }
}

export function installDependenciesStep(): JobStep {
  return {
    name: 'Install dependencies',
    run: 'npm ci',
  }
}

export function deploymentStep(stackPattern?: string): JobStep {
  const deployArgument = stackPattern ? ` ${stackPattern}`: ''

  return {
    name: 'Deployment',
    run: `npx projen deploy${deployArgument}`,
  }
}

function setAwsCredentialsInEnvironment(): JobStep {
  const commands = [
    'echo "AWS_ACCESS_KEY_ID=$accessKeyId" >> $GITHUB_ENV',
    'echo "AWS_SECRET_ACCESS_KEY=$secretAccessKey" >> $GITHUB_ENV',
    'echo "AWS_REGION=$region" >> $GITHUB_ENV',
  ]

  return {
    if: '${{ matrix.assumeRole == "false" }}',
    name: 'Configure AWS Credentials',
    run: `\n${commands.join('\n')}`,
    env: {
      accessKeyId: '${{ matrix.accessKeyId }}',
      secretAccessKey: '${{ matrix.secretAccessKey }}',
      region: '${{ matrix.region }}',
    },
  }
}

function assumeAwsRoleStep(): JobStep {
  return {
    if: '${{ matrix.assumeRole == "true" }}',
    name: 'Assume AWS Role',
    uses: 'aws-actions/configure-aws-credentials@v1',
    with: {
      'aws-access-key-id': '${{ matrix.accessKeyId }}',
      'aws-secret-access-key': '${{ matrix.secretAccessKey }}',
      'role-to-assume': '${{ matrix.roleToAssume }}',
      'aws-region': '${{ matrix.region }}',
      'role-duration-seconds': '${{ matrix.assumeRoleDurationSeconds }}',
    },
  }
}

export function setAwsCredentialsSteps(): JobStep[] {
  return [
    setAwsCredentialsInEnvironment(),
    assumeAwsRoleStep(),
  ]
}

export function setNpmConfig(configName: string, configValue: string): JobStep {
  const environmentVariableName = 'CONFIG_VALUE'
  return {
    name: 'Setting NPM Config',
    env: {
      [environmentVariableName]: configValue,
    },
    run: `npm config set ${configName} $${environmentVariableName}`,
  }
}