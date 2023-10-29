import { useState } from "react";

const Form = () => {
	const [color, setColor] = useState("#a9381a");
	const [text, setText] = useState(color);
	const [colorBtn, setColorBtn] = useState("#645CFF");

	const handleChange = (e) => {
		if (e.target.type === "color") {
			setColor(e.target.value);
			setText(e.target.value);
			setColorBtn(e.target.value);
		} else if (e.target.type === "text") {
			setText(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-[50%]  p-[3rem] flex items-center border border-green-800 grow "
		>
			<h2 className="text-[2rem] ">Color Generator</h2>
			<div className="flex items-center ml-[2rem] h-[3.5rem]">
				<input
					type="color"
					value={color}
					onChange={handleChange}
					className="mr-[.4rem] w-[3rem] h-[2.5rem] border-none "
				/>
				<input
					type="text"
					onChange={handleChange}
					value={text}
					className="text-[1.5rem] text-gray-400 "
				/>
				<button
					style={{ backgroundColor: colorBtn }}
					className={`text-[1rem] p-[.5rem] rounded-r-lg text-white`}
					onSubmit={handleSubmit}
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;
