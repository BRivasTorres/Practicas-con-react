import ButtonClear from "./ButtonClear";
import { useState } from "react";

const DataList = ({ data }) => {
	const [clear, setClear] = useState(data);

	const handleDelete = () => {
		setClear([]);
	};

	return (
		<div className="p-[2rem] bg-[#FFFFFF] rounded-[1rem] ">
			<h2 className="text-[3rem]  mb-8">
				{clear.length > 0 ? 5 : 0} Birthdays today
			</h2>
			{clear.length > 0
				? clear.map((item) => (
						<div
							key={item.id}
							className=" flex gap-[2rem] mb-[30px]"
						>
							<div>
								<img
									src={item.image}
									alt={item.name}
									className="rounded-[50%] w-[75px] h-[75px] "
								/>
							</div>
							<div>
								<h3 className="text-[2rem] font-[500] ">
									{item.name}
								</h3>
								<h5>{item.age} years</h5>
							</div>
						</div>
				  ))
				: ""}

			<ButtonClear handleDelete={handleDelete} />
		</div>
	);
};

export default DataList;
