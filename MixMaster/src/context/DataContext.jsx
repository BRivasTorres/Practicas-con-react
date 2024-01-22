import { createContext, useEffect, useState } from "react";
import getData from "../services/getData";

const DataContext = createContext()

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getData("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            setData(res)
        };

        fetchData();
    }, []);
    
    const value = { data }   
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataContext
export {DataProvider}