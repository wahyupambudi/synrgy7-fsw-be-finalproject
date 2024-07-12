import { Model, ModelObject } from "objection";

export class LogLoginModel extends Model {
    id!: number;
    name!: string;
    email!: string;
    role!: string;
    password?: string;
    created_At!: Date;
    updated_At!: Date;

    static get tableName() {
        return "log_login";
    }
}

export type User = ModelObject<LogLoginModel>;