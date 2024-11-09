FROM node:20.12.0-alpine3.19

WORKDIR /usr/app/

COPY package.json package-lock.json ./

COPY src ./src

RUN npm ci

CMD ["npm", "run", "dev"]