import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const Colors = () => {
	const [list, setList] = useState(new Values("#f15025").all(10));
	return (
		<section className="colors">
			{list.map((color, index) => {
				return (
					<SingleColor
						key={index}
						{...color}
						index={index}
						hexColor={color.hex}
					/>
				);
			})}
		</section>
	);
};

export default Colors;
