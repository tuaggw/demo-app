FROM node:16

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY . ./

RUN yarn install && \
    yarn build

CMD ["yarn", "serve"]