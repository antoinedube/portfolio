FROM node:alpine

COPY src/ /app/
RUN mkdir -p /app/log
WORKDIR /app
RUN npm install

CMD ["node", "server.js"]
