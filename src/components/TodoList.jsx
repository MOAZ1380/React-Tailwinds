import Todo from "./Todo";
import Form from "./Form";
import { useTodos } from "../hooks/useTodos";

const TodoList = () => {
	const { todos } = useTodos();

	const activeTodos = todos.filter((todo) => !todo.isCompleted);
	const completedTodos = todos.filter((todo) => todo.isCompleted);

	return (
		<div className="w-[700px] m-auto mt-[70px]">
			<h1 className="text-2xl font-bold mb-4">Todo List</h1>
			{activeTodos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}

			<h2 className="text-xl font-semibold mt-6">Completed Todos</h2>
			{completedTodos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}

			<Form />
		</div>
	);
};

export default TodoList;
