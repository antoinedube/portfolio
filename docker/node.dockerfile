FROM node:alpine

COPY src/ /app/
RUN mkdir /app/log
WORKDIR /app
RUN npm install

