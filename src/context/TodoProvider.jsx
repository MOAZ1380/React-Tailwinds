import { useReducer, useEffect } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
	const todoReducer = (state, action) => {
		switch (action.type) {
			case "ADD_TODO":
				return [...state, action.payload];
			case "REMOVE_TODO":
				return state.filter((todo) => todo.id !== action.payload);
			case "TOGGLE_TODO":
				return state.map((todo) =>
					todo.id === action.payload
						? { ...todo, isCompleted: !todo.isCompleted }
						: todo,
				);
			case "EDIT_TODO":
				return state.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, title: action.payload.title }
						: todo,
				);
			default:
				return state;
		}
	};

	const [todos, dispatch] = useReducer(todoReducer, [], () => {
		const localData = localStorage.getItem("todos");
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};
