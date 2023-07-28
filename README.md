<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[NestJS](https://github.com/nestjs/nest) Microservice with RabbitMQ, MongoDB, Docker

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# install MongoDB Replicaset:
$ yarn global add run-rs

# run mongoDB
$ run-rs

# run rabbitmq
$ docker-compose up

# run each service
$ yarn run start:dev auth
$ yarn run start:dev billing
$ yarn run start:dev orders
```
