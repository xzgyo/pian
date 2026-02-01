#!/usr/bin/env bash
docker run -it \
  --name pian \
  -p 8080:8080 \
  -v /home/zhang/Desktop/pian:/var/www/html/pian:ro \
  debian:13

# run in docker
apt update -y && apt upgrade -y && apt install nano nginx -y
nano /etc/nginx/sites-enabled/default
# 把端口改成8080
nginx