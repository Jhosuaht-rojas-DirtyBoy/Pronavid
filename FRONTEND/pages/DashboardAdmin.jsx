import "../styles/estilosdash.css";
import HeaderDashboard from "../components/HeaderDashboard";
import FooterDashboard from "../components/FooterDashboard";
import Tarjeta from "../components/Tarjeta";

export default function DashboardAdmin() {
    return (
        <>
            <HeaderDashboard rol="Administrador" perfilLink="/perfiladmin" />

            <section className="titulo-panel">
                <h2>Panel Administrativo</h2>
                <p>Seleccione una opción para continuar</p>
            </section>

            <main className="dashboard-panel">
                <Tarjeta to="/catalogo" icono="🛒" titulo="Catálogo" descripcion="Editar productos disponibles" />
                <Tarjeta to="/metricas" icono="📊" titulo="Métricas" descripcion="Ver estadísticas del sistema" />
                <Tarjeta to="/seguimiento" icono="📈" titulo="Seguimiento" descripcion="Control y gestión de clientes y compras" />
            </main>

            <FooterDashboard />
        </>
    );
}
