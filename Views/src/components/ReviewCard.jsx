import data from "../mocks/data";
import BtnSurprise from "./BtnSurprise";
import PrevNextBtns from "./PrevNextBtns";
import { useState } from "react";

const ReviewCard = () => {
	const [currPerson, setCurrPerson] = useState(0);

	const handleNext = () => {
		if (currPerson === data.length - 1) {
			setCurrPerson(0);
		} else {
			setCurrPerson(currPerson + 1);
		}
	};

	const handlePrev = () => {
		if (currPerson === 0) {
			setCurrPerson(data.length - 1);
		} else {
			setCurrPerson(currPerson - 1);
			console.log(currPerson);
			console.log(data.length - 1);
		}
	};

	const handleSurprise = () => {
		let max = data.length;
		let randomPerson = Math.floor(Math.random() * max);
		setCurrPerson(randomPerson);
	};

	return (
		<div className="p-[2rem]">
			<div key={data[currPerson].id} className=" mx-auto">
				<img
					src={data[currPerson].image}
					alt=""
					className="w-[150px] h-[150px] rounded-full mx-auto"
				/>
				<h2 className="text-center text-[2rem] mt-[.5rem] ">
					{data[currPerson].name}
				</h2>
				<h3 className="uppercase text-center text-[1rem] mb-[1rem] text-[#645CFF] font-semibold ">
					{data[currPerson].job}
				</h3>
				<p className="text-center">{data[currPerson].text}</p>
			</div>
			<PrevNextBtns handlePrev={handlePrev} handleNext={handleNext} />
			<BtnSurprise handleSurprise={handleSurprise} />
		</div>
	);
};

export default ReviewCard;
