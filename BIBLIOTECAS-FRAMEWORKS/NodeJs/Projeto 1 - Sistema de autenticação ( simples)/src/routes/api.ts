import { Router } from "express";

import * as ApiController from "../controllers/apiController";

const router = Router();

router.post("/register", ApiController.register);
router.post("/login", ApiController.login);

export default router;
