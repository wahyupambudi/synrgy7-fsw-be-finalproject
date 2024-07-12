import { Request, Response } from "express";
const Log = require("../../../services/logLoginService");

export default {
    async findAll(req: Request, res: Response) {
        try {
            const logs = await Log.findAll();
            return res.status(200).json({
                success: true,
                message: "Success Get Log login ",
                data: logs
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async findInsert(req: Request, res: Response) {
        try {
            const logs = await Log.findInsert();
            return res.status(200).json({
                message: "Success",
                logs
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async findUpdate(req: Request, res: Response) {
        try {
            const logs = await Log.findUpdate();
            return res.status(200).json({
                message: "Success",
                logs
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async findDelete(req: Request, res: Response) {
        try {
            const logs = await Log.findDelete();
            return res.status(200).json({
                message: "Success",
                logs
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
}