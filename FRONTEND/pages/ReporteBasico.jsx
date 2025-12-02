import { useNavigate } from "react-router-dom";
import "../styles/reportebasico.css";

export default function ReporteBasico() {
  const navigate = useNavigate();

  const data = [
    { mes: "Enero", granola: 20, choquy: 15, galleta: 25, cliente: "Distrifruver" },
    { mes: "Febrero", granola: 20, choquy: 20, galleta: 15, cliente: "Mercauno" },
    { mes: "Marzo", granola: 30, choquy: 25, galleta: 20, cliente: "Deuno" },
    { mes: "Abril", granola: 40, choquy: 30, galleta: 30, cliente: "Granisero" },
    { mes: "Mayo", granola: 35, choquy: 20, galleta: 30, cliente: "Agromanisero" },
  ];

  const cambiarPagina = (ruta) => {
    if (ruta !== "") navigate(ruta);
  };

  return (
    <div className="reporte-page">

      {/* Header */}
      <header className="encabezado">
        <img src="/Logopronavid.png" alt="Logo Pronavid" className="logo" />
      </header>

      {/* Botón volver */}
      <button className="btn-volver" onClick={() => navigate("/dashboard")}>
        ⤺
      </button>

      {/* Selector */}
      <div className="selector">
        <select onChange={(e) => cambiarPagina(e.target.value)}>
          <option value="">Seleccionar</option>
          <option value="/mas-vendido">Más vendido</option>
          <option value="/cliente-frecuente">Cliente más frecuente</option>
          <option value="/registro-cliente">Registro de cliente</option>
        </select>
      </div>

      {/* Tabla */}
      <section className="tabla-contenedor">
        <table className="tabla">
          <thead>
            <tr>
              <th rowSpan="2">Mes</th>
              <th colSpan="3">Productos existentes</th>
              <th>Clientes que compraron</th>
            </tr>

            <tr>
              <th>Granola superior</th>
              <th>Choquy Arroz</th>
              <th>Galleta 60g</th>
              <th>Nombres</th>
            </tr>
          </thead>

          <tbody>
            {data.map((fila, index) => (
              <tr key={index}>
                <td>{fila.mes}</td>
                <td>{fila.granola}</td>
                <td>{fila.choquy}</td>
                <td>{fila.galleta}</td>
                <td>{fila.cliente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  );
}
