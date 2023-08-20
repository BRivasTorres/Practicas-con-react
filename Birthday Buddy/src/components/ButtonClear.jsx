import React from "react";

const ButtonClear = ({ handleDelete }) => {
	return (
		<div>
			<button
				className="bg-[#D946EF] w-[100%] text-[#fff] p-[.5rem] rounded-[10px] hover:bg-[#A21CAF] hover:shadow-md transition-all duration-300"
				onClick={() => handleDelete()}
			>
				Clear All
			</button>
		</div>
	);
};

export default ButtonClear;
