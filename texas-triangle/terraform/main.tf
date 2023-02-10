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

resource "aws_security_group" "web_traffic" {
  name        = "texas-triangle-web-traffic"
  description = "Allow SSH and HTTP traffic"

  dynamic "ingress" {
    iterator = port
    for_each = var.ingressrules
    content {
      from_port   = port.value
      to_port     = port.value
      protocol    = "TCP"
      cidr_blocks = ["0.0.0.0/0"]
    }
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    "Terraform" = "true"
  }
}

data "aws_ami" "texas-triangle-ami" {
  most_recent = true
  owners      = ["862686223907"]
  filter {
    name   = "name"
    values = ["_nology-baked-image-rg-appwithdb-1675341575"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_instance" "jenkins" {
  ami             = data.aws_ami.texas-triangle-ami.id
  instance_type   = "t2.micro"
  security_groups = [aws_security_group.web_traffic.name]
  key_name        = "JesseHernandez-Buffalo-Key"
  tags = {
    Name = "texas-triangle-jenkins"
  }
}