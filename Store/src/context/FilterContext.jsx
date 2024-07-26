import { createContext, useReducer, useState } from "react";
import productsData from "../mocks/ProductsData";

const FilterContext = createContext()

const initialState = {
    filterInputs: {
        inputPrice: 1000,
        inputSearch: "",
        isShippingFree: false,
        selectValues: {
            "select category" : "all",
            "select company" : "all",
            "sort-by" : "a-z"
        }
    },
    data: productsData
}

const filterReducer = (state, action) => {
    switch (action.type) {
    case "SET_PRICE": 
        return{
            ...state,
            filterInputs: {
                ...state.filterInputs,
                inputPrice: action.playload
            }
        }
    case "SET_SEARCH": 
        return{
            ...state,
            filterInputs: {
                ...state.filterInputs,
                inputSearch: action.playload
            }
        }
    case "TOGGLE_SHIPPING": 
        return{
            ...state,
            filterInputs: {
                ...state.filterInputs,
                isShippingFree: !state.filterInputs.isShippingFree
            }
        }
    case "SET_SELECT_VALUES": 
        return{
            ...state,
            filterInputs: {
                ...state.filterInputs,
                selectValues: {
                    ...state.filterInputs.selectValues,
                    [action.playload.name] : action.playload.value
                }
            }
        }
    case "RESET_FILTERS": 
        return initialState
    case "SET_DATA": 
        return {
            ...state,
            data: action.playload
        }
            
    default: return state;
    }
}

const FilterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, initialState)
    const handleChangePrice = (e) => {
        dispatch({ type : "SET_PRICE", playload: e.target.value})
    }
    
    const handleInputSearch = (e) => {
        console.log(e.target.value)
        dispatch({ type : "SET_SEARCH", playload: e.target.value})
    }
    
    const handleShippingFree = () => {
        dispatch({type: "TOGGLE_SHIPPING"})
    }
    
    const handleSelectValues = (e) => {
        dispatch({type: "SET_SELECT_VALUES", playload: {name : e.target.name, value : e.target.value}})
    }
    
    const handleReset = () => {
        dispatch({type: "RESET_FILTERS"})
    }
    
    const handleButtonSearch = () => {
        const { inputSearch, selectValues, inputPrice, isShippingFree } =
			state.filterInputs;    
        
        const filters = [
            (element) =>
                inputSearch === "all" ||
				element.attributes.title.includes(inputSearch),
            (element) =>
                selectValues["select category"] === "all" ||
				element.attributes.category === selectValues["select category"],
            (element) =>
                selectValues["select company"] === "all" ||
				element.attributes.company === selectValues["select company"],
            (element) =>
                parseInt(element.attributes.price) <= parseInt(inputPrice),
            (element) =>
                !isShippingFree ||
				element.attributes.isShippingFree === isShippingFree,
        ];
                
        const combinedFilter = productsData.filter(element =>
            filters.every(filter => filter(element))
        )        
        
        const orderedData = selectValues["sort-by"] === "a-z"
            ? combinedFilter.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title))
            : combinedFilter.sort((a, b) => b.attributes.title.localeCompare(a.attributes.title))
        
        // console.log("data changed", initialState.data)
        dispatch({type: "SET_DATA", playload: orderedData})    
            
        // setData(orderedData)
    }
    
    return <FilterContext.Provider value={{
        filterInputs: state.filterInputs, 
        handleChangePrice, 
        handleInputSearch, 
        handleShippingFree, 
        handleSelectValues,
        handleReset, 
        handleButtonSearch,
        data: state.data
    }}>{children}</FilterContext.Provider>
}

export default FilterContext
export {FilterContextProvider}