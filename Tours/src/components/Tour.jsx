import data from "../mocks/data";
import BtnInterested from "./BtnInterested";
import ShowBtn from "./ShowBtn";
import { useState } from "react";

const Tour = ({ updateTitle }) => {
	const [tours, setTours] = useState(data);

	const removeTour = (id) => {
		const updateTours = [...tours];
		updateTours.splice(id, 1);
		setTours(updateTours);
		updateTitle(tours.length);
	};

	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleExpandText = (index) => {
		setExpandedIndex(index === expandedIndex ? -1 : index);
	};

	return (
		<div className="flex flex-wrap gap-[2rem] mx-auto ">
			{tours.map((item, id) => {
				const initialText = () => {
					let textLength = item.description.length;
					let splitText = item.description.split("");
					let sliceText = splitText
						.slice(0, Math.floor(textLength / 2))
						.join("");
					return `${sliceText}...`;
				};

				return (
					<div
						key={id}
						className="bg-white flex flex-col flex-wrap w-[30%] min-w-[350px] relative tour-card"
					>
						<img
							src={item.img}
							alt={item.title}
							className="h-[300px] "
						/>
						<h2 className="font-semibold text-[1.5rem] px-[2rem] py-[1rem] ">
							{item.title}
						</h2>
						<p className="mx-[2rem]">
							{expandedIndex === id
								? item.description
								: initialText()}{" "}
							<ShowBtn setExpand={() => handleExpandText(id)} />{" "}
						</p>
						<span className="bg-greenColor text-[#fff]  w-[fit-content] p-[.4rem] absolute right-[0] text-end">
							{item.price}
						</span>
						<BtnInterested removeTour={() => removeTour(id)} />
					</div>
				);
			})}
		</div>
	);
};

export default Tour;
