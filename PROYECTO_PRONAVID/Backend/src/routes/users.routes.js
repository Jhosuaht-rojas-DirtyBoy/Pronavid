// src/routes/users.routes.js
import { Router } from "express";
import {
  getUsers, getUser, registerUser, loginUser, putUser, removeUser
} from "../controllers/users.controller.js";
import { registerValidation, loginValidation, updateValidation } from "../middlewares/validators.js";
import { verifyToken, requireRole } from "../middlewares/auth.js";

const router = Router();

// Public
router.post("/register", registerValidation, registerUser);
router.post("/login", loginValidation, loginUser);

// Protected: listar usuarios (solo administradores -> id_rol = 1 por tu seed)
router.get("/", verifyToken, requireRole([1]), getUsers);

// Obtener 1 (autenticado)
router.get("/:id", verifyToken, getUser);

// Actualizar: el usuario puede actualizarse a sí mismo o admin
router.put("/:id", verifyToken, updateValidation, async (req, res, next) => {
  // permitir si es admin o si id coincide con token
  const { id } = req.params;
  if (req.user.id_rol === 1 || req.user.id_usuario == id) {
    return putUser(req, res, next);
  }
  return res.status(403).json({ message: "Permisos insuficientes" });
});

// Borrar usuario: solo admin
router.delete("/:id", verifyToken, requireRole([1]), removeUser);

export default router;
