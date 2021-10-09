FROM ubuntu:18.04

RUN apt update
RUN apt -y install sudo
RUN sudo apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN sudo apt-get -y install nodejs gcc g++ make  # npm -v 6.10.2 node -v v12.8.0

WORKDIR /my-first-app
# EXPOSE 3000
CMD cd /my-first-app && npm start
