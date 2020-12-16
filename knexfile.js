// Update with your config settings.

// module.exports = {
// development: {
//   client: "postgresql",
//   connection: {
//     database: "tron",
//     user: "work",
//     password: "",
//   },
// },

// staging: {
//   client: "postgresql",
//   connection: {
//     database: "tron",
//     user: "work",
//     password: "",
//   },
//   pool: {
//     min: 2,
//     max: 10,
//   },
//   migrations: {
//     tableName: "knex_migrations",
//   },
// },

// production: {
//   client: "postgresql",
//   connection: {
//     database: "tron",
//     user: "work",
//     password: "",
//   },
//   pool: {
//     min: 2,
//     max: 10,
//   },
//   migrations: {
//     tableName: "knex_migrations",
//   },
// },
// };

module.exports = {
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/tron`,
  migrations: {
    directory: __dirname + "/migrations",
  },
  seeds: {
    directory: __dirname + "/seeds",
  },
};
