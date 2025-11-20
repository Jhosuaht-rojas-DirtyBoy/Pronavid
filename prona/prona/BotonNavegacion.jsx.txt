import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function BotonNavegacion({ texto, ruta }) {
  const navigate = useNavigate();

  const irPagina = () => {
    navigate(ruta);
  };

  return (
    <button className="btn-navegacion" onClick={irPagina}>
      {texto}
    </button>
  );
}

export default BotonNavegacion;
