import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('log_login', (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.integer('userId').notNullable();
        table.string('username').notNullable();
        table.string('emailAddress').notNullable();
        table.string('msg').notNullable();
        table.timestamp('createdAt').notNullable()
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('log_login');
}

