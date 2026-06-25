import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './env';

console.log('env : ', env);

export const TypeOrmConfig: TypeOrmModule = env.isTest
  ? {
      type: 'better-sqlite3',
      database: 'chatweb.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }
  : {
      type: 'postgres',
      host: env.db.host,
      password: env.db.password,
      username: env.db.username,
      database: env.db.name,
      url: env.db.url,
      port: env.db.port,
      synchronise: false,//env.node_env !== 'production',
      autoLoadEntities: true,
    };
