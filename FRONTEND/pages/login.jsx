import { useState } from "react";
import "../styles/login.css";

export default function Login() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensaje, setMensaje] = useState(null);
    const [tipoMensaje, setTipoMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ correo, contrasena })
            });

            const data = await response.json();

            if (!response.ok) {
                setMensaje(data.message || "Error al iniciar sesión");
                setTipoMensaje("error");
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("usuario", JSON.stringify(data.user));

            setMensaje(`Bienvenido, ${data.user.primer_nombre}`);
            setTipoMensaje("success");

            setTimeout(() => {
                if (data.user.id_rol === 1) {
                    window.location.href = "/DashboardAdmin";
                } else {
                    window.location.href = "/DashboardAsesor";
                }
            }, 1200);

        } catch (err) {
            console.error(err);
            setMensaje("Error de servidor");
            setTipoMensaje("error");
        }
    };

    return (
        <div className="auth-page">
            <header className="encabezado">
                <img src="../images/Logopronavid.png" alt="Logo Pronavid" className="logo" />
                <h1>Inicio de Sesión</h1>
            </header>

            <main className="contenedor">
                <div className="glass-card">
                    <form onSubmit={handleSubmit} className="formulario">
                        <h2>Bienvenido</h2>

                        <label>Correo</label>
                        <input
                            type="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />

                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            required
                        />

                        <button type="submit">Iniciar Sesión</button>

                        {mensaje && (
                            <div className={`msg ${tipoMensaje}`}>{mensaje}</div>
                        )}

                        <a href="/registro" className="auth-link">
                            ¿No tienes cuenta? Regístrate aquí
                        </a>
                    </form>
                </div>
            </main>
        </div>
    );
}
