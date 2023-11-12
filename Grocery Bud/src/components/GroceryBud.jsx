import { useLocalStorage } from "../hooks/useLoccalStorage";
import Form from "./Form";
import Task from "./Task";
import { useEffect, useState } from "react";
import { v4 as id } from "uuid";
import { useLocalStorage } from "../hooks/useLoccalStorage";

const GroceryBud = () => {
	const { deleteItem, getItem, setItem } = useLocalStorage("value");
	const [items, setItems] = useState([]);

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
		setItems(getItem);
		deleteItem(id);
		console.log("item deleted");
	};

	useEffect(() => {
		setItem(items);
		handleItems(items);
	}, [items]);

	return (
		<div className="w-[40%] mx-auto my-[4rem] bg-[#F8FAFC] max-w-[800px] shadow-sm flex flex-col items-center p-[3rem] rounded-md hover:shadow-lg transition-all duration-500 ease-linear">
			<h2 className="text-[2rem] mb-[2rem] ">Grocery Bud</h2>
			<Form
				handleInput={handleInput}
				handleSubmit={handleSubmit}
				input={input}
			/>
			<Task tasks={tasks} handleDelete={handleDelete} />
		</div>
	);
};

export default GroceryBud;
