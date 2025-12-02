import express from "express";
import cors from "cors";
import testRoutes from "./routes/test.routes.js"; // IMPORTA TU RUTA

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", testRoutes);

// Puerto
const PORT = 3000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
