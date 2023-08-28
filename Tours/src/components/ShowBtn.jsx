import { useState } from "react";

const ShowBtn = ({ setExpand }) => {
	const [show, setShow] = useState(true);

	const handleShow = (index) => {
		setShow(!show);
		setExpand(index);
	};

	return (
		<button
			className="text-[#10B981] font-semibold"
			onClick={() => handleShow(setExpand)}
		>
			{show ? "Read More" : "Show Less"}{" "}
		</button>
	);
};

export default ShowBtn;
