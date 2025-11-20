import { useState } from "react";
import BotonNavegacion from "../componentes/BotonNavegacion";

export default function Seguimientoclienteactualizar() {
  const [mensajeVisible, setMensajeVisible] = useState(false);

  const mostrarMensaje = () => {
    setMensajeVisible(true);
    setTimeout(() => setMensajeVisible(false), 3000);
  };

  return (
    <div>

      {/* Encabezado rojo */}
      <header>
        <img
          src="/imagenes/Logopronavid.png"
          alt="Pronavid"
          className="logo"
        />
      </header>

      {/* Botón volver */}
      <div className="volver">
        <span>&#x21A9;</span>
      </div>

      {/* Formulario */}
      <section className="formulario">
        <div className="fila">
          <div className="campo">
            <label>ID del cliente</label>
            <input type="text" />
          </div>
          <div className="campo">
            <label>Cliente</label>
            <input type="text" />
          </div>
          <div className="campo">
            <label>Fecha</label>
            <input type="date" />
          </div>
        </div>

        <div className="fila">
          <div className="campo">
            <label>Nombre cliente</label>
            <input type="text" />
          </div>
        </div>

        <div className="fila">
          <div className="campo">
            <label>Estado actual</label>
            <input type="text" />
          </div>

          <button className="btn-buscar" onClick={mostrarMensaje}>
            Actualizar
          </button>
        </div>
      </section>

      {/* Barra inferior con fondo difuminado */}
      <section className="seccion-inferior">
        <div className="fondo-difuminado"></div>

        <div className="barra-inferior">
          <div className="encabezado-tabla">
            <span>ID</span>
            <span>Cliente</span>
            <span>Fecha</span>
            <span>Nombre cliente</span>
            <span>Estado actual</span>
          </div>

          <div className="fila-datos">
            <span>1</span>
            <span>Distrifruver</span>
            <span>03/02/25</span>
            <span>Carlos Salamanca</span>
            <span className="estado">En proceso</span>
          </div>

          <div className="botones">
            <a href="/seguimiento">
              <button className="btn-detalle">VOLVER</button>
            </a>

            <a href="/versiones">
              <button className="btn-actualizar">VER VERSIONES ANTERIORES</button>
            </a>
          </div>

          {mensajeVisible && (
            <p id="mensajeExito" className="mensaje-exito">
              Actualizado correctamente
            </p>
          )}
        </div>
      </section>

      {/* Botón de navegación */}
      <BotonNavegacion />
    </div>
  );
}
