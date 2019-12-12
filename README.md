# thght backend

[![Maintainability](https://api.codeclimate.com/v1/badges/50080b87bec57763e26f/maintainability)](https://codeclimate.com/github/thght-birds/thght-backend/maintainability)

This repository entails the backend for thght app. It's a minimalistic express application that utilises knex as a query builder tool. API docs can be found under the `/docs` route.

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
