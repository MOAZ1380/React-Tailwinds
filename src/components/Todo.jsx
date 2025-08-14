// Todo.jsx
import { useTodos } from "../hooks/useTodos";
import Dialog from "./Dialog";

const Todo = ({ todo, onOpenDialog, viewType }) => {
	const { dispatch } = useTodos();

	const toggleTodo = () => {
		dispatch({ type: "TOGGLE_TODO", payload: todo.id });
	};

	return (
		<div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col gap-2 hover:shadow-md transition">
			<div
				onClick={() => onOpenDialog(todo, "view")}
				className="cursor-pointer">
				<h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
					{todo.title}
				</h3>
				<p className="text-gray-500 line-clamp-2">{todo.details}</p>
				<span
					className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
						todo.isCompleted
							? "bg-green-100 text-green-700"
							: "bg-yellow-100 text-yellow-700"
					}`}>
					{todo.isCompleted ? "Completed" : "Pending"}
				</span>
				{todo.created_at && (
					<p className="text-xs text-gray-400 mt-1">
						Created: {new Date(todo.created_at).toLocaleString()}
					</p>
				)}

				{viewType === "active" && todo.update_at && (
					<p className="text-xs text-gray-400 mt-1">
						Updated: {new Date(todo.update_at).toLocaleString()}
					</p>
				)}

				{viewType === "completed" && (
					<p className="text-xs text-gray-400 mt-1">
						Completed: {new Date(todo.completed_at).toLocaleString()}
					</p>
				)}
			</div>

			<div className="flex gap-2 mt-2">
				<button
					className="bg-yellow-300 hover:bg-yellow-400 px-3 py-1 rounded text-sm transition"
					onClick={() => onOpenDialog(todo, "edit")}>
					✏️ Edit
				</button>
				<button
					className="bg-red-300 hover:bg-red-400 px-3 py-1 rounded text-sm transition"
					onClick={() => onOpenDialog(todo, "delete")}>
					🗑 Delete
				</button>
				<button
					className={`px-3 py-1 rounded text-sm transition ${
						todo.isCompleted
							? "bg-gray-300 hover:bg-gray-400"
							: "bg-green-300 hover:bg-green-400"
					}`}
					onClick={toggleTodo}>
					{todo.isCompleted ? "↩️ Uncompleted" : "✅ Complete"}
				</button>
			</div>
		</div>
	);
};

export default Todo;
