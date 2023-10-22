import Card from "./Card";
import { useState } from "react";
import data from "../mocks/data";

const Slider = () => {
	const [currItem, setCurrItem] = useState(data[0]);

	const handleClick = (btn) => {
		let currIndex = data.indexOf(currItem);
		let newItem;

		if (btn === "prev") {
			currIndex === 0
				? (newItem = data[data.length - 1])
				: (newItem = data[currIndex - 1]);
		} else if (btn === "next") {
			currIndex >= data.length - 1
				? (newItem = data[0])
				: (newItem = data[currIndex + 1]);
		}
		setCurrItem(newItem);
	};

	setInterval(() => {
		handleClick("next");
	}, 4000);

	return (
		<div className="w-[60%]">
			<Card handleClick={handleClick} currItem={currItem} />{" "}
		</div>
	);
};

export default Slider;
