import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/auth.css";

export default function AuthPage() {
  const [modo, setModo] = useState("login"); // "login" o "registro"
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  // --- Login ---
  const [correoLogin, setCorreoLogin] = useState("");
  const [contrasenaLogin, setContrasenaLogin] = useState("");

  // --- Registro ---
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipoDoc, setTipoDoc] = useState("CC");
  const [numDoc, setNumDoc] = useState("");
  const [correoReg, setCorreoReg] = useState("");
  const [contrasenaReg, setContrasenaReg] = useState("");
  const [rol, setRol] = useState("Asesor");
  const [codigoAdmin, setCodigoAdmin] = useState("");

  const obtenerIdRol = () => (rol === "Administrador" ? 1 : 2);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMensaje("");
  }, [modo]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensaje("");
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo: correoLogin, contrasena: contrasenaLogin }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error de login");

      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.user));

      setMensaje(`Bienvenido, ${data.user.primer_nombre}`);
      setTipoMensaje("success");

      setTimeout(() => {
        window.location.href = data.user.id_rol === 1 ? "/DashboardAdmin" : "/DashboardAsesor";
      }, 1200);
    } catch (err) {
      setMensaje(err.message || "Error de servidor");
      setTipoMensaje("error");
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    setMensaje("");
    if (rol === "Administrador" && codigoAdmin !== "admin123") {
      setMensaje("Código de administrador incorrecto");
      setTipoMensaje("error");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          primer_nombre: nombre,
          primer_apellido: apellido,
          tipo_documento: tipoDoc,
          numero_documento: numDoc,
          correo: correoReg,
          contrasena: contrasenaReg,
          id_rol: obtenerIdRol(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al registrar");

      setMensaje("Registro exitoso ✔");
      setTipoMensaje("success");

      setTimeout(() => setModo("login"), 1500);
    } catch (err) {
      setMensaje(err.message || "Error de servidor");
      setTipoMensaje("error");
    }
  };

  return (
    <motion.div
      className="auth-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <header className="encabezado">
        <img src="../src/images/Logopronavid.png" alt="Logo Pronavid" className="logo" />
      </header>

      <main className="contenedor">
        <div className={`contenedor-wrapper ${modo === "registro" ? "activo" : ""}`}>
          
          {/* LOGIN */}
          <div className="side-panel login-panel">
            <form className="formulario" onSubmit={handleLogin}>
              <h2>Iniciar Sesión</h2>
              <input
                type="email"
                placeholder="Correo"
                value={correoLogin}
                onChange={(e) => setCorreoLogin(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={contrasenaLogin}
                onChange={(e) => setContrasenaLogin(e.target.value)}
                required
              />
              <button type="submit">Ingresar</button>
            </form>
          </div>

          {/* REGISTRO */}
          <div className="side-panel registro-panel">
            <form className="formulario" onSubmit={handleRegistro}>
              <h2>Crear Cuenta</h2>
              <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
              <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
              <div className="doc-group">
                <select value={tipoDoc} onChange={(e) => setTipoDoc(e.target.value)}>
                  <option value="CC">Cédula</option>
                  <option value="TI">Tarjeta</option>
                </select>
                <input type="number" placeholder="Número documento" value={numDoc} onChange={(e) => setNumDoc(e.target.value)} required />
              </div>
              <input type="email" placeholder="Correo" value={correoReg} onChange={(e) => setCorreoReg(e.target.value)} required />
              <input type="password" placeholder="Contraseña" value={contrasenaReg} onChange={(e) => setContrasenaReg(e.target.value)} required />
              <select value={rol} onChange={(e) => setRol(e.target.value)}>
                <option value="Asesor">Asesor</option>
                <option value="Administrador">Administrador</option>
              </select>
              {rol === "Administrador" && (
                <input type="password" placeholder="Código Admin" value={codigoAdmin} onChange={(e) => setCodigoAdmin(e.target.value)} required />
              )}
              <button type="submit">Registrarse</button>
            </form>
          </div>

          {/* OVERLAY */}
          <div className="overlay-container">
            <div className="overlay-bg">
              <div className="overlay-panel overlay-left">
                <h2>¡Bienvenido de Nuevo!</h2>
                <p>Inicia sesión con tus credenciales</p>
                <button className="ghost" onClick={() => setModo("login")}>Iniciar Sesión</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h2>¡Hola!</h2>
                <p>Ingresa tus datos y comienza tu experiencia</p>
                <button className="ghost" onClick={() => setModo("registro")}>Regístrate</button>
              </div>
            </div>
          </div>
        </div>

        {mensaje && <div className={`msg ${tipoMensaje}`}>{mensaje}</div>}
      </main>
    </motion.div>
  );
}
