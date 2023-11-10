import { useLocalStorage } from "../hooks/useLoccalStorage";
import Form from "./Form";
import Task from "./Task";
import { useState, useEffect } from "react";

const GroceryBud = () => {
	const { deleteItem, getItem, setItem } = useLocalStorage("value");
	const [items, setItems] = useState([]);

	const handleItems = (args) => {
		setItems(args);
	};

	const handleDelete = (id) => {
		setItems(getItem);
		deleteItem(id);
	};

	useEffect(() => {
		setItem(items);
		handleItems(items);
	}, [items]);

	return (
		<div className="w-[40%] mx-auto my-[4rem] bg-[#F8FAFC] max-w-[800px] shadow-sm flex flex-col items-center p-[3rem] rounded-md hover:shadow-lg transition-all duration-500 ease-linear">
			<h2 className="text-[2rem] mb-[2rem] ">Grocery Bud</h2>
			<Form handleItems={handleItems} />
			<Task items={items} handleDelete={handleDelete} />
			{console.log(items)}
		</div>
	);
};

export default GroceryBud;
