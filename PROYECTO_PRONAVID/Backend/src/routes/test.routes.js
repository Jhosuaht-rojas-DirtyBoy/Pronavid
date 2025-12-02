import { Router } from "express";
import pool from "../config/db.js";

const router = Router();

// Ruta para probar conexión a la base de datos
router.get("/test-db", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM rol");

        console.log("Consulta exitosa, filas obtenidas:", rows);

        res.json({
            status: "ok",
            data: rows
        });
    } catch (error) {
        console.error("Error en /test-db:", error);

        res.status(500).json({
            status: "error",
            message: "Error consultando la base de datos",
            error: error.message
        });
    }
});

export default router;
