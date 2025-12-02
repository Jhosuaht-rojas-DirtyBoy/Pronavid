// src/models/users.model.js
import pool from "../db.js";

export const findAllUsers = async () => {
  const [rows] = await pool.query(
    `SELECT u.id_usuario, u.primer_nombre, u.primer_apellido, u.tipo_documento, u.numero_documento, u.correo, u.estado, r.id_rol, r.nombre_rol
     FROM usuario u
     JOIN rol r ON u.id_rol = r.id_rol`
  );
  return rows;
};

export const findUserById = async (id) => {
  const [rows] = await pool.query(
    `SELECT id_usuario, primer_nombre, primer_apellido, tipo_documento, numero_documento, correo, estado, id_rol
     FROM usuario WHERE id_usuario = ?`,
    [id]
  );
  return rows[0];
};

export const findUserByEmail = async (email) => {
  const [rows] = await pool.query(
    `SELECT * FROM usuario WHERE correo = ? LIMIT 1`,
    [email]
  );
  return rows[0];
};

export const findUserByDocument = async (numero_documento) => {
  const [rows] = await pool.query(
    `SELECT * FROM usuario WHERE numero_documento = ? LIMIT 1`,
    [numero_documento]
  );
  return rows[0];
};

export const createUser = async (user) => {
  const { primer_nombre, primer_apellido, tipo_documento, numero_documento, correo, contrasena, id_rol } = user;
  const [result] = await pool.query(
    `INSERT INTO usuario (primer_nombre, primer_apellido, tipo_documento, numero_documento, correo, contrasena, id_rol)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [primer_nombre, primer_apellido, tipo_documento, numero_documento, correo, contrasena, id_rol]
  );
  return { insertId: result.insertId };
};

export const updateUser = async (id, user) => {
  // construir dinámicamente campos permitidos
  const fields = [];
  const values = [];

  const allowed = ["primer_nombre","primer_apellido","tipo_documento","numero_documento","correo","contrasena","estado","id_rol"];
  for (const key of allowed) {
    if (key in user) {
      fields.push(`${key} = ?`);
      values.push(user[key]);
    }
  }
  if (fields.length === 0) return null;

  values.push(id); // para WHERE
  const sql = `UPDATE usuario SET ${fields.join(", ")} WHERE id_usuario = ?`;
  const [result] = await pool.query(sql, values);
  return result.affectedRows;
};

export const deleteUser = async (id) => {
  const [result] = await pool.query(`DELETE FROM usuario WHERE id_usuario = ?`, [id]);
  return result.affectedRows;
};
