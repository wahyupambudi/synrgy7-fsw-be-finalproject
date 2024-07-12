import { Router } from "express";
import logController from "../controller/api/v1/logController";

const router = Router();

router.get("/", logController.findAll);

export default router;