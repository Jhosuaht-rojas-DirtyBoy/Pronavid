import { useState } from "react";
import Login from "./pages/login.jsx";
import Registro from "./pages/registro.jsx";

function App() {
  const [vista, setVista] = useState("login"); // "login" o "registro"

  return (
    <div>
      {vista === "login" && (
        <>
          <Login />
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            ¿No tienes cuenta?{" "}
            <button onClick={() => setVista("registro")}>Registrarse</button>
          </p>
        </>
      )}

      {vista === "registro" && (
        <>
          <Registro />
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            ¿Ya tienes cuenta?{" "}
            <button onClick={() => setVista("login")}>Iniciar Sesión</button>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
