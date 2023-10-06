const Buttons = ({ text }) => {
	return (
		<div>
			<button className="bg-orange-menu rounded px-[1rem] text-white shadow-lg text-[1.3rem] ">
				{text}
			</button>
		</div>
	);
};

export default Buttons;
