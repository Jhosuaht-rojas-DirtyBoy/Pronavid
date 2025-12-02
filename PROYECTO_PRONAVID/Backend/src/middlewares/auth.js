// src/middlewares/auth.js
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "secret_dev";

export const verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "Token requerido" });

  const parts = auth.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") return res.status(401).json({ message: "Formato token inválido" });

  const token = parts[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload; // { id_usuario, id_rol, correo }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido" });
  }
};

export const requireRole = (rolesAllowed = []) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: "No autenticado" });
  // aquí rolesAllowed puede ser array de ids de rol o nombres; en tu BD usas id_rol
  if (rolesAllowed.length && !rolesAllowed.includes(req.user.id_rol)) {
    return res.status(403).json({ message: "Permisos insuficientes" });
  }
  next();
};
