FROM node:14.17.6

ARG CI=True
WORKDIR /app

COPY package.json yarn.lock prepare.js /app/ 

RUN yarn
