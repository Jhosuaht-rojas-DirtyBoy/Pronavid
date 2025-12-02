import db from "../config/db.js";

export const buscarSeguimiento = async (req, res) => {
    try {
        const { query } = req.query;

        if (!query || query.trim() === "") {
            return res.status(400).json({ message: "Debe enviar un valor de búsqueda" });
        }

        const sql = `
            SELECT 
                p.id_pedido,
                c.nombre_cliente,
                p.fecha_pedido,
                p.estado_pedido
            FROM pedido p
            INNER JOIN cliente c ON p.id_cliente = c.id_cliente
            WHERE c.nombre_cliente LIKE ? 
               OR c.identificacion LIKE ?;
        `;

        const values = [`%${query}%`, `%${query}%`];

        const [rows] = await db.query(sql, values);

        res.json(rows);

    } catch (err) {
        console.error("Error en la consulta:", err);
        res.status(500).json({ message: "Error en el servidor" });
    }
};
