const logLoginRepository = require("../repositories/logLoginRepository")

export const findAll = () => {
    return logLoginRepository.findAll();
}

export const findInsert = () => {
    return logLoginRepository.findInsert();
}

export const findUpdate = () => {
    return logLoginRepository.findUpdate();
}

export const findDelete = () => {
    return logLoginRepository.findDelete();
}