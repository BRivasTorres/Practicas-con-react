const Task = () => {
	return (
		<div className="task w-[100%]">
			<input type="checkbox" name="check" id="check" />
			<span className="text-[1.3rem] ">task</span>
			<button className="bg-black text-white p-[.2rem] rounded-sm">
				Delete
			</button>
		</div>
	);
};

export default Task;
