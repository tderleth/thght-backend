/* eslint-disable @typescript-eslint/camelcase */

import * as dotenv from 'dotenv';
import { join, normalize } from 'path';

dotenv.config();
const rootPath = normalize(join(__dirname, '..', '..'));

const ENV = process.env;

interface IConfig {
  [key: string]: any;
}

const config: IConfig = {
  database: {
    database: ENV.DB_DATABASE || 'thght',
    host: ENV.DB_HOST || 'database',
    password: ENV.DB_PASSWORD || 'example',
    port: parseInt(ENV.DB_PORT || '5432', 10),
    user: ENV.DB_USER || 'postgres',
  },
  env: ENV.NODE_ENV || 'development',
  logLevel: ENV.LOG_LEVEL || 'info',
  name: ENV.NAME || 'thght-backend',
  port: parseInt(ENV.PORT || '5432', 10),
  protocol: ENV.PROTOCOL || 'https',
  root: rootPath,
};

export { config };
