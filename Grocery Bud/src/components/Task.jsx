const Task = ({ tasks }) => {
	return (
		<div>
			{tasks &&
				tasks.map((item) => {
					return (
						<div key={item.id} className="task w-[100%] mb-[1rem] ">
							<input type="checkbox" name="check" id="check" />
							<span className="text-[1rem]">{item.value}</span>
							<button className="bg-black text-white p-[.2rem] rounded-sm">
								Delete
							</button>
						</div>
					);
				})}
		</div>
	);
};

export default Task;
