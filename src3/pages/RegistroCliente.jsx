import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/registroc.css"; // Tu CSS original

export default function RegistroCliente() {
  const navigate = useNavigate();
  const [mesSeleccionado, setMesSeleccionado] = useState("");

  // Datos de los clientes
  const clientes = [
    { nombre: "Distrifruver", granola: 20, choquy: 15, galleta: 25 },
    { nombre: "Mercauno", granola: 20, choquy: 20, galleta: 15 },
    { nombre: "Deuno", granola: 30, choquy: 25, galleta: 20 },
    { nombre: "Granisero", granola: 40, choquy: 30, galleta: 30 },
    { nombre: "Agromanisero", granola: 35, choquy: 20, galleta: 30 },
  ];

  return (
    <div>
      {/* Header */}
      <header className="encabezado">
        <img src="Logopronavid.png" alt="Logo Pronavid" className="logo" />
      </header>

      {/* Botón volver */}
      <button className="btn-volver" onClick={() => navigate("/historial")}>
        ⤺
      </button>

      {/* Selector principal */}
      <div className="selector">
        <select onChange={(e) => e.target.value && navigate(e.target.value)} defaultValue="">
          <option value="">Seleccionar</option>
          <option value="/registro-cliente">Registro de clientes</option>
          <option value="/cliente-frecuente">Cliente más frecuente</option>
          <option value="/mas-vendido">Más comprado</option>
        </select>
      </div>

      {/* Selector de mes */}
      <div className="dropdown-container right">
        <select
          className="custom-select month-select"
          value={mesSeleccionado}
          onChange={(e) => setMesSeleccionado(e.target.value)}
        >
          <option value="" disabled>
            Mes
          </option>
          <option>Enero</option>
          <option>Febrero</option>
          <option>Marzo</option>
          <option>Abril</option>
          <option>Mayo</option>
        </select>
      </div>

      {/* Tabla */}
      <section className="tabla-contenedor">
        <table>
          <thead>
            <tr>
              <th>Nombres de la empresa</th>
              <th>Granola superior</th>
              <th>Choquy Arroz</th>
              <th>Galleta 60g</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c, index) => (
              <tr key={index}>
                <td>{c.nombre}</td>
                <td>{c.granola}</td>
                <td>{c.choquy}</td>
                <td>{c.galleta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
