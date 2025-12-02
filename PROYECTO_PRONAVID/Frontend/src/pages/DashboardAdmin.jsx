import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/estilosdash.css";

// Tarjeta tipo widget dentro del header
function Tarjeta({ to, icono, titulo, descripcion }) {
  return (
    <Link to={to} className="tarjeta-header">
      <div className="icono">{icono}</div>
      <div>
        <h6>{titulo}</h6>
        <small>{descripcion}</small>
      </div>
    </Link>
  );
}

// Header azul con logo, perfil y notificaciones
function HeaderDashboard({ rol, perfilLink }) {
  const [notificaciones] = useState(3);

  return (
    <header className="barra-superior">
      <div className="logo-area">
        <img src="../src/images/Logopronavid.png" className="logo" alt="Logo Pronavid" />
      </div>

      <div className="usuario-contenedor">
        <span>{rol}</span>
        <Link to={perfilLink} className="icono-usuario">👤</Link>
      </div>

      {/* Tarjetas dentro del header */}
      <div className="header-tarjetas">
        <Tarjeta to="/catalogo" icono="🛒" titulo="Catálogo" descripcion="Editar productos" />
        <Tarjeta to="/ReporteBasico" icono="📊" titulo="Métricas" descripcion="Ver estadísticas" />
        <Tarjeta to="/seguimiento" icono="📈" titulo="Seguimiento" descripcion="Control clientes" />
      </div>
    </header>
  );
}

// Footer con botón cerrar sesión
function FooterDashboard() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <footer className="barra-inferior">
      <button onClick={handleLogout} className="cerrar-sesion">Cerrar sesión</button>
    </footer>
  );
}

// Componente principal
export default function DashboardAdmin() {
  return (
    <>
      <HeaderDashboard rol="Administrador" perfilLink="/perfiladmin" />

      <main className="main-content">
        {/* Título */}
        <div className="titulo-panel">
          <h2>Panel Administrativo</h2>
          <p>Seleccione una opción para continuar</p>
          <hr />
        </div>

        {/* Barra de búsqueda */}
        <div className="busqueda-global mb-4">
          <input type="text" className="form-control" placeholder="Buscar productos, clientes, métricas..." />
        </div>

        {/* KPIs */}
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h6 className="text-muted">Ventas</h6>
              <h2>$12.4M</h2>
              <div className="progress mt-2" style={{ height: "8px" }}>
                <div className="progress-bar bg-primary" style={{ width: "75%" }}></div>
              </div>
              <small className="text-muted">75% del objetivo mensual</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h6 className="text-muted">Usuarios activos</h6>
              <h2>2,438</h2>
              <div className="progress mt-2" style={{ height: "8px" }}>
                <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
              </div>
              <small className="text-muted">60% del objetivo mensual</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h6 className="text-muted">Conversiones</h6>
              <h2>4.9%</h2>
              <div className="progress mt-2" style={{ height: "8px" }}>
                <div className="progress-bar bg-warning" style={{ width: "49%" }}></div>
              </div>
              <small className="text-muted">49% del objetivo mensual</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h6 className="text-muted">Nuevos clientes</h6>
              <h2>321</h2>
              <div className="progress mt-2" style={{ height: "8px" }}>
                <div className="progress-bar bg-danger" style={{ width: "32%" }}></div>
              </div>
              <small className="text-muted">32% del objetivo mensual</small>
            </div>
          </div>
        </div>

        {/* Gráficas */}
        <div className="row g-4 mt-4">
          <div className="col-lg-6">
            <div className="card p-3 shadow-sm">
              <h5 className="mb-3">Distribución de productos</h5>
              <div className="mb-2">Granola <span className="float-end">35%</span></div>
              <div className="progress mb-3" style={{ height: "12px" }}>
                <div className="progress-bar bg-primary" style={{ width: "35%" }}></div>
              </div>
              <div className="mb-2">Cereales <span className="float-end">25%</span></div>
              <div className="progress mb-3" style={{ height: "12px" }}>
                <div className="progress-bar bg-success" style={{ width: "25%" }}></div>
              </div>
              <div className="mb-2">Galletas <span className="float-end">25%</span></div>
              <div className="progress mb-3" style={{ height: "12px" }}>
                <div className="progress-bar bg-warning" style={{ width: "25%" }}></div>
              </div>
              <div className="mb-2">Turrones <span className="float-end">15%</span></div>
              <div className="progress mb-3" style={{ height: "12px" }}>
                <div className="progress-bar bg-danger" style={{ width: "15%" }}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card p-3 shadow-sm text-center">
              <h5>Distribución de productos (Donut)</h5>
              <div className="position-relative mx-auto" style={{ width: "150px", height: "150px" }}>
                <div style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: "conic-gradient(#38bdf8 0 35%, #818cf8 0 60%, #f87171 0 85%, #fbbf24 0 100%)"
                }}></div>
                <div style={{
                  width: "80px",
                  height: "80px",
                  background: "#fff",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterDashboard />
    </>
  );
}
