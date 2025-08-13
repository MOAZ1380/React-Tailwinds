import { useTodos } from "../hooks/useTodos";
import { useState, useEffect } from "react";

const Dialog = ({ todo, mode, onClose }) => {
	const { dispatch } = useTodos();
	const [editedTitle, setEditedTitle] = useState(todo.title);
	const [editedDetails, setEditedDetails] = useState(todo.details || "");

	// Sync state when todo changes
	useEffect(() => {
		setEditedTitle(todo.title);
		setEditedDetails(todo.details || "");
	}, [todo]);

	const handleAction = () => {
		switch (mode) {
			case "edit":
				dispatch({
					type: "EDIT_TODO",
					payload: {
						id: todo.id,
						title: editedTitle,
						details: editedDetails,
					},
				});
				break;

			case "delete":
				dispatch({ type: "REMOVE_TODO", payload: todo.id });
				break;
		}
		onClose();
	};

	return (
		<div className="p-4">
			{mode === "edit" && (
				<div>
					<input
						type="text"
						value={editedTitle}
						onChange={(e) => setEditedTitle(e.target.value)}
						className="border p-2 rounded w-full mb-4"
					/>
					<textarea
						value={editedDetails}
						onChange={(e) => setEditedDetails(e.target.value)}
						className="border p-2 rounded w-full mb-4"
						placeholder="Details (optional)"
					/>
				</div>
			)}

			{mode === "delete" && (
				<div>
					<h3 className="text-lg font-semibold mb-2">
						Are you sure you want to delete this todo?
					</h3>
					<p className="text-gray-500">{todo.title}</p>
				</div>
			)}

			{mode === "view" && (
				<div>
					<h3 className="text-lg font-semibold mb-2">{todo.title}</h3>
					<p className="text-gray-500 break-words">
						{todo.details || "No details"}
					</p>
					<p className="mt-2 text-sm">
						Status: {todo.isCompleted ? "✅ Completed" : "❌ Not Completed"}
					</p>
				</div>
			)}

			{mode !== "toggle" && (
				<div className="mt-4 flex gap-2">
					<button
						onClick={handleAction}
						className={`px-3 py-1 rounded text-white ${
							mode === "delete"
								? "bg-red-500 hover:bg-red-600"
								: "bg-green-500 hover:bg-green-600"
						}`}>
						{mode === "edit"
							? "Save Changes"
							: mode === "delete"
							? "Delete"
							: "Close"}
					</button>
					<button
						onClick={onClose}
						className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded">
						Close
					</button>
				</div>
			)}
		</div>
	);
};

export default Dialog;
