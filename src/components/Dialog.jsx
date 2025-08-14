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

	useEffect(() => {
		const onKeyDown = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [onClose]);
	return (
		<div className="bg-white rounded-2xl shadow-2xl p-6 min-w-[320px] max-w-[95vw] border border-gray-200">
			{mode === "edit" && (
				<div>
					<input
						type="text"
						value={editedTitle}
						onChange={(e) => setEditedTitle(e.target.value)}
						className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-2 rounded-lg w-full mb-4 text-lg font-semibold transition"
						placeholder="Title"
					/>
					<textarea
						value={editedDetails}
						onChange={(e) => setEditedDetails(e.target.value)}
						className="border border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 p-2 rounded-lg w-full mb-4 min-h-[80px] transition"
						placeholder="Details (optional)"
					/>
				</div>
			)}

			{mode === "delete" && (
				<div className="text-center">
					<h3 className="text-xl font-bold mb-2 text-red-600">
						Are you sure you want to delete this todo?
					</h3>
					<p className="text-gray-600 break-words italic">{todo.title}</p>
				</div>
			)}

			{mode === "view" && (
				<div>
					<h3 className="text-2xl font-bold mb-2 break-words text-blue-700">
						{todo.title}
					</h3>
					<p className="text-gray-600 break-words mb-2">
						{todo.details || "No details"}
					</p>
					<p className="mt-2 text-sm font-medium">
						Status:{" "}
						{todo.isCompleted ? (
							<span className="text-green-600">✅ Completed</span>
						) : (
							<span className="text-yellow-600">❌ Not Completed</span>
						)}
					</p>
				</div>
			)}

			{mode !== "toggle" && (
				<div className="mt-6 flex gap-3 justify-end">
					<button
						onClick={handleAction}
						className={`px-4 py-2 rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
							mode === "delete"
								? "bg-red-500 hover:bg-red-600 text-white"
								: "bg-green-500 hover:bg-green-600 text-white"
						}`}>
						{mode === "edit"
							? "Save Changes"
							: mode === "delete"
							? "Delete"
							: "Close"}
					</button>
					{mode != "view" && (
						<button
							onClick={onClose}
							className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2">
							Close
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Dialog;
