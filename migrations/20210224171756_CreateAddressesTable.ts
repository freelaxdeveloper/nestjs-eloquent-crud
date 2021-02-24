import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('addresses', function(table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('users.id').notNullable()
    table.string('address').notNullable()
    table.timestamps();
    table.timestamp('deleted_at').nullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('addresses')
}

