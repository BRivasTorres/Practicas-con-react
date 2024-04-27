import { createContext, useState } from "react";

const FilterContext = createContext()

const FilterContextProvider = ({children}) => {
        
    const [filterInputs, setFilterInputs] = useState({
        inputPrice: 1000,
        inputSearch: "",
        isShippingFree: false,
        selectValues: {
            selectCategory: "all",
            selectCompany: "all",
            sortBy: "a-z"
        }
    })
    
    const handleChangePrice = (e) => {
        setFilterInputs({
            ...filterInputs,
            inputPrice: e.target.value 
        })
    }
    
    const handleInputSearch = (e) => {
        setFilterInputs({
            ...filterInputs,
            inputSearch: e.target.value
        })
    }
    
    const handleShippingFree = () => {
        setFilterInputs({
            ...filterInputs,
            isShippingFree: !filterInputs.isShippingFree
        })
    }
    
    const handleSelectValues = (e) => {
        const {name, value} = e.target
        setFilterInputs({
            ...filterInputs,
            selectValues : {
                ...filterInputs.selectValues,
                [name] : value
            }
        })
    }
    
    return <FilterContext.Provider value={{filterInputs, handleChangePrice, handleInputSearch, handleShippingFree, handleSelectValues}}>{children}</FilterContext.Provider>
}

export default FilterContext
export {FilterContextProvider}