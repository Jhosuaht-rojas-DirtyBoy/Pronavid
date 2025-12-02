import "../styles/estilosdash2.css";
import HeaderDashboard from "../components/HeaderDashboard";
import FooterDashboard from "../components/FooterDashboard";

export default function DashboardAsesor() {
  return (
    <div className="layout-asesor"> 
      
      {/* 1. BARRA LATERAL */}
      <HeaderDashboard rol="Asesor de Ventas" perfilLink="/perfilasesor" />
      
      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="main-content">
        
        {/* Barra superior de navegación */}
        <div className="top-bar">
          <input
            type="search"
            placeholder="Buscar Clientes, Cotizaciones, Productos..."
            className="search-bar"
          />
          <div className="profile-actions">
            <span className="notification-icon">🔔<span className="badge">3</span></span>
            <span className="user-name">Hola, Juan Pérez</span>
          </div>
        </div>

        {/* Dashboard Title */}
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Revisa tu actividad y próximos pasos.</p>
        </div>

        {/* Contenedor de Widgets */}
        <div className="widgets-grid">
          
          {/* Widget 1: Rendimiento Hoy */}
          <div className="widget rendimiento-widget">
            <h3>Tu Rendimiento Hoy</h3>
            <p className="widget-subtitle">Resumen de ventas y clientes atendidos</p>
            <ul>
              <li>Ventas realizadas: <strong>15</strong></li>
              <li>Ingresos generados: <strong>$3.200.000</strong></li>
              <li>Clientes contactados: <strong>25</strong></li>
              <li>Seguimientos pendientes: <strong>4</strong></li>
            </ul>
            <div className="widget-footer">
              <span>Objetivo diario: 20 ventas</span>
            </div>
          </div>

          {/* Widget 2: Tareas Pendientes */}
          <div className="widget tareas-widget">
            <h3>Tareas Pendientes</h3>
            <p className="widget-subtitle">Lista de acciones importantes por hacer</p>
            <ol>
              <li>Enviar cotización a Cliente XYZ</li>
              <li>Revisar inventario de productos destacados</li>
              <li>Actualizar información del cliente ABC</li>
              <li>Programar reunión semanal de equipo</li>
            </ol>
            <div className="widget-footer">
              <span>Total tareas: 4</span>
            </div>
          </div>
          
        

          {/* Widget 4: Actividad Semanal */}
          <div className="widget actividad-widget">
            <h3>Actividad de Ventas Semanal</h3>
            <p className="widget-subtitle">Gráfico con el rendimiento diario</p>
            <div className="chart-placeholder">
              [Gráfico de Líneas con ventas por día]
            </div>
            <div className="widget-footer">
              <span>Promedio semanal: 12 ventas/día</span>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <FooterDashboard /> 
      </div>
    </div>
  );
}
