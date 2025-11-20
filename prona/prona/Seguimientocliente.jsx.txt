import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importa tu CSS global
import BotonNavegacion from "../componentes/BotonNavegacion";

function Seguimientocliente() {
  return (
    <>
      {/* Encabezado rojo */}
      <header>
      <img src="/imagenes/Logopronavid.png" alt="Pronavid" className="logo" />
      </header>

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
              <div>
      <BotonNavegacion
        texto="Buscar"
        ruta="/seguimientoclienteguardado"
      />

      {/* Aquí va tu contenido */}
    </div>
        </div>
      </section>

      {/* Sección inferior */}
      <section className="seccion-inferior">
        <div className="fondo-difuminado"></div>
        <div className="barra-inferior">
          <div className="encabezado-tabla">
            <span>Id</span>
            <span>Cliente</span>
            <span>Fecha</span>
            <span>Nombre cliente</span>
            <span>Estado actual</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Seguimientocliente;
