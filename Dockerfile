FROM node:12

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

USER node

EXPOSE 8000

CMD ["npm","run","build"]
