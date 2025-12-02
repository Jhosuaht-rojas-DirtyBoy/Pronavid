import { Link } from "react-router-dom";

export default function HeaderDashboard({ rol, perfilLink }) {
    return (
        <header className="barra-superior">
            <div className="logo-area">
                {/* Asegura que el logo tenga un tamaño adecuado para la barra lateral */}
                <img src="../src/images/Logopronavid.png" className="logo" alt="Logo Pronavid" />
            </div>

            {/* Este contenedor de usuario ahora puede funcionar como un encabezado de la barra lateral */}
            <div className="usuario-contenedor">
                <Link to={perfilLink} className="icono-usuario">👤</Link>
                {/* Mostramos el rol debajo del icono para consistencia con el diseño */}
                <span className="user-role">{rol}</span> 
            </div>

            {/* AÑADIMOS LA NAVEGACIÓN PRINCIPAL */}
            <nav className="sidebar-nav">
                
                <Link to="/clientes" className="nav-item">
                    <span className="icon">👥</span> Leads & Clientes
                </Link>
                <Link to="/Pedidos" className="nav-item">
                    <span className="icon">📝</span> Cotizaciones/Órdenes
                </Link>
                <Link to="/Catalogo" className="nav-item">
                    <span className="icon">📦</span> Productos
                </Link>
                <Link to="/Seguimiento" className="nav-item">
                    <span className="icon">📈</span> Seguimiento
                </Link>
                <Link to="/configuracion" className="nav-item">
                    <span className="icon">⚙️</span> Configuración
                </Link>
            </nav>
            {/* Si es necesario, podemos añadir un enlace de Cerrar Sesión fijo al final */}
            {/* <div className="sidebar-footer">
                <button className="logout-btn-sidebar">Cerrar Sesión</button>
            </div> */}

        </header>
    );
}