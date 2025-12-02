import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Seguimiento.css";

export default function SeguimientoCliente() {
    const [query, setQuery] = useState("");
    const [fecha, setFecha] = useState("");
    const [resultados, setResultados] = useState([]);

    const buscar = async () => {
        if (!query.trim()) return;
        try {
            const response = await fetch(
                `http://localhost:3000/api/seguimiento/buscar?query=${query}&fecha=${fecha}`
            );
            const data = await response.json();
            setResultados(data);
        } catch (error) {
            console.error("Error consultando:", error);
        }
    };

    return (
        <div className="container py-4">

            <header className="sc-header">
    <img src="../src/images/Logopronavid.png" alt="Logo Pronavid" className="sc-logo" />
    <h1 className="sc-title">
        Seguimiento de Clientes 
        <span className="sc-badge-count"></span>
    </h1>
</header>


            {/* Tarjeta de búsqueda */}
            <div className="card shadow-sm mb-4 animate__animated animate__fadeInUp">
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Buscar Cliente por ID o Nombre"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <input
                                type="date"
                                className="form-control form-control-lg"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3 d-grid">
                            <button className="btn btn-primary btn-lg" onClick={buscar}>
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabla de resultados */}
            <div className="card shadow-sm animate__animated animate__fadeInUp">
                <div className="table-responsive">
                    <table className="table table-hover mb-0 align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Nombre Completo</th>
                                <th>Última Compra</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultados.map((r) => (
                                <tr key={r.id_pedido}>
                                    <td>{r.id_pedido}</td>
                                    <td>{r.nombre_cliente}</td>
                                    <td>{r.fecha_pedido?.split("T")[0]}</td>
                                    <td>
                                        <span className={`badge ${
                                            r.estado_pedido === "Comprador Frecuente" ? "bg-success" :
                                            r.estado_pedido === "Lead Nuevo" ? "bg-warning text-dark" :
                                            "bg-danger"
                                        }`}>
                                            {r.estado_pedido}
                                        </span>
                                    </td>
                                    <td className="d-flex gap-2">
                                        <button className="btn btn-sm btn-outline-primary">👁️</button>
                                        <button className="btn btn-sm btn-outline-success">📞</button>
                                        <button className="btn btn-sm btn-outline-secondary">📝</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
