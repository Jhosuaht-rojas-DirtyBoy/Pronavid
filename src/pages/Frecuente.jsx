import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/frecuente.css"; // Tu CSS original

export default function Frecuente() {
  const navigate = useNavigate();

  // Datos de la tabla
  const clientes = [
    { nombre: "Distrifruver", cantidad: 39, producto: "Granola superior" },
    { nombre: "Mercauno", cantidad: 32, producto: "Galleta 60g" },
    { nombre: "Deuno", cantidad: 45, producto: "Choquy Arroz" },
    { nombre: "Granisero", cantidad: 13, producto: "Choquy Arroz" },
    { nombre: "Agromanisero", cantidad: 35, producto: "Galleta 60g" },
  ];

  // Calcular el cliente más frecuente
  const clienteMasFrecuente = clientes.reduce((max, cliente) =>
    cliente.cantidad > max.cantidad ? cliente : max
  , clientes[0]);

  return (
    <div>
      {/* Header */}
      <header className="encabezado">
        <img src="Logopronavid.png" alt="Logo Pronavid" className="logo" />
      </header>

      {/* Botón volver */}
      <button className="btn-volver" onClick={() => navigate("/reporte-basico")}>
        ⤺
      </button>

      {/* Selector */}
      <div className="selector">
        <select onChange={(e) => e.target.value && navigate(e.target.value)} defaultValue="">
          <option value="">Seleccionar</option>
          <option value="/cliente-frecuente">Cliente más frecuente</option>
          <option value="/registro-cliente">Registro de clientes</option>
          <option value="/mas-vendido">Más comprado</option>
        </select>
      </div>

      {/* Tabla */}
      <section className="tabla-contenedor">
        <table>
          <thead>
            <tr>
              <th>Clientes que compraron</th>
              <th>Cantidad de productos comprados</th>
              <th>Producto más comprado</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c, index) => (
              <tr key={index}>
                <td>{c.nombre}</td>
                <td>{c.cantidad}</td>
                <td>{c.producto}</td>
              </tr>
            ))}
            <tr className="resultado">
              <td colSpan={3}>
                Resultado: Cliente más frecuente es <strong>{clienteMasFrecuente.nombre}</strong> con un total de <strong>{clienteMasFrecuente.cantidad}</strong> productos comprados
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
