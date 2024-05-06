import { createContext, useState } from "react";

const FilterContext = createContext()

const FilterContextProvider = ({children}) => {
    const [filterInputs, setFilterInputs] = useState({
		inputPrice: 1000,
		inputSearch: "",
		isShippingFree: false,
		selectValues: {
			"select category": "all",
			"select company": "all",
			"sort-by": "a-z",
		},
	});
    
    const handleChangePrice = (e) => {
        setFilterInputs(prevSearch => ({
            ...prevSearch,
            inputPrice: e.target.value 
        }))
    }
    
    const handleInputSearch = (e) => {
        setFilterInputs(prevVal => ({
            ...prevVal,
            inputSearch: e.target.value
        }))
    }
    
    const handleShippingFree = () => {
        setFilterInputs(prevState => ({
            ...prevState,
            isShippingFree: !filterInputs.isShippingFree
        }))
    }
    
    const handleSelectValues = (e) => {
        const {name, value} = e.target
        setFilterInputs(prevVal => ({
            ...prevVal,
            selectValues : {
                ...filterInputs.selectValues,
                [name] : value
            }
        }))
    }
    
    const handleReset = () => {
        setFilterInputs({
                inputPrice: 1000,
                inputSearch: "",
                isShippingFree: false,
                selectValues: {
                    "select category": "all",
                    "select company": "all",
                    "sort-by": "a-z",
			}}
        )
    }
    
    return <FilterContext.Provider value={{filterInputs, handleChangePrice, handleInputSearch, handleShippingFree, handleSelectValues, handleReset }}>{children}</FilterContext.Provider>
}

export default FilterContext
export {FilterContextProvider}