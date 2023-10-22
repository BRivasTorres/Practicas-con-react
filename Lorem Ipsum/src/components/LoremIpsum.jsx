import { useState } from "react";
import Form from "./Form";
import data from "../mocks/data";

const LoremIpsum = () => {
	const [paragraphs, setParagraphs] = useState(0);

	const handleParagraphs = (items) => {
		console.log(items, paragraphs);
		setParagraphs(items);
	};

	return (
		<div className="w-[40%] my-[8rem] flex flex-col items-center">
			<h2 className="uppercase text-[2rem] font-semibold ">
				tired of boring lorem ipsum
			</h2>
			<Form handleParagraphs={handleParagraphs} />
			<article>
				{data.map((item, i) => {
					if (i < paragraphs) {
						return (
							<p key={i} className="my-[2rem] ">
								{item}
							</p>
						);
					} else {
						return;
					}
				})}
			</article>
		</div>
	);
};

export default LoremIpsum;
