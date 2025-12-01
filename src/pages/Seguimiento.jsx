import "../styles/Seguimiento.css";

export default function SeguimientoCliente() {
    return (
        <div className="sc-page">
            {/* Encabezado */}
            <header className="sc-header">
                <img src="Logopronavid.png" alt="Pronavid" className="sc-logo" />
            </header>

            <div className="sc-back-btn">&#x21A9;</div>

            {/* Formulario */}
            <section className="sc-form">
                <div className="sc-row">
                    <div className="sc-field">
                        <label>ID del cliente</label>
                        <input type="text" />
                    </div>

                    <div className="sc-field">
                        <label>Cliente</label>
                        <input type="text" />
                    </div>

                    <div className="sc-field">
                        <label>Fecha</label>
                        <input type="date" />
                    </div>
                </div>

                <div className="sc-row">
                    <div className="sc-field">
                        <label>Nombre cliente</label>
                        <input type="text" />
                    </div>

                    <a href="/seguimientodeclienteGuardado">
                        <button className="sc-btn-search">BUSCAR</button>
                    </a>
                </div>
            </section>

            {/* Sección inferior */}
            <section className="sc-lower-section">
                <div className="sc-blur-bg"></div>

                <div className="sc-table-top">
                    <div className="sc-table-header">
                        <span>ID</span>
                        <span>Cliente</span>
                        <span>Fecha</span>
                        <span>Nombre cliente</span>
                        <span>Estado actual</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
