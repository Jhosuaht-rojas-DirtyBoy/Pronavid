import { useState } from "react";

export default function Pedidos({ productos = [], categoria, agregarCarrito }) {
  const [cantidades, setCantidades] = useState({});

  const cambiarCantidad = (id, valor) => {
    setCantidades(prev => ({
      ...prev,
      [id]: valor
    }));
  };

  const handleAgregar = (producto) => {
    const cantidad = cantidades[producto.id] || 1;

    agregarCarrito(
      categoria,
      producto.id,
      cantidad,
    );
  };

  if (!productos || productos.length === 0) {
    return (
      <div className="pedidos-container">
        <p style={{ textAlign: "center", marginTop: "2rem", color: "#666" }}>
          No hay productos disponibles para pedidos.
        </p>
      </div>
    );
  }

  return (
    <div className="pedidos-container">
      <h2>Realizar Pedido</h2>

      <div className="pedidos-grid">
        {productos.map((producto) => (
          <div className="pedido-item" key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio.toLocaleString()}</p>

            <input
              type="number"
              min="1"
              value={cantidades[producto.id] || 1}
              onChange={(e) =>
                cambiarCantidad(producto.id, parseInt(e.target.value) || 1)
              }
            />

            <button onClick={() => handleAgregar(producto)}>
              Agregar al pedido
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
