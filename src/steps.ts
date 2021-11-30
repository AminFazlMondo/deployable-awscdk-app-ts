import {JobStep} from 'projen/lib/github/workflows-model'
import {AWSCredentials} from '.'

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

export function setAwsCredentials(awsCredentials: AWSCredentials): JobStep {
  const name = 'Configure AWS Credentials'
  const accessKeyId = 'accessKeyId' in awsCredentials ? awsCredentials.accessKeyId : `'\${{ secrets.${awsCredentials.accessKeyIdSecretName} }}'`
  const secretAccessKey = 'secretAccessKey' in awsCredentials ? awsCredentials.secretAccessKey : `'\${{ secrets.${awsCredentials.secretAccessKeySecretName} }}'`

  if (awsCredentials.roleToAssume)
    return {
      name,
      uses: 'aws-actions/configure-aws-credentials@v1',
      with: {
        'aws-access-key-id': accessKeyId,
        'aws-secret-access-key': secretAccessKey,
        'role-to-assume': awsCredentials.roleToAssume,
        'aws-region': awsCredentials.region,
        'role-duration-seconds': awsCredentials.assumeRoleDurationSeconds ?? 300,
      },
    }

  const commands = [
    `accessKeyId=${accessKeyId}`,
    'echo "::add-mask::$accessKeyId"',
    'echo "AWS_ACCESS_KEY_ID=$accessKeyId" >> $GITHUB_ENV',

    `secretAccessKey=${secretAccessKey}`,
    'echo "::add-mask::$secretAccessKey"',
    'echo "AWS_SECRET_ACCESS_KEY=$secretAccessKey" >> $GITHUB_ENV',

    `region=${awsCredentials.region}`,
    'echo "::add-mask::$region"',
    'echo "AWS_REGION=$region" >> $GITHUB_ENV',
  ]

  return {
    name,
    run: `\n${commands.join('\n')}`,
  }

}