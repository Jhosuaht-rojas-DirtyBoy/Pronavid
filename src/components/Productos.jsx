import { useState } from "react";

export default function Productos({ productos = [], categoria, agregarCarrito }) {
  const [cantidades, setCantidades] = useState({});

  const cambiarCantidad = (id, valor) => {
    setCantidades(prev => ({
      ...prev,
      [id]: valor
    }));
  };

  const handleAgregar = (id) => {
    const cantidad = cantidades[id] || 1;
    agregarCarrito(categoria, id, cantidad);
  };

  if (!productos || productos.length === 0) {
    return (
      <div className="productos-container">
        <p style={{ textAlign: "center", marginTop: "2rem", color: "#666" }}>
          No hay productos en esta categoría.
        </p>
      </div>
    );
  }

  return (
    <div className="productos-container">
      <div className="productos-grid">
        {productos.map((p) => (
          <div className="producto-card" key={p.id}>
            <img src={p.img} alt={p.nombre} className="producto-img" />
            <h3 className="producto-nombre">{p.nombre}</h3>
            <p className="producto-precio">${p.precio.toLocaleString()}</p>

            <input
              type="number"
              min="1"
              value={cantidades[p.id] || 1}
              onChange={e => cambiarCantidad(p.id, parseInt(e.target.value) || 1)}
              className="cantidad-input"
            />

            <button
              className="btn-agregar"
              onClick={() => handleAgregar(p.id)}
            >
              🛒 Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
