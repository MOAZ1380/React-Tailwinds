// Todo.jsx
import { useTodos } from "../hooks/useTodos";
import Dialog from "./Dialog";

const Todo = ({ todo, onOpenDialog, viewType }) => {
	const { dispatch } = useTodos();

	const toggleTodo = () => {
		dispatch({ type: "TOGGLE_TODO", payload: todo.id });
	};

	return (
		<div className="bg-white/90 p-5 rounded-2xl shadow-xl border border-blue-100 flex flex-col gap-3 hover:shadow-2xl transition-all duration-200 group">
			<div
				onClick={() => onOpenDialog(todo, "view")}
				className="cursor-pointer select-none">
				<h3 className="text-xl font-bold text-blue-800 line-clamp-2 group-hover:underline">
					{todo.title}
				</h3>
				<p className="text-gray-600 line-clamp-2 mb-1">{todo.details}</p>
				<span
					className={`inline-block mt-1 px-2 py-1 text-xs rounded-full font-semibold shadow-sm ${
						todo.isCompleted
							? "bg-green-100 text-green-700 border border-green-200"
							: "bg-yellow-100 text-yellow-700 border border-yellow-200"
					}`}>
					{todo.isCompleted ? "Completed" : "Pending"}
				</span>
				{todo.created_at && (
					<p className="text-xs text-gray-400 mt-1">
						Created: {new Date(todo.created_at).toLocaleString()}
					</p>
				)}
				{viewType === "active" && todo.update_at && (
					<p className="text-xs text-blue-400 mt-1">
						Updated: {new Date(todo.update_at).toLocaleString()}
					</p>
				)}
				{viewType === "completed" && todo.completed_at && (
					<p className="text-xs text-green-500 mt-1">
						Completed: {new Date(todo.completed_at).toLocaleString()}
					</p>
				)}
			</div>
			<div className="flex gap-2 mt-2">
				<button
					className="bg-yellow-200 hover:bg-yellow-300 text-yellow-900 font-semibold px-4 py-1.5 rounded-lg text-sm shadow transition border border-yellow-300"
					onClick={() => onOpenDialog(todo, "edit")}>
					✏️ Edit
				</button>
				<button
					className="bg-red-200 hover:bg-red-300 text-red-900 font-semibold px-4 py-1.5 rounded-lg text-sm shadow transition border border-red-300"
					onClick={() => onOpenDialog(todo, "delete")}>
					🗑 Delete
				</button>
				<button
					className={`font-semibold px-4 py-1.5 rounded-lg text-sm shadow transition border ${
						todo.isCompleted
							? "bg-gray-200 hover:bg-gray-300 text-gray-700 border-gray-300"
							: "bg-green-200 hover:bg-green-300 text-green-900 border-green-300"
					}`}
					onClick={toggleTodo}>
					{todo.isCompleted ? "↩️ Uncompleted" : "✅ Complete"}
				</button>
			</div>
		</div>
	);
};

export default Todo;
