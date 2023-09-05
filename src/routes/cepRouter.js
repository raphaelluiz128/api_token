import express from "express";
import controller from "../controllers/cepController.js";
const cepRouter = express.Router();

cepRouter.get("/", controller.buscarCep);

export default cepRouter;