import type { Knex } from "knex";
import dotenv from "dotenv";

// call function dotenv;
dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      // filename: "./dev.sqlite3"
      host: process.env.HOSTDB,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: Number(process.env.PORTDB)
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      host: process.env.HOSTDB,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: Number(process.env.PORTDB)
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      // filename: "./dev.sqlite3"
      host: process.env.HOSTDB,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: Number(process.env.PORTDB)
    }
  }

};

module.exports = config;
