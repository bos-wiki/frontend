# Dockerfile
#FROM node:18.11.0-alpine
#
## create destination directory
#RUN mkdir -p /usr/src/nuxt-app
#WORKDIR /usr/src/nuxt-app
#
## update and install dependency
#RUN apk update && apk upgrade
#RUN apk add git
#
## copy the app, note .dockerignore
#COPY . /usr/src/nuxt-app/
#RUN npm install
#
#EXPOSE 3000
#
#ENV NUXT_HOST=0.0.0.0
#ENV NUXT_PORT=3000
#
#CMD [ "npm", "run", "dev"]


# The instructions for the first stage
FROM node:18.11.0-alpine as builder
WORKDIR /usr/src/app
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
RUN apk --no-cache add python3 make g++
COPY package*.json ./
RUN npm install

# The instructions for second stage
FROM node:18.11.0-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY . .
EXPOSE 3000
EXPOSE 24678
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD [ "npm", "run", "dev" ]
