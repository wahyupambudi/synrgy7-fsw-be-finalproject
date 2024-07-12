import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("log_login").del();

    // Inserts seed entries
    await knex("log_login").insert([
        {
            name: "John Doe",
            email: "john.doe@example.com",
            password: await hashPassword("secure_password1"),
            role: "member",
            created_At: knex.fn.now(),
            updated_At: knex.fn.now(),
        },
        {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            password: await hashPassword("secure_password2"),
            role: "member",
            created_At: knex.fn.now(),
            updated_At: knex.fn.now(),
        },
        {
            name: "Admin User",
            email: "admin@example.com",
            password: await hashPassword("strong_admin_password"),
            role: "admin",
            created_At: knex.fn.now(),
            updated_At: knex.fn.now(),
        },
    ]);
};

async function hashPassword(password: string): Promise<string> {
    return `hashed_password_${password}`;
  }