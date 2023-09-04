import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

import * as dotenv from "dotenv";
dotenv.config()

app.use(express.json());

import db from "./database/mongoConfig.js"
db.connect();

import usuarioRoutes from "./routes/usuarioRouter.js"
import cepRoutes from "./routes/cepRouter.js"

app.use("/usuario", usuarioRoutes);
app.use("/cep", cepRoutes);

app.post("/api/users", (req, res) => {
    console.log(req.body);
})



export default app;