import { useState } from "react";
import "../styles/login.css";

export default function Registro() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [tipoDoc, setTipoDoc] = useState("CC");
    const [numDoc, setNumDoc] = useState("");
    const [rol, setRol] = useState("Asesor");
    const [codigoAdmin, setCodigoAdmin] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [tipoMensaje, setTipoMensaje] = useState("");

    const obtenerIdRol = () => rol === "Administrador" ? 1 : 2;

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
                    correo,
                    contrasena,
                    id_rol: obtenerIdRol(),
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setMensaje(data.message || "Error al registrar ❌");
                setTipoMensaje("error");
                return;
            }

            setMensaje("Registro exitoso ✔");
            setTipoMensaje("success");

            setTimeout(() => {
                window.location.href = "/login";
            }, 1500);

        } catch (err) {
            console.error(err);
            setMensaje("Error en el servidor");
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

                        <label>Nombre</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />

                        <label>Apellido</label>
                        <input
                            type="text"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            required
                        />

                        <label>Tipo de documento</label>
                        <select value={tipoDoc} onChange={(e) => setTipoDoc(e.target.value)}>
                            <option value="CC">Cédula</option>
                            <option value="TI">Tarjeta de identidad</option>
                        </select>

                        <label>Número de documento</label>
                        <input
                            type="number"
                            value={numDoc}
                            onChange={(e) => setNumDoc(e.target.value)}
                            required
                        />

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

                        <label>Tipo de cuenta</label>
                        <select value={rol} onChange={(e) => setRol(e.target.value)}>
                            <option value="Asesor">Asesor</option>
                            <option value="Administrador">Administrador</option>
                        </select>

                        {rol === "Administrador" && (
                            <>
                                <label>Código administrador</label>
                                <input
                                    type="password"
                                    value={codigoAdmin}
                                    onChange={(e) => setCodigoAdmin(e.target.value)}
                                    required
                                />
                            </>
                        )}

                        <button type="submit">Registrar</button>

                        {mensaje && (
                            <div className={`msg ${tipoMensaje}`}>{mensaje}</div>
                        )}
                    </form>
                </div>
            </main>
        </div>
    );
}
