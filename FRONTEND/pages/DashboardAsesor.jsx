import "../styles/estilosdash.css";
import HeaderDashboard from "../components/HeaderDashboard";
import FooterDashboard from "../components/FooterDashboard";
import Tarjeta from "../components/Tarjeta";

export default function DashboardAsesor() {
    return (
        <>
            <HeaderDashboard rol="Asesor" perfilLink="/perfilasesor" />

            <section className="titulo-panel">
                <h2>Panel Asesor</h2>
                <p>Seleccione una opción para continuar</p>
            </section>

            <main className="dashboard-panel">
                <Tarjeta to="/pedidos" icono="📦" titulo="Pedidos / Cotizaciones" descripcion="Registrar y gestionar pedidos" />
                <Tarjeta to="/clientes" icono="👥" titulo="Clientes" descripcion="Registrar nuevos clientes" />
                <Tarjeta to="/seguimiento" icono="📈" titulo="Seguimiento" descripcion="Control y gestión de clientes y compras" />
            </main>

            <FooterDashboard />
        </>
    );
}
