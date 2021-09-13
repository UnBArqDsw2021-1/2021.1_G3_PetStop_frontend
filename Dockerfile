FROM node:14.17.6

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . /app/
