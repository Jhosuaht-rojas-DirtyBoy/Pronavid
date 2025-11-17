import { useState } from "react";

export default function Productos({ productos, categoria, agregarCarrito }) {
  const [cantidades, setCantidades] = useState({});

  const cambiarCantidad = (index, valor) => {
    setCantidades(prev => ({
      ...prev,
      [index]: valor
    }));
  };

  return (
    <div id="productos" className="productos">
      {productos.map((p, i) => (
        <div className="card" key={i}>
          <img src={p.img} alt={p.nombre} />
          <h3>{p.nombre}</h3>
          <p className="precio">${p.precio.toLocaleString()}</p>

          <input
            type="number"
            min="1"
            value={cantidades[i] || 1}
            onChange={e => cambiarCantidad(i, parseInt(e.target.value))}
            className="cantidad"
          />

          <button
            className="agregar"
            onClick={() => agregarCarrito(categoria, i, cantidades[i] || 1)}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}
