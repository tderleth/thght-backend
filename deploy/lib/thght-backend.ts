import ec2 = require('@aws-cdk/aws-ec2');
import ecs = require('@aws-cdk/aws-ecs');
import ecs_patterns = require('@aws-cdk/aws-ecs-patterns');
import cdk = require('@aws-cdk/core');

export class ThghtBackend extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'defaultVpc', {
      maxAzs: 3,
    });

    const cluster = new ecs.Cluster(this, 'defaultCluster', {
      vpc,
    });

    new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'defaultFargateService', {
      cluster,
      cpu: 256,
      desiredCount: 1,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry(
          'thomasderleth/thght:0d43f521dc94ac123a4bf80ea3ec79edaeeafe0e',
        ),
      },
      memoryLimitMiB: 512,
      publicLoadBalancer: true,
    });
  }
}
