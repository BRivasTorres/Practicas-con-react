import Card from "./Card";
import { useState } from "react";
import data from "../mocks/data";

const Slider = () => {
	const [currItem, setCurrItem] = useState(data[0]);

	const handleClick = (btn) => {
		let currIndex = data.indexOf(currItem);

		if (currIndex < 0) {
			setCurrItem(data[data.length - 1]);
		} else if (currIndex > data.length - 1) {
			setCurrItem(data[0]);
		}

		if (btn === "prev") {
			setCurrItem(data[currIndex - 1]);
		} else if (btn === "next") {
			setCurrItem(data[currIndex + 1]);
		}
	};

	return (
		<div className="w-[60%]">
			<Card handleClick={handleClick} currItem={currItem} />{" "}
		</div>
	);
};

export default Slider;
