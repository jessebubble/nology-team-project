/* Terraform will be our orchestration choice for the infrastructure 
and deployment to AWS. Terraform will be responsible for 
deployment and is run via Jenkins on a successful Packer Build 
job. Terraform should use the latest AMI that is created by 
Packer. **State file will need to be managed */

/* Jenkins will be the glue in our project. We will be creating three 
jobs.
- Job 1: CI Pipeline with GitHub (auto merge) – Test on Push.
- Job 2: Packer Build Job that creates our App and DB Machine 
AMI's.
- Job 3: Terraform Deployment that is triggered from successful 
Packer job and is our deployment step to AWS */
/* 
Packer will be responsible for creating our AMI's that Terraform 
will use for Deployment. Ansible will be needed as the 
provisioning step for Packer build. The Packer build should be 
triggered from Jenkins manually when we would like to BUILD. 
This is a manual step. */

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.51.0"
    }
  }
}
provider "aws" {
  region = "us-east-2"
}
resource "aws_instance" "texas-triangle" {
  ami           = "ami-0ab0629dba5ae551d"
  instance_type = "t2.micro"
  tags = {
    Name = "texas-triangle"
  }
}