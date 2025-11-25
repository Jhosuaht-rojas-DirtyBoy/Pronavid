import "../styles/estilosdash.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <header className="barra-superior">
        <div className="logo-area">
          <img src="/Logopronavid.png" className="logo" alt="Logo Pronavid" />
        </div>

        <div className="usuario-contenedor">
          <span>Administrador</span>
          <Link to="/perfiladmin" className="icono-usuario">👤</Link>
        </div>
      </header>

      <section className="titulo-panel">
        <h2>Panel Administrativo</h2>
        <p>Seleccione una opción para continuar</p>
      </section>

      <main className="dashboard-panel">

        <Link to="/registropedidos" className="tarjeta">
          <span className="icono">📦</span>
          <h3>Pedidos</h3>
          <p>Registrar nuevos pedidos</p>
        </Link>

        <Link to="/historial" className="tarjeta">
          <span className="icono">👥</span>
          <h3>Clientes</h3>
          <p>Historial de registros</p>
        </Link>

        <Link to="/reportes" className="tarjeta">
          <span className="icono">📊</span>
          <h3>Reportes</h3>
          <p>Resumen estadístico</p>
        </Link>

        <Link to="/seguimiento" className="tarjeta">
          <span className="icono">📈</span>
          <h3>Seguimiento</h3>
          <p>Control y gestión</p>
        </Link>

        <Link to="/catalogo" className="tarjeta">
          <span className="icono">🛒</span>
          <h3>Catálogo</h3>
          <p>Productos disponibles</p>
        </Link>

      </main>

      <footer className="barra-inferior">
        <Link to="/" className="cerrar-sesion">Cerrar sesión</Link>
      </footer>
    </>
  );
}
