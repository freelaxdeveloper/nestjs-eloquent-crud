import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users_companies', function(table) {
    table.increments('id').primary();
    table.integer('company_id').unsigned().references('companies.id')
    table.integer('user_id').unsigned().references('users.id')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users_companies')
}

