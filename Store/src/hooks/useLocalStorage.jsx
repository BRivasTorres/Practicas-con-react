import { useState, useEffect } from "react"

const useLocalStorage = (key) => {
    const [map, setMap] = useState(new Map())
    const [cartSize, setCartSize] = useState(map.size)
    
    useEffect(() => {
        const storedData = localStorage.getItem(key)
        
        if(storedData) {
            const parsedData = JSON.parse(storedData)
            setMap(new Map(parsedData))
        }
    }, [key]);
    
    useEffect(() => {
        
        setCartSize(map.size)
        
    }, [map]);
    
    const setItem = (k, v) => {
        setMap((prevMap) => {
            const newMap = new Map(prevMap)
            newMap.set(k, v)
            window.localStorage.setItem(key, JSON.stringify(Array.from(newMap.entries())))
            return newMap
        })
        setCartSize(map.size)
    }
    
    const hasItem = (k) => {
        return map.has(k)
    }
    
    const getItem = (k) => {
        return map.get(k)
    }
    
    const removeItem = (k) => {
        setMap((prevMap) => {
            const newMap = new Map(prevMap)
            newMap.delete(k)
            window.localStorage.setItem(key, JSON.stringify(Array.from(newMap.entries())))
            return newMap
        })
    }
    
    return {setItem, hasItem, getItem, removeItem, map, cartSize }
}

export default useLocalStorage