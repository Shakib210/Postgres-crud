import pool from "../db.js";

export const createTodosService = async (description) => {
	const newTodo = await pool.query(
		`INSERT INTO todo (description)  VALUES($1)`,
		[description]
	);

	return newTodo.rows;
};

export const getAllTodosService = async () => {
	const allTodo = await pool.query(`SELECT * FROM todo`);
	return allTodo.rows;
};

export const getTodoByIdService = async (id) => {
	const allTodo = await pool.query(`SELECT * FROM todo WHERE todo_id =$1`, [
		id,
	]);
	return allTodo.rows;
};

export const updateTodosService = async (id, description) => {
	await pool.query(`UPDATE todo SET description = $1 WHERE todo_id = $2`, [
		description,
		id,
	]);
};

export const deleteTodosService = async (id) => {
	await pool.query(`DELETE FROM todo WHERE todo_id = $1`, [id]);
};
