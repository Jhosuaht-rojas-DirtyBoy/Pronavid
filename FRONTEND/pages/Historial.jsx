import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Historial.css";

const HistorialProductos = () => {
  const navigate = useNavigate();

  const historial = [
    { mes: "Enero", granola: 20, choquy: 15, galleta: 25, cliente: "Distrifruver" },
    { mes: "Febrero", granola: 20, choquy: 20, galleta: 15, cliente: "Mercauno" },
    { mes: "Marzo", granola: 30, choquy: 25, galleta: 20, cliente: "Deuno" },
    { mes: "Abril", granola: 40, choquy: 30, galleta: 30, cliente: "Granisero" },
    { mes: "Mayo", granola: 35, choquy: 20, galleta: 30, cliente: "Agromanisero" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      
      {/* Header */}
      <header className="flex justify-center mb-6">
        <img src="/Logopronavid.png" alt="Logo" className="w-40" />
      </header>

      {/* Botón Volver */}
      <button
        onClick={() => navigate("/dashboard")}
        className="text-3xl absolute left-4 top-4 hover:scale-110 transition"
      >
        ⤺
      </button>

      {/* Selector */}
      <div className="flex justify-center mb-6">
        <select
          onChange={(e) => e.target.value && navigate(e.target.value)}
          className="p-2 bg-white rounded border shadow"
        >
          <option value="">Seleccionar</option>
          <option value="/mas-vendido">Más vendido</option>
          <option value="/frecuente">Cliente más frecuente</option>
          <option value="/registro">Registro de cliente</option>
        </select>
      </div>

      {/* Tabla */}
      <section className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200">
              <th rowSpan="2" className="p-3 border">Mes</th>
              <th colSpan="3" className="p-3 border">Productos existentes</th>
              <th className="p-3 border">Clientes que compraron</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="p-2 border">Granola superior</th>
              <th className="p-2 border">Choquy Arroz</th>
              <th className="p-2 border">Galleta 60g</th>
              <th className="p-2 border">Nombres</th>
            </tr>
          </thead>

          <tbody>
            {historial.map((fila, index) => (
              <tr key={index} className="text-center hover:bg-gray-50">
                <td className="p-2 border">{fila.mes}</td>
                <td className="p-2 border">{fila.granola}</td>
                <td className="p-2 border">{fila.choquy}</td>
                <td className="p-2 border">{fila.galleta}</td>
                <td className="p-2 border">{fila.cliente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default HistorialProductos;
