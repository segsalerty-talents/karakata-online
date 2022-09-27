FROM node:12-alpine

# Create and define the node_modules's cache directory.
RUN mkdir -p /usr/src/cache
WORKDIR /usr/src/cache

# Install the application's dependencies into the node_modules's cache directory.
COPY package.json ./
#COPY package-lock.json ./
RUN npm install


# Create and define the application's working directory.
RUN mkdir -p /usr/app
WORKDIR /usr/app

USER node

COPY --chown=node:node . /usr/app
