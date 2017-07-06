FROM node:alpine

COPY src/ /app/
RUN mkdir -p /log
WORKDIR /app
RUN npm install

CMD ["node", "server.js"]
