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
  env: ENV.NODE_ENV || 'development',
  logLevel: ENV.PROTOCOL || 'info',
  name: ENV.NAME || 'thght-backend',
  port: ENV.PORT || 3000,
  protocol: ENV.PROTOCOL || 'https',
  root: rootPath,
};

export { config };
