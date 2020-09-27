---


title: 'Deploy wordpress to AWS - easy'
date: '2019-12-20'
sinopsis: 'I guide you step by step on how to deploy a wordpress site to aws'
tags: [AWS, deploy, Wordpress]



---


# Setup - AWS Wordpress

### Launch the instance
1. Create new EC2 instance in desired cluster location
2. Select Wordpress by Bitnami
3. Select Keypair
4. Download keypair
5. Click through free tier.
6. Wait till it completes.

### Access Wordpress
1. Right click server instance, check logs for bitnami autopassword generation
2. Go to your IPV4 and access your WORDPRESS
3. Do whatever you want with it.

### Configure Custom domain.
1. Associate elastic adress to the instance.
2. Go to your nameserver provider and point with an A record to the Elastic IP
3. Wait, and Test.

### Configure SSL for wordpress.
1. SSH with Putty
2. Inside the server run following command
   1. sudo /opt/bitnami/bncert-tool
3. Follow the steps.
4. If name server is resolving you should be ok.