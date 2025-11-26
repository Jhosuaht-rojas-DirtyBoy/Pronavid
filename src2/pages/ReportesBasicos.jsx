import "../styles/ReportesBasicos.css";
import { useState } from "react";

export default function Reportes() {
    const [seccion, setSeccion] = useState("historial");

    return (
        <>
            <header className="reporte-header">
                📊 Reportes Básicos Pronavid
            </header>

            <nav className="reporte-nav">
                <button onClick={() => setSeccion("historial")}>Historial</button>
                <button onClick={() => setSeccion("vendido")}>Más Vendido</button>
                <button onClick={() => setSeccion("frecuente")}>Cliente Frecuente</button>
                <button onClick={() => setSeccion("resumen")}>Resumen</button>
            </nav>

            {seccion === "historial" && (
                <section className="active">
                    <h2>📋 Historial de Ventas</h2>
                    <div className="panel">
                        <table>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Cliente</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01/11/2025</td>
                                    <td>Juan Pérez</td>
                                    <td>Granola Familiar</td>
                                    <td>3</td>
                                    <td>$30.000</td>
                                </tr>
                                <tr>
                                    <td>02/11/2025</td>
                                    <td>María López</td>
                                    <td>Turrón Tradicional</td>
                                    <td>5</td>
                                    <td>$25.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            {seccion === "vendido" && (
                <section>
                    <h2>🔥 Producto Más Vendido</h2>
                    <div className="panel">
                        <div className="tarjetas">
                            <div className="card">
                                <h3>Granola Familiar</h3>
                                <strong>120 unidades</strong>
                            </div>
                            <div className="card">
                                <h3>Ingresos</h3>
                                <strong>$1.200.000</strong>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}