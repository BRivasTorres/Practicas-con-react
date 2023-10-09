import Categories from "./Categories";
import Foods from "./Foods";
import { createContext, useState } from "react";
import data from "../mocks/data";
export const dataContext = createContext();

const Menu = () => {
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
			<div className="w-[70%] mx-auto pt-[2rem]">
				<Categories handleCategories={handleCategories} />
				<Foods />
			</div>
		</dataContext.Provider>
	);
};

export default Menu;
