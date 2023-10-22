import { useState } from "react";

const Form = ({ handleParagraphs }) => {
	const [value, setValue] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<form
			action=""
			className="mt-[1rem] flex gap-2"
			onSubmit={handleSubmit}
		>
			<label htmlFor="" className="text-[1.5rem] font-semibold ">
				Paragrapsh:
			</label>
			<input
				type="number"
				name="amount"
				min="1"
				step="1"
				max="8"
				value={value}
				onChange={handleChange}
				className="bg-gray-400 rounded text-[1.3rem] p-[.5rem] font-semibold "
			/>
			<button
				className="bg-[#10B981] p-[.5rem] rounded text-white hover:shadow-xl"
				onClick={() => handleParagraphs(value)}
			>
				Generate
			</button>
		</form>
	);
};

export default Form;
