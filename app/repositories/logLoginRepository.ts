const { LogLoginModel } = require("../models/LogLoginModels");

type CarData = Partial<InstanceType<typeof LogLoginModel>>;

export const findAll = () => {
    return LogLoginModel.query();
}

export const findInsert = () => {
    return LogLoginModel.query().where('process', 'insert').orderBy('id');
}

export const findUpdate = () => {
    return LogLoginModel.query().where('process', 'update').orderBy('id');
}

export const findDelete = () => {
    return LogLoginModel.query().where('process', 'delete').orderBy('id');
}
