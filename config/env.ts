import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const dbConfig = process.env.DB_URL ? {
  url: process.env.DB_URL,
} : {
  host: process.env.DB_HOST || 'localhost',
  name: process.env.DB_NAME || 'database',
  username: process.env.DB_USER || 'user',
  port: 5432,
  password: process.env.DB_PASSWORD || 'password',
};
export const env = {
  isTest: process.env.NODE_ENV === 'test',
  node_env: process.env.NODE_ENV || '',
  db: dbConfig,
  officeKeyUrl: process.env.OFFICE_KEY_URL || "",
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID || 'project-id',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || 'client-email',
    privateKey: process.env.FIREBASE_PRIVATE_KEY || 'private-key',
  },
};
