import { config } from '../config';

const { database, user, password, host } = config.database;
const { root } = config;

const dbConfig = {
  client: 'pg',
  connection: { database, user, password, host },
  useNullAsDefault: true,
  migrations: {
    directory: `${root}/src/migrations`,
    tableName: 'migrations',
  },
};

export { dbConfig };
