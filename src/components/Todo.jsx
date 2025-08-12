import { useTodos } from "../hooks/useTodos";
import { useState } from "react";

const Todo = ({ todo, onOpenDialog }) => {
	const { dispatch } = useTodos();
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(todo.title);

	const handleDelete = (e) => {
		e.stopPropagation();
		dispatch({ type: "REMOVE_TODO", payload: todo.id });
	};

	const handleToggleComplete = (e) => {
		e.stopPropagation();
		dispatch({ type: "TOGGLE_TODO", payload: todo.id });
	};

	const handleEdit = (e) => {
		e.stopPropagation();
		setIsEditing(true);
	};

	const handleSaveEdit = (e) => {
		e.stopPropagation();
		dispatch({
			type: "EDIT_TODO",
			payload: { id: todo.id, title: editedTitle },
		});
		setIsEditing(false);
	};

	return (
		<div className="bg-blue-200 my-2 p-4 rounded-lg shadow-md flex items-center justify-between">
			<div
				className="flex-1 cursor-pointer"
				onClick={onOpenDialog}
				title="Show Details">
				{isEditing ? (
					<input
						type="text"
						value={editedTitle}
						onChange={(e) => setEditedTitle(e.target.value)}
						className="border p-1 mr-2"
						onClick={(e) => e.stopPropagation()}
					/>
				) : (
					<>
						<h3 className="text-lg font-semibold">{todo.title}</h3>
						<p className="text-gray-700">{todo.description}</p>
					</>
				)}
			</div>
			<div className="flex gap-1 ml-2">
				{isEditing ? (
					<button
						onClick={handleSaveEdit}
						className="bg-green-500 text-white px-2 py-1 rounded text-xs">
						Save
					</button>
				) : (
					<button
						onClick={handleEdit}
						className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
						Edit
					</button>
				)}
				<button
					onClick={handleDelete}
					className="bg-red-500 text-white px-2 py-1 rounded text-xs">
					Delete
				</button>
				<button
					onClick={handleToggleComplete}
					className="bg-gray-500 text-white px-2 py-1 rounded text-xs">
					{todo.isCompleted ? "UnCompleted" : "Completed"}
				</button>
			</div>
		</div>
	);
};

export default Todo;
