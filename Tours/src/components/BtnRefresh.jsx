import { useTours } from "./ToursContext";

const BtnRefresh = () => {
	const { refreshTours } = useTours();

	return (
		<button
			className="w-[6rem] bg-greenColor text-[1rem] p-[.5rem] text-[#fff] hover:bg-[#047857] text-[fit-contetn] rounded mt-4"
			onClick={refreshTours}
		>
			Refresh
		</button>
	);
};

export default BtnRefresh;
