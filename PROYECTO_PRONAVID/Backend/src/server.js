    import express from "express";
    import dotenv from "dotenv";
    import cors from "cors";

    import authRoutes from "./routes/auth.routes.js"; // <--- IMPORTACIONES ARRIBA
    import seguimientoRoutes from "./routes/seguimiento.routes.js"; //Santos

    dotenv.config();

    const app = express(); // <--- AQUÍ SE DEFINE APP

    app.use(cors());
    app.use(express.json());

    // Ruta base
    app.get("/", (req, res) => {
        res.send("API Corriendo 🔥");
    });

    // RUTAS (siempre después de app = express())
    app.use("/api/auth", authRoutes);
    app.use("/api/seguimiento", seguimientoRoutes); //Santos

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });

    //Ruta del Historial (hacha por Jhosuaht daddy hot )

    app.use("/api/historial", require("./routes/historial"));