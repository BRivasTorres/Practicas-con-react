import BtnRefresh from "./BtnRefresh";
import Tour from "./Tour";
import { useState } from "react";

const Tours = () => {
	const [title, settitle] = useState("Our Tours");
	const [isEmpty, setIsEmpty] = useState(false);

	const updateTitle = (length) => {
		let condition = length < 2;
		const updateTitle = condition ? "No tours left" : "Our Tours";
		setIsEmpty(condition);
		settitle(updateTitle);
	};

	return (
		<div className="w-[70%] py-[2rem] mx-auto">
			<div className="mb-8 flex flex-col items-center">
				<h2 className="text-center text-[3.5rem]">{title}</h2>
				{!isEmpty && (
					<div className="w-[100px] h-[6px] bg-greenColor rounded-[10px] my-0 mx-auto"></div>
				)}
				{isEmpty && <BtnRefresh />}
			</div>
			<Tour updateTitle={updateTitle} />
		</div>
	);
};

export default Tours;
