import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/inicio.css";
import NavbarPronavid from "../components/NavbarPronavid";

const HERO_URL = "https://images.pexels.com/photos/1435909/pexels-photo-1435909.jpeg";

export default function InicioPronavid() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    // preload image
    useEffect(() => {
        let mounted = true;
        const img = new Image();
        img.src = HERO_URL;
        img.onload = () => { if (mounted) setImgLoaded(true); };
        img.onerror = () => { if (mounted) setImgError(true); };
        return () => { mounted = false; };
    }, []);

    return (
        <div className="page">

            <NavbarPronavid />

            {/* HERO */}
            <section className="hero" aria-label="Hero Pronavid">
                {/* img element positioned absolutely; more reliable than background-image in some setups */}
                <img
                    src={HERO_URL}
                    alt="Frutas y verduras - Pronavid"
                    className={`hero-img ${imgLoaded ? "visible" : "hidden"}`}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                    crossOrigin="anonymous"
                />

                {/* overlay para oscurecer ligeramente */}
                <div className="hero-overlay" />

                {/* Contenido: si la imagen no cargó, igualmente se muestra el contenido */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="hero-content"
                >
                    <h1 className="hero-title">Nutrición que impulsa tu bienestar</h1>

                    <p className="hero-text">
                        En Pronavid desarrollamos productos nutricionales de alta calidad,
                        diseñados para mejorar la salud, el rendimiento y el bienestar.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/login" className="btn btn-login">Login</Link>
                        <Link to="/registro" className="btn btn-registro">Registro</Link>
                    </div>
                    <h2 className="info-title">¿Por qué elegir Pronavid?</h2>

                    <div className="info-grid">

                        <motion.div whileHover={{ scale: 1.05 }} className="info-card">
                            <div className="info-icon">🥣</div>
                            <h3>Alimentos de Alta Calidad</h3>
                            <p>Elaborados con materias primas seleccionadas para garantizar sabor, nutrición y confianza.</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} className="info-card">
                            <div className="info-icon">🧪</div>
                            <h3>Procesos Seguros</h3>
                            <p>Cumplimos normas de inocuidad y buenas prácticas de manufactura para asegurar productos seguros y consistentes.</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} className="info-card">
                            <div className="info-icon">🌿</div>
                            <h3>Portafolio Nutritivo</h3>
                            <p>Granolas, cereales, frutos secos y snacks saludables pensados para el bienestar diario.</p>
                        </motion.div>


                    </div>
                    {/* muestra un aviso si la imagen falló */}
                    {imgError && (
                        <div className="hero-fallback">
                            <small>La imagen de fondo no pudo cargarse. Mostrando versión simplificada.</small>
                        </div>
                    )}
                </motion.div>
            </section>



        </div>
    );
}
