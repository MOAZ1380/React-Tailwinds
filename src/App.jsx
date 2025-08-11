import { TodoProvider } from "./context/TodoProvider";
import TodoList from "./components/TodoList";

export default function App() {
	return (
		<TodoProvider>
			<TodoList />
		</TodoProvider>
	);
}
