import { createContext, useContext } from "react";
import data from "../mocks/data";

const ToursContext = createContext(data);
export const ToursProvider = ({ children }) => {
	const refreshTours = () => {
		window.location.reload();
	};

	return (
		<ToursContext.Provider value={{ refreshTours }}>
			{children}
		</ToursContext.Provider>
	);
};

export const useTours = () => {
	return useContext(ToursContext);
};
