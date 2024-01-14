import { createContext, useState, useEffect } from "react"
import getData from "../services/APIData";
const KEY = "Lm3UWlMb6Zft0_PIu29e23CpTC7KHyO1vxcDjmn79F4";
const URL = "https://api.unsplash.com/search/photos?"


const APIContext = createContext()
const APIProvider = ({children}) => {
	const [query, setQuery] = useState("cat");
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true)
    
	useEffect(() => {
		handleRequest()
	}, [])
	
	const handleRequest = async () => {
		try {
			const result = await getData(
				`${URL}client_id=${KEY}&query=${query}`
			);
			setData(result);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false)
			console.log(error);
		}
	};

	const value = { setQuery, handleRequest, data, isLoading};

	return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
}

export {APIProvider}
export default APIContext