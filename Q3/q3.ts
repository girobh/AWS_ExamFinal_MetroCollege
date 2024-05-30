import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as sqs from '@aws-cdk/aws-sqs';
import * as sns from '@aws-cdk/aws-sns';
import * as secretsmanager from '@aws-cdk/aws-secretsmanager';

export class MyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create VPC
    const vpc = new ec2.Vpc(this, 'MyVPC', {
      cidr: '10.30.0.0/16',
      maxAzs: 3 // Adjust according to your requirements
    });

    // Create EC2 instance in the public subnet of the VPC
    const instance = new ec2.Instance(this, 'MyEC2Instance', {
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2
      }),
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
    });

    // Create SQS Queue
    const queue = new sqs.Queue(this, 'MyQueue', {
      fifo: false // Change to true if you need FIFO queue
    });

    // Create SNS Topic
    const topic = new sns.Topic(this, 'MyTopic');

    // Create AWS Secrets
    const secret = new secretsmanager.Secret(this, 'MySecret', {
      secretName: 'metrodb-secrets',
      generateSecretString: {
        secretStringTemplate: JSON.stringify({ username: 'randomUsername', password: 'randomPassword' }),
        excludePunctuation: true,
        includeSpace: false,
        generateStringKey: false
      }
    });

    // Grant necessary permissions
    secret.grantRead(instance); // Grants read permissions to EC2 instance
    queue.grantSendMessages(instance); // Grants permissions to send messages to the queue
    topic.grantPublish(instance); // Grants permissions to publish to the SNS topic
  }
}

const app = new cdk.App();
new MyStack(app, 'MyStack');
