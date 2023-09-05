import express from "express";
const cepRouter = express.Router();
import controller from "../controllers/cepController.js";

cepRouter.get("/", controller.buscarCep);

export default cepRouter;