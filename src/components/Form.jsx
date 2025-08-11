import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const Form = () => {
	const { todos, setTodos } = useTodos();
	const [formData, setFormData] = useState({ title: "", details: "" });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.title || !formData.details) return;

		const newTodo = {
			id: Date.now(),
			title: formData.title,
			details: formData.details,
			isCompleted: false,
		};

		setTodos([...todos, newTodo]);
		setFormData({ title: "", details: "" });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Title"
				name="title"
				value={formData.title}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="Details"
				name="details"
				value={formData.details}
				onChange={handleChange}
			/>
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default Form;
