FROM node:latest

LABEL Name=vaultie-site Version=0.0.1

EXPOSE 8080

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . /app

CMD npm run start:prod