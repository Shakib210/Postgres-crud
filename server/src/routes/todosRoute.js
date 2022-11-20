import express from "express";
import {
	createTodos,
	getAllTodos,
	getTodoById,
	updateTodos,
	deleteTodos,
} from "../controller/todosController.js";

const router = express.Router();

router.route("/todos").post(createTodos);
router.route("/getAllTodos").get(getAllTodos);
router.route("/todo/:id").get(getTodoById);
router.route("/todo/:id").put(updateTodos);
router.route("/todo/:id").delete(deleteTodos);

const configure = (app) => {
	app.use("/api", router);
};

export default configure;
