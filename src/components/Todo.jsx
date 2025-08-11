import Dialog from "./Dialog";

const Todo = ({ todo }) => {
	return (
		<div className="bg-blue-200 my-2 p-2 rounded">
			<Dialog todo={todo} />
		</div>
	);
};

export default Todo;
