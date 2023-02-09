terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "4.51.0"
        }
    }
}
provider "aws" {
    access_key = "123EXAMPLE"
    secret_key = "123EXAMPLE"
    region = "us-east-2"
}
resource "aws_instance" "example" {
    ami = "ami-123EXAMPLE"
    instance_type = "t2.micro"
    tags = {
        Name = "example"
    }
}