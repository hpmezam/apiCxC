import express from 'express';
import cors from "cors";

const app = express();

app.set('port',process.env.PORT || 5000);
app.use(cors())
import pagoCabeceraRoutes from  './routes/cabecera.routes.js';
import detalleRoutes from "./routes/detalles.routes.js";
import cuentaBRoutes from "./routes/cuentaB.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";

//middlewares
app.use(express.json());

app.use("/api/cabeceras",pagoCabeceraRoutes);
app.use("/api/detalles", detalleRoutes);
app.use("/api/cuentab", cuentaBRoutes);
app.use("/api/cliente", clienteRoutes);

export default app;