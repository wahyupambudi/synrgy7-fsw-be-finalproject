const { LogLoginModel } = require("../models/LogLoginModels");


export const createLogLogin = (logData: any) => {
    return LogLoginModel.query().insert(logData);
}


export const findAll = () => {
    return LogLoginModel.query();
}

export const findByEmail = (emailAddress: string) => {
    return LogLoginModel.query().where({ emailAddress });
}