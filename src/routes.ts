import express from "express";
import ClassesController from "./controller/ClassesController";
import ConnectionControllers from "./controller/ConnectionController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionControllers();

routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);

export default routes;
