import express from "express";

import * as userController from "../controllers/users.controller.js";

const router = express.Router();

router.post("/registro", userController.registro);
router.post("/login", userController.login);

export { router };
