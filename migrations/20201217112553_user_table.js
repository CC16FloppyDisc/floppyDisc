exports.up = function (knex) {
  return knex.schema.createTable("users", table => {
    table.increments().index();
    table.text("first_name").notNullable();
    table.text("last_name").notNullable();
    table.text("email").notNullable();
    table.text("password").notNullable();
    table.text("stripe_id");
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("users");
};
