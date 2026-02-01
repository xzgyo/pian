#!/usr/bin/env bash
docker run -it \
  --name pian \
  -p 8080:80 \
  -v /home/zhang/Desktop/pian:/var/www/html/pian:ro \
  debian:13

# run in docker
apt update -y && apt upgrade -y && apt install nginx -y && nginx