FROM node:16.17.0

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

USER node

EXPOSE 8000

CMD ["yarn","build"]
