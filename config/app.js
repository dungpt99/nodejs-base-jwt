'use strict';

const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  name: process.env.APP_NAME || 'NodeJS',
  env: process.env.APP_ENV || 'development',
  debug: process.env.APP_DEBUG || true,
  url: process.env.APP_URL || 'http://localhost',
  port: process.env.APP_PORT || 3000,
  timezone: process.env.APP_TIMEZONE || 'Etc/GMT0'
};
