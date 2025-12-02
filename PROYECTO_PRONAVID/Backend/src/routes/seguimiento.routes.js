import { Router } from "express";
import { buscarSeguimiento } from "../controllers/seguimiento.controller.js";

const router = Router();

router.get("/buscar", buscarSeguimiento);

export default router;