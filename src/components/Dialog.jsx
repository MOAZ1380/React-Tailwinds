import { useState } from "react";

const Dialog = ({ todo, todos, setTodos }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(todo.title);

	const handleDelete = () => {
		setTodos(todos.filter((t) => t.id !== todo.id));
	};

	const handleSaveEdit = () => {
		setTodos(
			todos.map((t) => (t.id === todo.id ? { ...t, title: editedTitle } : t)),
		);
		setIsEditing(false);
	};

	const handleToggleComplete = () => {
		setTodos(
			todos.map((t) =>
				t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t,
			),
		);
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
