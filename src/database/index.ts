import * as knex from 'knex';
import { dbConfig } from './config';

const db = knex(dbConfig);

export { db };
