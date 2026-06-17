import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const env = {
  isTest: process.env.NODE_ENV === 'test',
  node_env: process.env.NODE_ENV || '',
  db: {
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME || 'database',
    username: process.env.DB_USER || 'papou',
    port: 5432,
    password: process.env.DB_PASSWORD || '1234',
  },
};
