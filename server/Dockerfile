FROM node:20-alpine

WORKDIR /app

COPY package*.json /app

RUN npm i --no-progress

COPY . /app

EXPOSE 3000

CMD ["npm", "run", "start"]
