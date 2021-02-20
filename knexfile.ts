import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig = {
  client: process.env.MYSQL_DRIVER,
  connection: {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    charset: process.env.MYSQL_CHARSET,
  },
};

module.exports = {
  development: {
    ...databaseConfig,
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
