import { useState, useEffect } from "react";
import Todo from "./Todo";
import Form from "./Form";

const TodoList = () => {
	const [todos, setTodos] = useState(() => {
		const savedTodos = localStorage.getItem("todos");
		return savedTodos ? JSON.parse(savedTodos) : [];
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const activeTodos = todos.filter((todo) => !todo.isCompleted);
	const completedTodos = todos.filter((todo) => todo.isCompleted);

	return (
		<div className="w-[700px] m-auto mt-[70px]">
			<h1 className="text-2xl font-bold mb-4">Todo List</h1>
			{activeTodos.map((todo) => (
				<Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
			))}

			<h2 className="text-xl font-semibold mt-6">Completed Todos</h2>
			{completedTodos.map((todo) => (
				<Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
			))}

			<Form todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default TodoList;
