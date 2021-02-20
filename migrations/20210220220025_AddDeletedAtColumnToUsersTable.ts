import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void[]> {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.timestamp('deleted_at').nullable();
    }),
  ]);
}

export async function down(knex: Knex): Promise<void[]> {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.dropColumn('deleted_at');
    }),
  ]);
}
