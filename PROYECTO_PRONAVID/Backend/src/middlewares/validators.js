// src/middlewares/validators.js
import { body, validationResult } from "express-validator";

export const registerValidation = [
  body("primer_nombre").notEmpty().withMessage("primer_nombre requerido"),
  body("primer_apellido").notEmpty().withMessage("primer_apellido requerido"),
  body("tipo_documento").isIn(["Cédula de ciudadanía", "Tarjeta de identidad"]).withMessage("tipo_documento inválido"),
  body("numero_documento").notEmpty().withMessage("numero_documento requerido"),
  body("correo").isEmail().withMessage("correo inválido"),
  body("contrasena").isLength({ min: 6 }).withMessage("contrasena mínimo 6 caracteres"),
  body("id_rol").isInt().withMessage("id_rol inválido"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

export const loginValidation = [
  body("correo").isEmail().withMessage("correo inválido"),
  body("contrasena").notEmpty().withMessage("contrasena requerida"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

export const updateValidation = [
  body("correo").optional().isEmail().withMessage("correo inválido"),
  body("contrasena").optional().isLength({ min: 6 }).withMessage("contrasena mínimo 6 caracteres"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];
