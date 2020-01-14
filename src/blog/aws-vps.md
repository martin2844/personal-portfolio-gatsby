---


title: 'Deploy your MERN app to AWS'
date: '20-12-2019'
sinopsis: 'If you want to deploy a MERN app to AWS, and you have windows as your OS, this is for you.'
tags: [AWS, deploy, React, MongoDB, Node, Express]



---



# Setup - AWS EC2 instance.




### Launch the instance
1. Create new EC2 instance in desired cluster location
2. Select Ubuntu Server 16.04 LTS (HVM), SSD Volume Type  - free tier to start.
3. Click review and launch
4. Select create new key pair, and choose a desired name. I will put AWS-WORDPRESS
5. Download KeyPair
6. LAUNCH INSTANCE

### SSH using Putty
1. Download Putty and Puttygen.
2. Open Putty gen and open the new key pair downloaded. 
   1. Save as SSH RSA, private key.
3. Open Putty.
   1. ON putty, your Host Name will be ubuntu@'yourPublicDNS' port will be 22.
   2. In my case it will be ubuntu@ec2-18-228-245-130.sa-east-1.compute.amazonaws.com, you can get this from the instance panel in AWS.
   3. Go to SSH --> Auth. Browse for your new created key with puttygen.
   4. Go back to session and write a name on Saved Session, and click save. I chose wordpress as my name for the session.
   5. Click Open
   6. Click YEs on security notice

### Inside the EC2 Instance. Once connected


