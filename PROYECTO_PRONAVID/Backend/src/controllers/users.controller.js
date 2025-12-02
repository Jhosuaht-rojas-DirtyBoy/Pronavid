// src/controllers/users.controller.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  findAllUsers,
  findUserById,
  findUserByEmail,
  findUserByDocument,
  createUser,
  updateUser,
  deleteUser
} from "../models/users.model.js";

const JWT_SECRET = process.env.JWT_SECRET || "secret_dev";
const SALT_ROUNDS = 10;

export const getUsers = async (req, res, next) => {
  try {
    const users = await findAllUsers();
    res.json(users);
  } catch (err) { next(err); }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(user);
  } catch (err) { next(err); }
};

export const registerUser = async (req, res, next) => {
  try {
    const { primer_nombre, primer_apellido, tipo_documento, numero_documento, correo, contrasena, id_rol } = req.body;

    // checks for unique constraints
    const existsEmail = await findUserByEmail(correo);
    if (existsEmail) return res.status(400).json({ message: "Correo ya registrado" });

    const existsDoc = await findUserByDocument(numero_documento);
    if (existsDoc) return res.status(400).json({ message: "Número de documento ya existe" });

    const hashed = await bcrypt.hash(contrasena, SALT_ROUNDS);

    const result = await createUser({
      primer_nombre, primer_apellido, tipo_documento, numero_documento, correo, contrasena: hashed, id_rol
    });

    res.status(201).json({ message: "Usuario creado", id: result.insertId });
  } catch (err) { next(err); }
};

export const loginUser = async (req, res, next) => {
  try {
    const { correo, contrasena } = req.body;
    const user = await findUserByEmail(correo);
    if (!user) return res.status(401).json({ message: "Credenciales inválidas" });

    const match = await bcrypt.compare(contrasena, user.contrasena);
    if (!match) return res.status(401).json({ message: "Credenciales inválidas" });

    // payload: id + role
    const payload = { id_usuario: user.id_usuario, id_rol: user.id_rol, correo: user.correo };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "8h" });

    // no mandar contrasena en respuesta
    const { contrasena: _, ...userSafe } = user;
    res.json({ message: "Login ok", token, user: userSafe });
  } catch (err) { next(err); }
};

export const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = { ...req.body };

    if (body.contrasena) {
      body.contrasena = await bcrypt.hash(body.contrasena, SALT_ROUNDS);
    }

    const affected = await updateUser(id, body);
    if (!affected) return res.status(404).json({ message: "Usuario no encontrado o sin cambios" });
    res.json({ message: "Usuario actualizado" });
  } catch (err) { next(err); }
};

export const removeUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const affected = await deleteUser(id);
    if (!affected) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado" });
  } catch (err) { next(err); }
};
