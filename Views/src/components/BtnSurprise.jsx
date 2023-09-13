const BtnSurprise = ({ handleSurprise }) => {
	return (
		<div className="flex justify-center mt-[1rem]">
			<button
				className="bg-[#C1BEFF] text-[#645CFF] p-[.3rem] rounded hover:bg-[#3C3799] hover:text-[#fff] hover:shadow-lg active:bg-[#d0cfe4] active:text-[#fff] transition-all ease-linear duration-300"
				onClick={handleSurprise}
			>
				Surprime Me
			</button>
		</div>
	);
};

export default BtnSurprise;
