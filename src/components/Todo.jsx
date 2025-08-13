import { useTodos } from "../hooks/useTodos";
import { useState } from "react";
import Dialog from "./Dialog";

const Todo = ({ todo }) => {
	const { dispatch } = useTodos();
	const [dialogMode, setDialogMode] = useState(null);

	const toggleTodo = () => {
		dispatch({ type: "TOGGLE_TODO", payload: todo.id });
	};

	return (
		<div className="bg-blue-200 my-2 p-2 rounded">
			<h3>{todo.title}</h3>
			<p>{todo.description}</p>
			<p>Status: {todo.isCompleted ? "✅" : "❌"}</p>

			<div className="flex gap-2">
				<button
					className="bg-yellow-500 text-white px-3 py-1 rounded"
					onClick={() => setDialogMode("edit")}>
					Edit
				</button>
				<button
					className="bg-red-500 text-white px-3 py-1 rounded"
					onClick={() => setDialogMode("delete")}>
					Delete
				</button>
				<button
					className={`px-3 py-1 rounded ${
						todo.isCompleted ? "bg-gray-500" : "bg-green-500"
					} text-white`}
					onClick={toggleTodo}>
					{todo.isCompleted ? "Uncomplete" : "Complete"}
				</button>
			</div>

			{dialogMode && (
				<Dialog
					todo={todo}
					mode={dialogMode}
					onClose={() => setDialogMode(null)}
				/>
			)}
		</div>
	);
};

export default Todo;
