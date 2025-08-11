import React, { useState } from "react";
const Form = ({ todos, setTodos }) => {
	const [formData, setFormData] = useState({ title: "", details: "" });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		console.log("Form submitted:", formData);
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
		console.log("New todo added:", newTodo, formData);
	};

	return (
		<div>
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
		</div>
	);
};

export default Form;
