FROM node:11

RUN groupmod -g 1001 node && usermod -u 1001 -g 1001 node

ARG UID
RUN adduser --uid $UID --disabled-password --gecos "" frontend

ENV APP /usr/src/app
RUN mkdir $APP
WORKDIR $APP

COPY package.json yarn.lock $APP/
RUN yarn

COPY . $APP/
