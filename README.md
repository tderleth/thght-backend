# thght backend

[![Maintainability](https://api.codeclimate.com/v1/badges/82303f3f3de8beffca2a/maintainability)](https://codeclimate.com/github/thght-birds/thght-backend/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/82303f3f3de8beffca2a/test_coverage)](https://codeclimate.com/github/thght-birds/thght-backend/test_coverage) [![dependencies Status](https://img.shields.io/david/thght-birds/thght-backend.svg)](https://david-dm.org/thght-birds/thght-backend) [![devDependencies Status](https://img.shields.io/david/dev/thght-birds/thght-backend.svg)](https://david-dm.org/thght-birds/thght-backend?type=dev)

This repository entails the backend for thght backend. It's a minimalistic express backendlication that utilises knex as a query builder tool. API docs can be found under the `/docs` route.

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Database](#database)

## Requirements

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org)

## Installation

```bash
npm install
```

## Usage

### Development

```
$ cp .env.sample .env
$ docker-compose up
```

### Testing

```bash
make test
```

### Linting

```bash
npm run lint
```

## Database

The project is based on a postgres database. It uses [knex](https://www.npmjs.com/package/knex) as query builder. In order to use the [knex cli](http://knexjs.org/#Migrations-CLIh) just run `npm run knex`. If you want to run it in the container context you can prefix it like `docker-compose exec node npm run knex`.

### Creating migration files

To create migration files, you can use the knex cli.

```bash
npm run knex migrate:make {$name}
```

### Running migrations

To run migrations locally, you need to spin up the docker environment using `docker-compose up`. Within the container context you need to execute your migration command with `docker-compose exec node npm run knex migrate:latest`.

### Debugging database

In order to debug database, the docker-compose file ships with a minimal database UI tool, named [adminer](https://hub.docker.com/_/adminer/). You can access it via [localhost:8080](http://localhost:8080/?pgsql=database&username=postgres&db=thght&ns=public).
