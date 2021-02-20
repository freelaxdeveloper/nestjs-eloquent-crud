exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email').unique();
      table.string('ulid').unique();
      table.string('password');
      table.timestamps();
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([knex.schema.dropTable('users')]);
};
