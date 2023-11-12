<<<<<<< HEAD
const Form = ({ handleSubmit, handleInput, input, handleNotify }) => {
=======
import { useEffect, useState } from "react";
import { v4 as id } from "uuid";
import { useLocalStorage } from "../hooks/useLoccalStorage";

const Form = () => {
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
		}
		setItem(tasks);
	};

	const handleDelete = (id) => {
		setTasks(getItem);
		deleteItem(id);
	};

	useEffect(() => {
		setItem(tasks);
	}, [tasks]);

>>>>>>> parent of 1d3d1b6 (refactor : refactorizacion de comoponentes form, notification y tasks)
	return (
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
			<button className="bg-[#06B6D4] p-[.5rem] rounded-r-lg text-white">
				Add Item
			</button>
		</form>
	);
};

export default Form;
