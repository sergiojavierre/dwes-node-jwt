import express from "express";

import { ensureAuth } from "../security/middleware.js";

import * as pokemonController from "../controllers/pokemon.controller.js";

const router = express.Router();

router.post("/", ensureAuth, pokemonController.insert);
router.get("/", ensureAuth, pokemonController.get);

export { router };
