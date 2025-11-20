export default function SeguimientoclienteDetalles() {
  return (
    <div>

      {/* Encabezado */}
      <header>
        <img
          src="/imagenes/Logopronavid.png"
          alt="Logo PRONAVID"
          className="logo"
        />
      </header>

      {/* Sección principal */}
      <section className="contenedor">
        <div className="fondo-difuminado"></div>

        <div className="tabla">

          {/* Encabezado de la tabla */}
          <div className="encabezado-tabla">
            <span>ID</span>
            <span>Cliente</span>
            <span>Fecha</span>
            <span>Nombre cliente</span>
            <span>Estado actual</span>
          </div>

          {/* Fila de ejemplo */}
          <div className="fila-datos">
            <span>1</span>
            <span>Distrifruver</span>
            <span>03/02/25</span>
            <span>Carlos Salamanca</span>
            <span className="estado">En proceso</span>
          </div>

          {/* Botones */}
          <div className="botones">
            <a href="/seguimientoclienteguardado">
              <button className="btn-volver">VOLVER</button>
            </a>

            <a href="/seguimientoclienteguardadoactualizar">
              <button className="btn-actualizar">ACTUALIZAR ESTADO</button>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
