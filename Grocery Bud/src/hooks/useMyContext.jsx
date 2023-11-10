import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children, value }) => {
	const [contextValue, setContextValue] = useState(value);
	return (
		<MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
	);
};

export const useMyContext = () => {
	const contextValue = useContext(MyContext);
	if (contextValue === undefined) {
		throw new Error("Valor indefinido");
	}
	return contextValue;
};
