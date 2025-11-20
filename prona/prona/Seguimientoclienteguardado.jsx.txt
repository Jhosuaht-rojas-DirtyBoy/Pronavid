import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // usa el estilo global
import BotonNavegacion from "../componentes/BotonNavegacion";

function Seguimientoclienteguardado() {
  return (
    <div className="seguimiento-guardado">
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
        <Link to="/">
          <span>&#x21A9;</span>
        </Link>
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
          <button className="btn-buscar">BUSCAR</button>
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

          <div>
          <BotonNavegacion
          texto="Volver al Seguimiento"
          ruta="/seguimientocliente"
          />
    </div>
        </div>
      </section>
    </div>
  );
}

export default Seguimientoclienteguardado;
