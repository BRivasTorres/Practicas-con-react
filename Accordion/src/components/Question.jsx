import { useState } from "react";
import data from "../mocks//data";
import BtmExpandReduce from "./BtmExpandReduce";

const Question = () => {
	const [expand, setExpand] = useState(
		data.map((ele) => ({
			...ele,
			isExpanded: false,
		}))
	);
	const [icon, setIcon] = useState(false);

	const handleExpand = (id) => {
		setExpand((prevExpand) => {
			return prevExpand.map((ele) => {
				if (ele.id === id) {
					return { ...ele, isExpanded: !ele.isExpanded };
				} else {
					return ele;
				}
			});
		});
	};

	const handleIcon = (i) => {
		
	};

	return (
		<div className="p-[2rem] flex flex-col justify-between mt-8">
			<h2 className="text-center text-[3rem] font-semibold ">
				Questions
			</h2>
			{expand.map((element) => {
				return (
					<div
						key={element.id}
						className=" p-[1rem] shadow-lg mb-8 rounded-[10px]"
					>
						<div className="flex justify-between items-center ">
							<div className="p-4 ">
								<h3 className="text-[1.3rem]">
									{element.title}
								</h3>
								<p
									className={
										element.isExpanded === false
											? "invisible"
											: "mt-[.5rem] "
									}
								>
									{element.info}{" "}
								</p>
							</div>
							<BtmExpandReduce
								handleExpand={() => handleExpand(element.id)}
								handleIcon={}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Question;
