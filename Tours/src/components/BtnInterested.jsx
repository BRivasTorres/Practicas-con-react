const BtnInterested = ({ removeTour }) => {
	return (
		<button
			className="text-customGreen border-customGreen border-[2px] mx-[2rem] my-[1rem] font-semibold p-[.4rem] hover:bg-greenColor hover:text-white ease-in duration-300 "
			onClick={removeTour}
		>
			Not Interested
		</button>
	);
};

export default BtnInterested;
