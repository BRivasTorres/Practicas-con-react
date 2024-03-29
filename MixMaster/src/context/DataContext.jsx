import { createContext, useEffect, useState } from "react";
import getData from "../services/getData";

const DataContext = createContext(null)

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [input, setInput] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await getData("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            setData(res)
            setIsLoading(false)
        };

        fetchData();
    }, []);

	const handleSubmitSearch = async(e) => {
		e.preventDefault();
        setIsLoading(true)
        const res = await getData(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
        setData(res)
        setIsLoading(false)
	};

	const handleSubmitChange = (e) => {
        setInput(e.target.value)
	};
    
    const value = { data, isLoading, handleSubmitChange, handleSubmitSearch, input }   
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export {DataProvider}
export default DataContext