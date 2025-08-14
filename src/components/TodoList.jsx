import Todo from "./Todo";
import Form from "./Form";
import Dialog from "./Dialog";
import { useTodos } from "../hooks/useTodos";
import { useMemo, useState } from "react";

const TodoList = () => {
	const { todos } = useTodos();
	const [viewType, setViewType] = useState("all");
	const [selectedTodo, setSelectedTodo] = useState(null);
	const [dialogMode, setDialogMode] = useState("view");

	const filteredTodos = useMemo(() => {
		return viewType === "all"
			? todos
			: viewType === "active"
			? todos.filter((todo) => !todo.isCompleted)
			: todos.filter((todo) => todo.isCompleted);
	}, [todos, viewType]);

	const openDialog = (todo, mode = "view") => {
		setSelectedTodo(todo);
		setDialogMode(mode);
	};

	return (
		<div className="max-w-2xl mx-auto mt-12 bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl shadow-2xl border border-blue-100">
			<h1 className="text-4xl font-extrabold mb-8 text-blue-700 text-center tracking-tight drop-shadow-sm flex items-center justify-center gap-2">
				<span role="img" aria-label="todo">
					📝
				</span>{" "}
				Todo List
			</h1>

			<div className="flex gap-3 justify-center mb-8">
				<button
					className={`px-5 py-2 rounded-full font-semibold transition shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
						viewType === "all"
							? "bg-indigo-500 text-white border-indigo-500 scale-105"
							: "bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50"
					}`}
					onClick={() => setViewType("all")}>
					All <span className="ml-1 text-xs font-bold">({todos.length})</span>
				</button>
				<button
					className={`px-5 py-2 rounded-full font-semibold transition shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
						viewType === "active"
							? "bg-blue-500 text-white border-blue-500 scale-105"
							: "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
					}`}
					onClick={() => setViewType("active")}>
					Active{" "}
					<span className="ml-1 text-xs font-bold">
						({todos.filter((todo) => !todo.isCompleted).length})
					</span>
				</button>
				<button
					className={`px-5 py-2 rounded-full font-semibold transition shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-green-300 ${
						viewType === "completed"
							? "bg-green-500 text-white border-green-500 scale-105"
							: "bg-white text-green-700 border-green-200 hover:bg-green-50"
					}`}
					onClick={() => setViewType("completed")}>
					Completed{" "}
					<span className="ml-1 text-xs font-bold">
						({todos.filter((todo) => todo.isCompleted).length})
					</span>
				</button>
			</div>

			{filteredTodos.length === 0 ? (
				<div className="text-center text-gray-500 border-2 border-dashed rounded-2xl p-8 bg-white/80 shadow-inner">
					<p className="font-semibold text-lg mb-1">👀 No tasks found</p>
					<p className="text-sm">Try adding a new task below.</p>
				</div>
			) : (
				<div className="space-y-4">
					{filteredTodos.map((todo) => (
						<Todo
							key={todo.id}
							todo={todo}
							onOpenDialog={openDialog}
							viewType={viewType}
						/>
					))}
				</div>
			)}

			{selectedTodo && (
				<div
					className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50"
					onClick={() => setSelectedTodo(null)}>
					<div
						className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl border border-blue-100"
						onClick={(e) => e.stopPropagation()}>
						<Dialog
							todo={selectedTodo}
							mode={dialogMode}
							onClose={() => setSelectedTodo(null)}
						/>
					</div>
				</div>
			)}

			<div className="mt-10">
				<Form />
			</div>
		</div>
	);
};

export default TodoList;
