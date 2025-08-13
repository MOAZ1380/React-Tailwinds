import { useTodos } from "../hooks/useTodos";
import { useState } from "react";

const Dialog = ({ todo, mode, onClose }) => {
	const { dispatch } = useTodos();
	const [editedTitle, setEditedTitle] = useState(todo.title);

	const handleAction = () => {
		if (mode === "edit") {
			dispatch({
				type: "EDIT_TODO",
				payload: { id: todo.id, title: editedTitle },
			});
		} else if (mode === "delete") {
			dispatch({ type: "REMOVE_TODO", payload: todo.id });
		}
		onClose();
	};

	return (
		<div className="border p-4 bg-white shadow-md rounded">
			{mode === "edit" ? (
				<div>
					<input
						type="text"
						value={editedTitle}
						onChange={(e) => setEditedTitle(e.target.value)}
						className="border p-1 mr-2"
					/>
				</div>
			) : (
				<>
					<h3 className="text-lg font-semibold mb-2">{todo.title}</h3>
					<p>{todo.description || "No description"}</p>
					<p>
						Status: {todo.isCompleted ? "✅ Completed" : "❌ Not Completed"}
					</p>
				</>
			)}

			<div className="mt-4 flex gap-2">
				<button
					onClick={handleAction}
					className="bg-green-500 text-white px-3 py-1 rounded">
					{mode === "edit"
						? "Save"
						: mode === "delete"
						? "Confirm Delete"
						: "OK"}
				</button>
				<button
					onClick={onClose}
					className="bg-gray-400 text-white px-3 py-1 rounded">
					Close
				</button>
			</div>
		</div>
	);
};

export default Dialog;
