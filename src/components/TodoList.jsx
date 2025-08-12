import Todo from "./Todo";
import Form from "./Form";
import Dialog from "./Dialog";
import { useTodos } from "../hooks/useTodos";
import { useMemo, useState } from "react";

const TodoList = () => {
	const { todos } = useTodos();
	const [viewType, setViewType] = useState("active");

	const filteredTodos = useMemo(() => {
		return viewType === "active"
			? todos.filter((todo) => !todo.isCompleted)
			: todos.filter((todo) => todo.isCompleted);
	}, [todos, viewType]);

	return (
		<>
			<div className="w-[700px] m-auto mt-[70px]">
				<h1 className="text-2xl font-bold mb-4">Todo List</h1>

				<div className="flex gap-4 mb-4">
					<button
						className={`px-4 py-2 rounded ${
							viewType === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
						}`}
						onClick={() => setViewType("active")}>
						Active Todos
					</button>
					<button
						className={`px-4 py-2 rounded ${
							viewType === "completed"
								? "bg-blue-500 text-white"
								: "bg-gray-200"
						}`}
						onClick={() => setViewType("completed")}>
						Completed Todos
					</button>
				</div>

				{filteredTodos.map((todo) => (
					<div key={todo.id}>
						<Todo todo={todo} />
					</div>
				))}

				<Form />
			</div>
		</>
	);
};

export default TodoList;
