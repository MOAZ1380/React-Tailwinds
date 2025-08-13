import Todo from "./Todo";
import Form from "./Form";
import Dialog from "./Dialog";
import { useTodos } from "../hooks/useTodos";
import { useMemo, useState } from "react";

const TodoList = () => {
	const { todos } = useTodos();
	const [viewType, setViewType] = useState("active");
	const [selectedTodo, setSelectedTodo] = useState(null);
	const [dialogMode, setDialogMode] = useState("view");

	const filteredTodos = useMemo(() => {
		return viewType === "active"
			? todos.filter((todo) => !todo.isCompleted)
			: todos.filter((todo) => todo.isCompleted);
	}, [todos, viewType]);

	const openDialog = (todo, mode = "view") => {
		setSelectedTodo(todo);
		setDialogMode(mode);
	};

	return (
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
						viewType === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
					}`}
					onClick={() => setViewType("completed")}>
					Completed Todos
				</button>
			</div>

			{filteredTodos.map((todo) => (
				<Todo key={todo.id} todo={todo} onOpenDialog={openDialog} />
			))}

			{/* Dialog */}
			{selectedTodo && (
				<div className="mt-6">
					<Dialog
						todo={selectedTodo}
						mode={dialogMode}
						onClose={() => setSelectedTodo(null)}
					/>
				</div>
			)}

			<Form />
		</div>
	);
};

export default TodoList;
