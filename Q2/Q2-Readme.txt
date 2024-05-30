2. Build and Develop a Terraform Template to deploy following AWS Resources

* Create an S3 Bucket
* Create an IAM Role and a Sample IAM Policy attached to the role
* Create a Security Group with Port 3306 open for 0.0.0.0/0 in your VPC which you deployed in previous step (CIDR with 10.50.0.0/16))
* Create a RDS Instance with MySQL and use the SG in last step
* Create a AWS Glue Job
* Create a KMS Key
* Create an Application Load Balancer
* Create an AutoScaling Group

This template creates the following AWS resources:

* S3 bucket.
* IAM role and policy.
* Security group for MySQL traffic.
* RDS instance using the security group.
* AWS Glue job.
* KMS key.
* Application Load Balancer.
* Auto Scaling Group with Launch Configuration and Target Group.