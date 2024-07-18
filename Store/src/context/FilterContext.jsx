import { createContext, useState } from "react";
import productsData from "../mocks/ProductsData";

const FilterContext = createContext()

const FilterContextProvider = ({children}) => {
    const [filterInputs, setFilterInputs] = useState({
        inputPrice: 1000,
        inputSearch: " ",
        isShippingFree: false,
        selectValues: {
            "select category": "all",
            "select company": "all",
            "sort-by": "a-z",
        },
    });
    const [data, setData] = useState(productsData) 
    
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
        setData(productsData)
    }
    
    const handleButtonSearch = () => {
        const searchedValue = filterInputs.inputSearch
        const selectedCategory = filterInputs.selectValues["select category"]
        const selectedCompany = filterInputs.selectValues["select company"]
        const selectedOrder = filterInputs.selectValues["sort-by"]
        const selectedPrice = filterInputs.inputPrice
        const isShippingFree = filterInputs.isShippingFree
        
        const filters = [
            (element) =>
                searchedValue === "all" ||
				element.attributes.title.includes(searchedValue),
            (element) =>
                selectedCategory === "all" ||
				element.attributes.category === selectedCategory,
            (element) =>
                selectedCompany === "all" ||
				element.attributes.company === selectedCompany,
            (element) =>
                parseInt(element.attributes.price) <=
				parseInt(selectedPrice),
            (element) => 
                isShippingFree === false ||   
                element.attributes.shipping === isShippingFree,
        ];
                
        const combinedFilter = productsData.filter(element =>
            filters.every(filter => filter(element))
        )        
        
        const orderedData = selectedOrder === "a-z"
            ? combinedFilter.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title))
            : combinedFilter.sort((a, b) => b.attributes.title.localeCompare(a.attributes.title))
        
        setData(orderedData)
    }
    
    return <FilterContext.Provider value={{
        filterInputs, 
        handleChangePrice, 
        handleInputSearch, 
        handleShippingFree, 
        handleSelectValues,
        handleReset, 
        handleButtonSearch,
        data
    }}>{children}</FilterContext.Provider>
}

export default FilterContext
export {FilterContextProvider}