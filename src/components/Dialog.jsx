import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const Dialog = ({ todo }) => {
	const { dispatch } = useTodos();
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(todo.title);

	const handleDelete = () => {
		dispatch({ type: "REMOVE_TODO", payload: todo.id });
	};

	const handleSaveEdit = () => {
		dispatch({
			type: "EDIT_TODO",
			payload: { id: todo.id, title: editedTitle },
		});
		setIsEditing(false);
	};

	const handleToggleComplete = () => {
		dispatch({
			type: "TOGGLE_TODO",
			payload: todo.id,
		});
	};

	return (
		<div className="border p-4 bg-white shadow-md rounded">
			{isEditing ? (
				<div className="mb-2">
					<input
						type="text"
						value={editedTitle}
						onChange={(e) => setEditedTitle(e.target.value)}
						className="border p-1 mr-2"
					/>
					<button
						onClick={handleSaveEdit}
						className="bg-green-500 text-white px-3 py-1 rounded">
						Save
					</button>
				</div>
			) : (
				<h3 className="text-lg font-semibold mb-2">{todo.title}</h3>
			)}

			<button
				className="bg-blue-500 text-white px-3 py-1 m-1 rounded"
				onClick={() => setIsEditing(true)}>
				Edit
			</button>

			<button
				onClick={handleDelete}
				className="bg-red-500 text-white px-3 py-1 m-1 rounded">
				Delete
			</button>

			<button
				onClick={handleToggleComplete}
				className="bg-gray-500 text-white px-3 py-1 m-1 rounded">
				{todo.isCompleted ? "Mark Incomplete" : "Mark Complete"}
			</button>

			<p>Status: {todo.isCompleted ? "✅ Completed" : "❌ Not Completed"}</p>
		</div>
	);
};

export default Dialog;
