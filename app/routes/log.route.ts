import { Router } from "express";
import logController from "../controller/api/v1/logLoginController";

const router = Router();

router.get("/", logController.findAll);
router.get("/email", logController.getUserByEmail);
router.post("/", logController.insertLog);

export default router;