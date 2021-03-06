resource "aws_internet_gateway" "ig" {
  vpc_id = var.vpc_id
}

resource "aws_route_table" "public" {
  vpc_id = var.vpc_id
  
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.ig.id
  }
}

resource "aws_route_table_association" "ra" {
  subnet_id = var.test-vm-subnet
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "rc1" {
  subnet_id = var.cluster-subnet-1
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "rc2" {
  subnet_id = var.cluster-subnet-2
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "rc3" {
  subnet_id = var.cluster-subnet-3
  route_table_id = aws_route_table.public.id
}
