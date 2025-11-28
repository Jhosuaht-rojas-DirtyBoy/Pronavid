import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/masvendido.css"; // Tu CSS original

export default function MasVendido() {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="encabezado">
        <img src="Logopronavid.png" alt="Logo Pronavid" className="logo" />
      </header>

      <main>
        <div className="selector-container">
          {/* Botón volver */}
          <button className="btn-volver" onClick={() => navigate("/reporte-basico")}>
            ⤺
          </button>

          {/* Selector */}
          <div className="selector">
            <select onChange={handleSelectChange} defaultValue="">
              <option value="">Seleccionar</option>
              <option value="/frecuente">Cliente más frecuente</option>
              <option value="/registro-cliente">Registro de clientes</option>
              <option value="/mas-vendido">Más comprado</option>
            </select>
          </div>
        </div>

        <section className="contenido">
          <div className="recuadro">
            <h2>Productos vendidos</h2>
            <table>
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Granola superior</th>
                  <th>Choquy Arroz</th>
                  <th>Galleta 60g</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enero</td>
                  <td>10</td>
                  <td>15</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Febrero</td>
                  <td>25</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Marzo</td>
                  <td>25</td>
                  <td>20</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Abril</td>
                  <td>5</td>
                  <td>20</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Mayo</td>
                  <td>30</td>
                  <td>20</td>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="recuadro">
            <h2>Total</h2>
            <table>
              <tbody>
                <tr>
                  <td>Granola superior:</td>
                  <td>95</td>
                </tr>
                <tr>
                  <td>Galleta 60g:</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>Choquy Arroz:</td>
                  <td>70</td>
                </tr>
                <tr className="titulo">
                  <td colSpan={2}>Más vendido</td>
                </tr>
                <tr>
                  <td>Granola superior:</td>
                  <td>95</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
