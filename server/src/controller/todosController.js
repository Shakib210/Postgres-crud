import {
	createTodosService,
	deleteTodosService,
	getAllTodosService,
	getTodoByIdService,
	updateTodosService,
} from "../service/todosServices.js";

const createTodos = async (req, res) => {
	try {
		const { description } = req.body;
		const newTodo = await createTodosService(description);
		res.json(newTodo);
	} catch (error) {
		console.log("error", error);
	}
};

const getAllTodos = async (req, res) => {
	try {
		const allTodo = await getAllTodosService();

		res.json(allTodo);
	} catch (error) {
		console.log("error", error);
	}
};

const getTodoById = async (req, res) => {
	try {
		const id = req.params.id;
		const allTodo = await getTodoByIdService(id);

		res.json(allTodo);
	} catch (error) {
		console.log("error", error);
	}
};

const updateTodos = async (req, res) => {
	try {
		const id = req.params.id;
		const { description } = req.body;
		await updateTodosService(id, description);
		res.json(`Todo is updated!`);
	} catch (error) {
		console.log("error", error);
	}
};

const deleteTodos = async (req, res) => {
	try {
		const id = req.params.id;
		deleteTodosService(id);
		res.json(`Todo is deleted!`);
	} catch (error) {
		console.log("error", error);
	}
};

export { createTodos, getAllTodos, getTodoById, updateTodos, deleteTodos };
