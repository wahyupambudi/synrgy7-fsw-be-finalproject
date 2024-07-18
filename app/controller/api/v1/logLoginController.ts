import { Request, Response } from "express";
const logLogin = require("../../../services/logLoginService")

export default {
    async findAll(req: Request, res: Response) {
        try {
            const logs = await logLogin.findAll();
            return res.status(200).json({
                success: true,
                message: "Success Get Log login",
                data: logs
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async insertLog(req: Request, res: Response) {
        const { userId, username, emailAddress, msg } = req.body;

        if (!userId || !username || !emailAddress || !msg) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const logData = {
            userId, username, emailAddress, msg,
            createdAt: new Date()
        }

        try {
            const userLogin = await logLogin.createLogLogin(logData);
            return res.status(201).json({
                success: true,
                message: "Success Add Log login",
                data: userLogin
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async getUserByEmail(req: Request, res: Response) {
        const emailAddress = req.query.emailAddress as string;

        try {
            const users = await logLogin.findByEmail(emailAddress);

            if (!users) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Success",
                data: users
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
}