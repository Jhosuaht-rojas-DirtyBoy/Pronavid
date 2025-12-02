import { Link } from "react-router-dom";

export default function HeaderDashboard({ rol, perfilLink }) {
    return (
        <header className="barra-superior">
            <div className="logo-area">
                <img src="/Logopronavid.png" className="logo" alt="Logo Pronavid" />
            </div>

            <div className="usuario-contenedor">
                <span>{rol}</span>
                <Link to={perfilLink} className="icono-usuario">👤</Link>
            </div>
        </header>
    );
}
