import Form from "./Form";
import Task from "./Task";
import { useLocalStorage } from "../hooks/useLoccalStorage";
import { useEffect, useState } from "react";
import { v4 as id } from "uuid";
import { notify } from "../helpers/notify";
import { ToastContainer } from "react-toastify";

const GroceryBud = () => {
	const { setItem, deleteItem, getItem } = useLocalStorage("value");

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
			notify("success", "Item added successfylly");
		} else {
			notify("warning", "Please provide something to add");
		}
		setItem(tasks);
	};

	const handleDelete = (id) => {
		deleteItem(id);
		setTasks(getItem);
		notify("success", "Item deleted");
	};

	useEffect(() => {
		setItem(tasks);
	}, [tasks]);

	return (
		<div className="w-[40%] mx-auto my-[4rem] bg-[#F8FAFC] max-w-[800px] shadow-sm flex flex-col items-center p-[3rem] rounded-md hover:shadow-lg transition-all duration-500 ease-linear">
			<h2 className="text-[2rem] mb-[2rem]">Grocery Bud</h2>
			<Form
				handleInput={handleInput}
				handleSubmit={handleSubmit}
				input={input}
			/>
			<Task tasks={tasks} handleDelete={handleDelete} />
			<ToastContainer />
		</div>
	);
};

export default GroceryBud;
