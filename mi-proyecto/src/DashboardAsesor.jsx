import "./styles/estilosdash.css";

function DashboardAsesor() {
  return (
    <>
      <header className="barra-superior">
        <div className="logo-contenedor">
          <img
            src="/assets/Logopronavid.png"
            alt="Logo Pronavid"
            className="logo"
          />
        </div>

        <div className="usuario-contenedor">
          <span className="texto-admin">Asesor</span>
          <span className="icono-usuario">👤</span>
        </div>
      </header>

      <div className="texto_inicio">
        <p className="instruccion">Haga click en lo que desee</p>
      </div>

      <section className="opciones">
        <button className="btn-nav">◀</button>

        <a href="#" className="btn-opcion">Registro de pedido</a>
        <a href="#" className="btn-opcion activo">Historial de clientes</a>
        <a href="#" className="btn-opcion">Reportes básicos</a>
        <a href="#" className="btn-opcion activo">Seguimiento de clientes</a>

        <button className="btn-nav">▶</button>
      </section>

      <div className="barra_media"></div>

      <div className="contenedor-imagen">
        <img
          src="/assets/Prdocuto(Cereales).webp"
          alt="Productos Pronavid"
          className="imagen-fondo"
        />
      </div>

      <footer className="barra-inferior">
        <a href="/" className="cerrar-sesion">Cerrar sesión</a>
      </footer>
    </>
  );
}

export default DashboardAsesor;
