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
		<div className="max-w-2xl mx-auto mt-10 bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg">
			<h1 className="text-3xl font-bold mb-6 text-gray-700 text-center">
				📝 Todo List
			</h1>

			<div className="flex gap-4 justify-center mb-6">
				<button
					className={`px-4 py-2 rounded-lg transition ${
						viewType === "active"
							? "bg-blue-400 text-white shadow-md"
							: "bg-white text-gray-700 border"
					}`}
					onClick={() => setViewType("active")}>
					Active
				</button>
				<button
					className={`px-4 py-2 rounded-lg transition ${
						viewType === "completed"
							? "bg-green-400 text-white shadow-md"
							: "bg-white text-gray-700 border"
					}`}
					onClick={() => setViewType("completed")}>
					Completed
				</button>
			</div>

			<div className="space-y-3">
				{filteredTodos.map((todo) => (
					<Todo key={todo.id} todo={todo} onOpenDialog={openDialog} />
				))}
			</div>

			{selectedTodo && (
				<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
					<div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
						<Dialog
							todo={selectedTodo}
							mode={dialogMode}
							onClose={() => setSelectedTodo(null)}
						/>
					</div>
				</div>
			)}

			<div className="mt-6">
				<Form />
			</div>
		</div>
	);
};

export default TodoList;
