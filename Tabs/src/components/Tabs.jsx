import { createContext, useState } from "react";
import DataCard from "./DataCard";
import Names from "./Names";
import data from "../mocks/data";

export const DataContext = createContext();

const Tabs = () => {
	const [currData, setCurrData] = useState(data[0]);

	const handleCurr = (id) => {
		setCurrData(data[id]);
	};

	return (
		<DataContext.Provider value={currData}>
			<div className="mx-auto flex gap-[2rem] p-[3rem] ">
				<Names handleCurr={handleCurr} />
				<DataCard />
			</div>
		</DataContext.Provider>
	);
};

export default Tabs;
