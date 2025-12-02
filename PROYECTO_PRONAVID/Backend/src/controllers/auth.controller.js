import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { primer_nombre, primer_apellido, tipo_documento, numero_documento, correo, contrasena, id_rol } = req.body;

    try {
        // Validar existencia del correo
        const [user] = await pool.query(
            "SELECT * FROM usuario WHERE correo = ?",
            [correo]
        );

        if (user.length > 0) {
            return res.status(400).json({ error: "El correo ya está registrado" });
        }

        // Encriptar contraseña
        const hashedPass = await bcrypt.hash(contrasena, 10);

        // Guardar usuario
        await pool.query(
            `INSERT INTO usuario 
            (primer_nombre, primer_apellido, tipo_documento, numero_documento, correo, contrasena, id_rol) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [primer_nombre, primer_apellido, tipo_documento, numero_documento, correo, hashedPass, id_rol]
        );

        res.json({ message: "Usuario registrado correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        const [user] = await pool.query(
            "SELECT * FROM usuario WHERE correo = ?",
            [correo]
        );

        if (user.length === 0) {
            return res.status(400).json({ error: "Correo o contraseña incorrectos" });
        }

        // Comparar con la columna correcta
        const valid = await bcrypt.compare(contrasena, user[0].contrasena);


        if (!valid) {
            return res.status(400).json({ error: "Correo o contraseña incorrectos" });
        }

        // Crear token
        const token = jwt.sign(
            {
                id_usuario: user[0].id_usuario,
                id_rol: user[0].id_rol
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login exitoso",
            token,
            user: {  // ahora sí coincide con el frontend
                id_usuario: user[0].id_usuario,
                primer_nombre: user[0].primer_nombre,
                primer_apellido: user[0].primer_apellido,
                correo: user[0].correo,
                id_rol: user[0].id_rol
        }
});


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
