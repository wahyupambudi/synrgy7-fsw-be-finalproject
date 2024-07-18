const logLoginRepository = require("../repositories/logLoginRepository")

export const findAll = () => {
    return logLoginRepository.findAll();
}

export const createLogLogin = (logData: any) => {
    return logLoginRepository.createLogLogin(logData);
}

export const findByEmail = (emailAddress: string) => {
    return logLoginRepository.findByEmail(emailAddress);
}