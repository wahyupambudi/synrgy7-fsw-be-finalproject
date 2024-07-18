import { Model, ModelObject } from "objection";

export class LogLoginModel extends Model {
    id!: number;
    userId!: string;
    username!: string;
    emailAddress!: string;
    msg!: string;
    createdAt!: Date;

    static get tableName() {
        return "log_login";
    }
}

export type User = ModelObject<LogLoginModel>;