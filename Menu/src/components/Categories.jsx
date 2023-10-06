import { createContext, useState } from "react";
import Buttons from "./Buttons";
import data from "../mocks/data";

export const dataContext = createContext(data);

const Categories = () => {
	const [dataCurr, setDataCurr] = useState(data);

	const handleCategories = (category) => {
		let filterData;
		if (category === "all") {
			filterData = data;
		} else {
			filterData = data.filter((item) => item.category === category);
		}
		setDataCurr(filterData);
	};

	return (
		<dataContext.Provider value={dataCurr}>
			<div className=" w-[50%] m-auto">
				<h2 className="text-[3rem] text-center ">Our Menu</h2>
				<div className="w-[160px] h-[5px] rounded mx-auto bg-orange-menu"></div>

				<div className="mt-[1.5rem] flex gap-[1rem] justify-center flex-wrap ">
					<Buttons
						text="All"
						handleClick={() => handleCategories("all")}
					/>
					<Buttons
						text="Breakfast"
						handleClick={() => handleCategories("breakfast")}
					/>
					<Buttons
						text="Lunch"
						handleClick={() => handleCategories("lunch")}
					/>
					<Buttons
						text="Shakes"
						handleClick={() => handleCategories("shakes")}
					/>
				</div>
			</div>
		</dataContext.Provider>
	);
};

export default Categories;
