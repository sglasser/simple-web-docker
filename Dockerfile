# Specify base image

FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY ./ ./


#Default command
CMD ["npm", "start"]