import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Rutas públicas
import InicioPronavid from "./pages/index.jsx";
import Login from "./pages/login.jsx";
import Registro from "./pages/registro.jsx";

// Rutas internas
import Dashboard from "./pages/Dashboard";
import Reportes from "./pages/ReportesBasicos";
import Historial from "./pages/Historial";
import Seguimiento from "./pages/Seguimiento";
import Catalogo from "./pages/Catalogo";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Rutas públicas */}
        <Route path="/" element={<InicioPronavid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rutas internas */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/Seguimiento" element={<Seguimiento />} />
        <Route path="/Catalogo" element={<Catalogo />} />

      </Routes>
    </Router>
  );
}
