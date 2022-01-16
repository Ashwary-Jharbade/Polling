require("dotenv").config();

const envConstants = {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  DB_NAME: process.env.DB_NAME,
  DB_AGENT: process.env.DB_AGENT,
};

module.exports = envConstants;
