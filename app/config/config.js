require('dotenv').config();

export const development = {
  username: process.env.DB_DEV_USERNAME,
  password: process.env.DB_DEV_PASSWORD,
  database: process.env.DB_DEV_NAME,
  host: process.env.DB_DEB_HOST,
  dialect: 'mysql'
};
export const test = {
  username: process.env.DB_TEST_USERNAME,
  password: process.env.DB_TEST_PASSWORD,
  database: process.env.DB_TEST_NAME,
  host: process.env.DB_TEST_HOST,
  dialect: 'mysql'
};
export const production = {
  username: process.env.DB_PRODUCTION_USERNAME,
  password: process.env.DB_PRODUCTION_PASSWORD,
  database: process.env.DB_PRODUCTION_NAME,
  host: process.env.DB_PRODUCTION_HOST,
  dialect: 'mysql'
};
