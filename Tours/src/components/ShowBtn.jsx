import { useState } from "react";

const ShowBtn = () => {
	const [show, setShow] = useState(true);

	const handleShow = () => {
		setShow(!show);
	};

	return (
		<button className="text-[#10B981] font-semibold" onClick={handleShow}>
			{show ? "Read More" : "Show Less"}{" "}
		</button>
	);
};

export default ShowBtn;
