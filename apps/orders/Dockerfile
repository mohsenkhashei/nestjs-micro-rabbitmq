FROM node:lts AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build orders


FROM node:lts AS production

ARG NODE_ENV=production
ENV NODE_ENV={NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn add semver

RUN yarn install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "dist/apps/orders/main" ]