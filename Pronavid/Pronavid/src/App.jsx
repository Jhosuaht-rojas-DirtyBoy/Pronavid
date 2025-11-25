import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reportes from "./pages/ReportesBasicos";
import Historial from "./pages/Historial";
import Seguimiento from "./pages/Seguimiento";
import Catalogo from "./pages/Catalogo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  );
}

export default App;
