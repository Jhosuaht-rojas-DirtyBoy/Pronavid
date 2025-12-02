import { Link } from "react-router-dom";

export default function Tarjeta({ to, icono, titulo, descripcion }) {
    return (
        <Link to={to} className="tarjeta">
            <span className="icono">{icono}</span>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
        </Link>
    );
}
