import Tour from "./Tour";
import { useState } from "react";

const Tours = () => {
	const [title, settitle] = useState("Our Tours");
	const updateTitle = (length) => {
		const updateTitle = length < 2 ? "No tours left" : "Our Tours";
		settitle(updateTitle);
	};

	return (
		<div className="w-[70%] py-[2rem] mx-auto hover:shadow-md">
			<div className="mb-8">
				<h2 className="text-center text-[3.5rem]">{title}</h2>
				<div className="w-[100px] h-[6px] bg-greenColor rounded-[10px] my-0 mx-auto"></div>
			</div>
			<Tour updateTitle={updateTitle} />
		</div>
	);
};

export default Tours;
