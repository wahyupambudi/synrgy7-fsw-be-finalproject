import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
import knex from "knex";
import { Model } from "objection";
import logRouter from "../app/routes/log.route";
import setupSwagger from '../app/swagger/swagger';
const cors = require('cors');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const knexInstance = knex({
    client: "pg",
    connection: {
        host: process.env.HOSTDB,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
        port: Number(process.env.PORTDB)
    }
})

Model.knex(knexInstance);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/logs", logRouter);

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
        message: "Assalamualaikum Wr Wb.",
        info: "Service REST API Final Project",
    })
})

setupSwagger(app); // Setup Swagger UI

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})


export default app;