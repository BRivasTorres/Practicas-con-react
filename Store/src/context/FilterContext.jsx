import { createContext, useState, useEffect } from "react";

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
    const [isMultipleGrid, setIsMultipleGrid] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(9);
    
    
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
    
    const handleIsMultipleGrid = (state) => {
        setIsMultipleGrid(state);
    };
    
    const handleCurrentPage = (newPage) => {
        if (newPage === "prev") {
            currentPage === 1
                ? setCurrentPage(3)
                : setCurrentPage((prevVal) => prevVal - 1);
        } else if (newPage === "next") {
            currentPage === 3
                ? setCurrentPage(1)
                : setCurrentPage((prevVal) => prevVal + 1);
        } else {
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        const handleIndexes = () => {
            setStartIndex((currentPage - 1) * 10);
            setEndIndex(currentPage * 10);
        };
        handleIndexes();
    }, [currentPage]);
    
    const handleButtonSearch = () => {
        
    }
    
    return <FilterContext.Provider value={{
        filterInputs, 
        handleChangePrice, 
        handleInputSearch, 
        handleShippingFree, 
        handleSelectValues, 
        handleReset, 
        handleIsMultipleGrid, 
        isMultipleGrid, 
        handleCurrentPage, 
        currentPage,
        startIndex, 
        endIndex
    }}>{children}</FilterContext.Provider>
}

export default FilterContext
export {FilterContextProvider}