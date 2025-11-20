import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seguimientocliente from "./paginas/Seguimientocliente";
import Seguimientoclienteguardado from "./paginas/Seguimientoclienteguardado";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Seguimientocliente />} />
        <Route path="/seguimientoclienteguardado" element={<Seguimientoclienteguardado />} />
      </Routes>
    </Router>
  );
}

export default App;