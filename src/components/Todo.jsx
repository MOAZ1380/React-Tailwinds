import Dialog from "./Dialog";

const Todo = ({ todo, todos, setTodos }) => {
	return (
		<div className="bg-blue-200 my-2 p-2 rounded">
			<Dialog todo={todo} todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default Todo;
