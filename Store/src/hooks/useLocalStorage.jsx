import { useState, useEffect } from "react"

//TODO el problema es que el contexto global "map" no es seguido de manera correca en el componente cart y order summary, es decir este contexto es actualizado, pero esta actualizacion no es tomada por los demas componentes

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
    
    const updateItem = (item, newVal) => {
        setMap((prevMap) => {
            const newMap = new Map(prevMap)
            const itemToUpdate = newMap.get(item)
            itemToUpdate.amount = newVal
            
                        
            window.localStorage.setItem(
				key,
				JSON.stringify(Array.from(newMap.entries()))
			);
            return newMap
        })
	}
    
    const removeItem = (k) => {
        setMap((prevMap) => {
            const newMap = new Map(prevMap)
            newMap.delete(k)
            window.localStorage.setItem(key, JSON.stringify(Array.from(newMap.entries())))
            return newMap
        })
    }
    
    return {setItem, updateItem, removeItem, map, cartSize }
}

export default useLocalStorage