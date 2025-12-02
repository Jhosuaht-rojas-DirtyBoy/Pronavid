const express = require("express");
const router = express.Router();
const db = require("../db"); // este es tu pool de conexión

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT 
          MONTHNAME(v.fecha_venta) AS mes,
          p.nombre_producto AS producto,
          dv.cantidad,
          c.nombre_cliente AS cliente,
          v.fecha_venta
      FROM venta v
      JOIN detalle_venta dv ON v.id_venta = dv.id_venta
      JOIN producto p ON dv.id_producto = p.id_producto
      JOIN pedido pe ON v.id_pedido = pe.id_pedido
      JOIN cliente c ON pe.id_cliente = c.id_cliente
      ORDER BY v.fecha_venta DESC;
    `);

    res.json(rows);

  } catch (e) {
    console.error("❌ Error en historial:", e);
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
