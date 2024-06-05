<h1 align="center"> Final Exam - AWS Cloud Application Development </h1>

<h1> 1. Build and Develop a CloudFormation Template to deploy following AWS Resources </h1>

•	AWS DynamoDB Table with Name "metroddb"

•	AWS VPC with CIDR 10.50.0.0/16 in ca-central-1 region

•	Create an IGW and Attach to your VPC

•	Create Public RT in your VPC and Add a New Route for Destination as 0.0.0.0/0 and Target is your IGW

•	Create 2 Subnets in AZ-1 (ca-central-1a) with CIDRs as 10.50.1.0/24, 10.50.2.0/24

•	Create 2 Subnets in AZ-2 (ca-central-1b) with CIDRs as 10.50.3.0/24, 10.50.4.0/24

•	Update Subnet Setting for Subnet-1 and Subnet-3 to enable auto-assign public IP

•	Associate Subnet-1 and Subnet-3 to your Public Route table created earlier

•	Create an EIP

•	Create a NAT-GT in Subnet-1 and Associate the EIP

•	Create Private Route Table and Create a Route with destination 0.0.0.0/0 and target NAT-GT

•	Associate Subnet-2 and Subnet-4 to Private Route Table

•	Create a SG with 2 rule port-22 and Port-80 open for 0.0.0.0/0

•	Deploy an Public EC2 to Subnet-1 using the SG

•	Deploy an EC2 to Subnet-2 using the SG

<h1> 2. Build and Develop a Terraform Template to deploy following AWS Resources </h1>

•	Create an S3 Bucket

•	Create an IAM Role and a Sample IAM Policy attached to the role

•	Create a Security Group with Port 3306 open for 0.0.0.0/0 in your VPC which you deployed in previous step (CIDR with 10.50.0.0/16))

•	Create a RDS Instance with MySQL and use the SG in last step

•	Create a AWS Glue Job

•	Create a KMS Key

•	Create an Application Load Balancer

•	Create an AutoScaling Group

<h1> 3. Build and Develop a CDK Template to deploy following AWS Resources </h1>

•	Create a VPC with CIDR 10.30.0.0/16

•	Create a EC2 in the VPC using Public Subnet

•	Create an SQS Queue

•	Create an SNS Topic

•	Create a AWS Secrets with Name "metrodb-secrets" and add two key-value pair (username and password) add some random value in the secrets

<h1> 4. Complete the Following Workshop and share the screenshots of the Output: </h1>

•	https://aws-core-services.ws.kabits.com/two-tier-application-linux/

<h1> 5. Complete the Following Workshop and share the screenshots of the Output: </h1>

•	Step-1: https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html

•	Step-2: https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-cloudfront-walkthrough.html

<h1> 6. Complete the Following Workshop and share the screenshot of the resources and website URLs. </h1>

•	https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/

Note: The s3 download Project URL in Module-1 is:
This is wrong:

•	cd wildrydes-site

•	aws s3 cp s3://wildrydes-us-east-1/WebApplication/1_StaticWebHosting/website ./ --recursive

Instead use this:

•	cd wildrydes-site

•	aws s3 cp s3://ttt-wildrydes/wildrydes-site ./ --recursive

Ref: https://repost.aws/questions/QUKwoXr7h-RdO9uKdYYzfwjw/build-a-serverless-web-application-errors-on-copying-s3-file-wildrydes
