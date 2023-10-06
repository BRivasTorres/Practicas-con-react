const Buttons = ({ text, handleClick }) => {
	return (
		<div>
			<button
				className="bg-orange-menu rounded px-[1rem] text-white shadow-lg text-[1.3rem] hover:bg-[#b45309] duration-500"
				onClick={handleClick}
			>
				{text}
			</button>
		</div>
	);
};

export default Buttons;
