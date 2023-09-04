import express from "express";
const cepRouter = express.Router();
import controller from "../controllers/cepController.js";

router.get("/", controller.buscarCep);

export default cepRouter;