import { Link } from "react-router-dom";

export default function Tarjeta({ to, icono, titulo, descripcion, datoPrincipal }) {
    return (
        <div className="tarjeta" onClick={() => window.location.href = to}>
            <div className="icono">{icono}</div>
            <h3>{titulo}</h3>
            {datoPrincipal && <div className="dato-principal">{datoPrincipal}</div>}
            <p>{descripcion}</p>
        </div>
    );
}
