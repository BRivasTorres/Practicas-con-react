import { createContext, useContext, useState } from "react";
import data from "../mocks/data";

const ToursContext = createContext(data);
export const ToursProvider = ({ children }) => {
	const [toursData, setToursData] = useState(data);

	const refreshTours = () => {
		setToursData(data);
		console.log(toursData);
	};

	return (
		<ToursContext.Provider value={{ toursData, refreshTours }}>
			{children}
		</ToursContext.Provider>
	);
};

export const useTours = () => {
	return useContext(ToursContext);
};
