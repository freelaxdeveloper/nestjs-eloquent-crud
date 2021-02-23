import * as Knex from "knex";


export async function up(knex: Knex): Promise<void[]> {
  return Promise.all([
    knex.schema.createTable('companies', function (table) {
      table.increments('id').primary();
      table.string('ulid').unique();
      table.string('name');
      table.string('note', 2048);
      table.timestamps();
      table.timestamp('deleted_at').nullable();
    }),
  ]);
}


export async function down(knex: Knex): Promise<void[]> {
  return Promise.all([knex.schema.dropTable('companies')]);
}

