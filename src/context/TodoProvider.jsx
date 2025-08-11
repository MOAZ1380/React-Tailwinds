import { useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState(() => {
		const savedTodos = localStorage.getItem("todos");
		return savedTodos ? JSON.parse(savedTodos) : [];
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodoContext.Provider>
	);
};
