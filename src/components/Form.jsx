import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const Form = () => {
	const { dispatch } = useTodos();
	const [formData, setFormData] = useState({
		title: "",
		details: "",
		priority: "Low",
	});

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
			priority: formData.priority,
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
			className="bg-white/90 p-6 rounded-2xl shadow-xl border border-blue-100 flex flex-col gap-4 mt-2">
			<h2 className="text-xl font-bold text-blue-700 mb-2 text-center tracking-tight">
				Add a New Todo
			</h2>
			<input
				type="text"
				placeholder="Title"
				name="title"
				value={formData.title}
				onChange={handleChange}
				className="border-2 border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-lg px-4 py-2 w-full text-base transition"
			/>
			<input
				type="text"
				placeholder="Details"
				name="details"
				value={formData.details}
				onChange={handleChange}
				className="border-2 border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-lg px-4 py-2 w-full text-base transition"
			/>
			<select
				name="priority"
				value={formData.priority}
				onChange={handleChange}
				className="border-2 border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-lg px-4 py-2 w-full text-base transition">
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>
			<button
				type="submit"
				className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold text-lg shadow-md transition mt-2">
				Add Todo
			</button>
		</form>
	);
};

export default Form;
