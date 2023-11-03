import Task from "./Task";

const GroceryBud = () => {
	return (
		<div className="w-[40%] mx-auto my-[4rem] bg-[#F8FAFC] max-w-[800px] shadow-sm flex flex-col items-center p-[3rem] rounded-md hover:shadow-lg transition-all duration-500 ease-linear">
			<h2 className="text-[2rem] mb-[2rem] ">Grocery Bud</h2>
			<form className="mb-[2rem] min-w-[300px] w-[100%] form ">
				<input
					type="text"
					className="bg-[#FFFFFF] p-[.5rem]  border-[2px] border-gray-200"
				/>
				<button className="bg-[#06B6D4] p-[.5rem] rounded-r-lg text-white">
					Add Item
				</button>
			</form>
			<Task />
		</div>
	);
};

export default GroceryBud;
