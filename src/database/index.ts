import * as knex from 'knex';
import { config } from '../config';

const { database, user, password, host } = config.database;

const db = knex({
  client: 'pg',
  connection: { database, user, password, host },
});

export { db };
