import { useState } from "react";
import "../styles/login.css"; // Aquí pondremos los estilos

export default function AuthPage() {
  const [modo, setModo] = useState("login"); // "login" o "registro"
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  // --- Estados para Login ---
  const [correoLogin, setCorreoLogin] = useState("");
  const [contrasenaLogin, setContrasenaLogin] = useState("");

  // --- Estados para Registro ---
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipoDoc, setTipoDoc] = useState("CC");
  const [numDoc, setNumDoc] = useState("");
  const [correoReg, setCorreoReg] = useState("");
  const [contrasenaReg, setContrasenaReg] = useState("");
  const [rol, setRol] = useState("Asesor");
  const [codigoAdmin, setCodigoAdmin] = useState("");

  const obtenerIdRol = () => rol === "Administrador" ? 1 : 2;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo: correoLogin, contrasena: contrasenaLogin })
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
      console.error(err);
      setMensaje(err.message || "Error de servidor");
      setTipoMensaje("error");
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
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
          id_rol: obtenerIdRol()
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al registrar");

      setMensaje("Registro exitoso ✔");
      setTipoMensaje("success");

      setTimeout(() => setModo("login"), 1500);

    } catch (err) {
      console.error(err);
      setMensaje(err.message || "Error de servidor");
      setTipoMensaje("error");
    }
  };

  return (
    <div className="auth-page">
      <header className="encabezado">
        <img src="/Logopronavid.png" alt="Logo Pronavid" className="logo" />
        <h1>{modo === "login" ? "Inicio de Sesión" : "Registro de Usuario"}</h1>
      </header>

      <main className="contenedor">
        <div className={`glass-card ${modo}`}>
          {/* LOGIN */}
          <form className="formulario" onSubmit={handleLogin}>
            <h2>Bienvenido</h2>
            <label>Correo</label>
            <input type="email" value={correoLogin} onChange={(e) => setCorreoLogin(e.target.value)} required />
            <label>Contraseña</label>
            <input type="password" value={contrasenaLogin} onChange={(e) => setContrasenaLogin(e.target.value)} required />
            <button type="submit">Iniciar Sesión</button>
            <p className="cambiar-modo" onClick={() => setModo("registro")}>
              ¿No tienes cuenta? Regístrate aquí
            </p>
          </form>

          {/* REGISTRO */}
          <form className="formulario" onSubmit={handleRegistro}>
            <h2>Crear Cuenta</h2>
            <label>Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            <label>Apellido</label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
            <label>Tipo de documento</label>
            <select value={tipoDoc} onChange={(e) => setTipoDoc(e.target.value)}>
              <option value="CC">Cédula</option>
              <option value="TI">Tarjeta de identidad</option>
            </select>
            <label>Número de documento</label>
            <input type="number" value={numDoc} onChange={(e) => setNumDoc(e.target.value)} required />
            <label>Correo</label>
            <input type="email" value={correoReg} onChange={(e) => setCorreoReg(e.target.value)} required />
            <label>Contraseña</label>
            <input type="password" value={contrasenaReg} onChange={(e) => setContrasenaReg(e.target.value)} required />
            <label>Tipo de cuenta</label>
            <select value={rol} onChange={(e) => setRol(e.target.value)}>
              <option value="Asesor">Asesor</option>
              <option value="Administrador">Administrador</option>
            </select>
            {rol === "Administrador" && (
              <>
                <label>Código administrador</label>
                <input type="password" value={codigoAdmin} onChange={(e) => setCodigoAdmin(e.target.value)} required />
              </>
            )}
            <button type="submit">Registrar</button>
            <p className="cambiar-modo" onClick={() => setModo("login")}>
              ¿Ya tienes cuenta? Inicia sesión
            </p>
          </form>
        </div>
        {mensaje && <div className={`msg ${tipoMensaje}`}>{mensaje}</div>}
      </main>
    </div>
  );
}
