import Task from "./Task";
import { useEffect, useState } from "react";
import { v4 as id } from "uuid";
import { useLocalStorage } from "../hooks/useLoccalStorage";
import Notification from "./Notification";

const GroceryBud = () => {
	const { setItem, deleteItem, getItem } = useLocalStorage("value");

	const [notify, setNotify] = useState(false);
	const [input, setInput] = useState("");
	const [tasks, setTasks] = useState(getItem);

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim() !== "") {
			setTasks([...tasks, { id: id(), value: input }]);
			setInput("");
		}
		setItem(tasks);
	};

	const handleDelete = (id) => {
		setTasks(getItem);
		deleteItem(id);
	};

	const handleNotify = () => {
		setNotify(true);
	};

	useEffect(() => {
		setItem(tasks);
	}, [tasks]);
	//TODO organizar codigo, hacer funciomaniemto correcto del componente notification y hacerlo funcionabe.
	return (
		<div className="w-[40%] mx-auto my-[4rem] bg-[#F8FAFC] max-w-[800px] shadow-sm flex flex-col items-center p-[3rem] rounded-md hover:shadow-lg transition-all duration-500 ease-linear">
			<h2 className="text-[2rem] mb-[2rem] ">Grocery Bud</h2>
			<form
				className="mb-[2rem] min-w-[300px] w-[100%] form"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					value={input}
					onChange={handleInput}
					className="bg-[#FFFFFF] p-[.5rem]  border-[2px] border-gray-200"
				/>
				<button
					className="bg-[#06B6D4] p-[.5rem] rounded-r-lg text-white"
					onClick={handleNotify}
				>
					Add Item
					{notify && (
						<Notification
							type="success"
							message="added to the list"
						/>
					)}
				</button>
			</form>
			<Task tasks={tasks} handleDelete={handleDelete} />
		</div>
	);
};

export default GroceryBud;
