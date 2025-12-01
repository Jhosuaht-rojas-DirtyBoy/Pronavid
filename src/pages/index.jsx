import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/inicio.css";
import NavbarPronavid from "../components/NavbarPronavid";

const HERO_URL = "https://cdn.pixabay.com/photo/2018/05/29/21/50/granola-3440204_1280.jpg";

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
                    <h1 className="hero-title">Comer bien, es verse bien,
                        es sentirse bien, es alimentarse con Pronavid</h1>

                    <div className="hero-buttons">
                        <Link to="/login" className="btn btn-login">Login</Link>
                        <Link to="/registro" className="btn btn-registro">Registro</Link>
                    </div>
                    <h2 className="info-title">¿Qué busca Pronavid?</h2>

                    <div className="info-grid">

                        <motion.div whileHover={{ scale: 1.05 }} className="info-card">
                            <h3>Misión</h3>
                            <p>Suministrar a nuestros clientes un excelente servicio, con la más alta calidad e inocuidad en nuestros productos, con precios accesibles y garantizando la construcción de país a través de la responsabilidad social corporativa.</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} className="info-card">
                            <h3>Visión</h3>
                            <p>Seremos la empresa líder en alimentos innovadores y de calidad, con una infraestructura sólida, un equipo humano competente y comprometido, con un enfoque en la satisfacción del cliente y el desarrollo sostenible.gurar productos seguros y consistentes.</p>
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
