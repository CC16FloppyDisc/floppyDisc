const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
  searchPath: "public",
});

module.exports = db;

// const knex = require("knex");
// const config = require("dotenv").config();
// const dbEnv = require("../knexfile");

// console.log("dbEnv", dbEnv)
// const db = knex({
//   client: "pg",
//   connection: process.env.NODE_ENV !== 'production' ? dbEnv.development.connection : dbEnv.production.connection,
//   searchPath: "public",
// });

// module.exports = db;
