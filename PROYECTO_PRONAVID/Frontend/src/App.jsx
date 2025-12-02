import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Rutas públicas
import InicioPronavid from "./pages/index.jsx";
import AuthPage from "./pages/AuthPage.jsx"; // Nuevo componente unificado Login/Registro

// Rutas internas
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import Historial from "./pages/Historial.jsx";
import Seguimiento from "./pages/Seguimiento.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import DashboardAsesor from "./pages/DashboardAsesor.jsx";
import ReporteBasico from "./pages/ReporteBasico.jsx";
import HistorialProductos from "./pages/Historial";
import MasVendido from "./pages/MasVendido.jsx";
import Frecuente from "./pages/Frecuente.jsx";
import RegistroCliente from "./pages/RegistroCliente";
import Pedidos from "./pages/Pedidos.jsx";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Rutas públicas */}
        <Route path="/" element={<InicioPronavid />} />
        {/* Nueva ruta unificada */}
        <Route path="/auth/:modo" element={<AuthPage />} />

        {/* Rutas internas */}
        <Route path="/Pedidos" element={<Pedidos />} />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/registro-cliente" element={<RegistroCliente />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/Seguimiento" element={<Seguimiento />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/DashboardAsesor" element={<DashboardAsesor />} />
        <Route path="/reporte-basico" element={<ReporteBasico />} />
        <Route path="/historial" element={<HistorialProductos />} />
        <Route path="/mas-vendido" element={<MasVendido />} />
        <Route path="/cliente-frecuente" element={<Frecuente />} />
      </Routes>
    </Router>
  );
}
