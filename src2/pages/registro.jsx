import { useState } from "react";
import "../styles/login.css";
export default function Registro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [rol, setRol] = useState("Asesor");
    const [codigoAdmin, setCodigoAdmin] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [tipoMensaje, setTipoMensaje] = useState("");
    const handleRegistro = async (e) => {
        e.preventDefault();
        // Validar código si es administrador
        if (rol === "Administrador" && codigoAdmin !== "admin123") {
            setMensaje("Código de administrador incorrecto");
            setTipoMensaje("error");
            return;
        }
        try {
            // Leer la "DB" JSON desde el backend
            const response = await fetch("http://localhost:3001/users");
            const users = await response.json();
            // Verificar si el email ya existe
            const existe = users.some((u) => u.email === email);
            if (existe) {
                setMensaje("El correo ya está registrado");
                setTipoMensaje("error");
                return;
            }
            // Crear nuevo usuario
            const nuevoUsuario = {
                id: users.length + 1,
                email,
                password,
                name,
                rol,
            };
            // Enviar al backend para que lo agregue al JSON
            const res = await fetch("http://localhost:3001/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoUsuario),
            });
            if (!res.ok) throw new Error("Error al registrar usuario");
            setMensaje("Usuario registrado correctamente ✅");
            setTipoMensaje("success");
            // Limpiar formulario
            setTimeout(() => {
                setEmail("");
                setPassword("");
                setName("");
                setRol("Asesor");
                setCodigoAdmin("");
                setMensaje("");
            }, 2000);
        } catch (error) {
            console.error(error);
            setMensaje("Error al registrar usuario");
            setTipoMensaje("error");
        }
    };
    return (
        <div className="auth-page">
            <header className="encabezado">
                <img src="/Logopronavid.png" alt="Logo Pronavid" className="logo" />
                <h1>Registro de Usuario</h1>
            </header>
            <main className="contenedor">
                <div className="glass-card">
                    <form onSubmit={handleRegistro} className="formulario">
                        <h2>Crear Cuenta</h2>
                        <label>Nombre completo</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Juan Pérez"
                            required
                        />
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            required
                        />
                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                        <label>Tipo de cuenta</label>
                        <select value={rol} onChange={(e) => setRol(e.target.value)}>
                            <option value="Asesor">👤 Asesor</option>
                            <option value="Administrador">🔑 Administrador</option>
                        </select>
                        {/* Input extra solo si es administrador */}
                        {rol === "Administrador" && (
                            <>
                                <label>Código de administrador</label>
                                <input
                                    type="password"
                                    value={codigoAdmin}
                                    onChange={(e) => setCodigoAdmin(e.target.value)}
                                    placeholder="Ingresa el código admin"
                                    required
                                />
                            </>
                        )}
                        <button type="submit">Registrar Cuenta</button>
                        {mensaje && <div className={`msg ${tipoMensaje}`}>{mensaje}</div>}
                        <a href="/login" className="auth-link">
                            ¿Ya tienes cuenta? Inicia sesión aquí
                        </a>
                    </form>
                </div>
            </main>
        </div>
    );
}