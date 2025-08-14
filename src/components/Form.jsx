import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const Form = () => {
	const { dispatch } = useTodos();
	const [formData, setFormData] = useState({ title: "", details: "" });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.title) return;

		const newTodo = {
			id: Date.now(),
			title: formData.title,
			details: formData.details,
			isCompleted: false,
			completed_at: null,
			created_at: new Date().toISOString(),
			update_at: null,
		};

		dispatch({ type: "ADD_TODO", payload: newTodo });
		setFormData({ title: "", details: "" });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-4 rounded-lg shadow-sm border flex flex-col gap-3">
			<input
				type="text"
				placeholder="Title"
				name="title"
				value={formData.title}
				onChange={handleChange}
				className="border rounded px-3 py-2 w-full"
			/>
			<input
				type="text"
				placeholder="Details"
				name="details"
				value={formData.details}
				onChange={handleChange}
				className="border rounded px-3 py-2 w-full"
			/>
			<button
				type="submit"
				className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded transition">
				Add Todo
			</button>
		</form>
	);
};

export default Form;
