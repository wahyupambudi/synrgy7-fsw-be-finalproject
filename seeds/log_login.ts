import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("log_login").del();

    // Inserts seed entries
    await knex("log_login").insert([
        {
            id: 1,
            userId: 101,
            username: 'johndoe',
            emailAddress: 'john@example.com',
            msg: 'success',
            createdAt: knex.fn.now()
        },
        {
            id: 2,
            userId: 102,
            username: 'janedoe',
            emailAddress: 'jane@example.com',
            msg: 'success',
            createdAt: knex.fn.now()
        },
        {
            id: 3,
            userId: 103,
            username: 'bobsmith',
            emailAddress: 'bob@example.com',
            msg: 'success',
            createdAt: knex.fn.now()
        }
    ]);
};