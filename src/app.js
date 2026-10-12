/**
 * SERVIDOR PRINCIPAL DE EXPRESS CON ECMASCRIPT MODULES (ESM)
 * ----------------------------------------------------------
 * Este archivo centraliza la inicializacion de express, la configuracion de los
 * middlewares globales, el montaje del enrutador y la apertura del puerto
 * de escucha.
 */

import express from "express";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import campersRouter from "./routes/campers.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use( logger);

app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "Bienvenido a la API REST de campers en express (campuslands)",
        stack: "node.js + Express + ECMAscript Modules (ESM)",
        almacenamiento: "Arreglo en memoria (sin base de datos externa)",
        documentacion_endpoint: {
            listar_todos: "GET /api/campers",
            obtener_por_id: "GET /api/campers/:id",
            crear_nuevo: "POST /api/campers",
            actualizar: "PUT /api/campers/:id",
            eliminar: "DELETE /api/campers/:id"
        }
    });
});

app.use("/api/campers", campersRouter);

app.use((req, res) => {
    res.status(404).json({
      error: `Ruta '${req.method} ${req.originalUrl}' no encontrada en este servidor.`
    });
  });
  
  // 6. Middleware Global de Manejo de Errores (debe ser el último app.use)
  app.use(errorHandler);
  
  // 7. Iniciar el servidor si este archivo se ejecuta directamente
  if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
      console.log(`\n===================================================`);
      console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
      console.log(`Endpoints CRUD disponibles en http://localhost:${PORT}/api/campers`);
      console.log(`Presiona CTRL+C para detener el servidor`);
      console.log(`===================================================\n`);
    });
  }
  
  export default app;


