const Form = ({ handleSubmit, handleInput, input }) => {
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
