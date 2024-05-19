import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import productsData from "../mocks/ProductsData"
import SingleProduct from "../components/products/Products Section/SingleProduct/SingleProduct"
import ThemeContext from "../context/ThemeContext"

const Product = () => {
    const {theme} = useContext(ThemeContext)
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData]  = useState([])
    
    useEffect(() => {
        setIsLoading(true)
        const fetchData = () => {
            try {
                setData(productsData[id])
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [id]);
    
    if(isLoading) {
        return <h2>Cargando data...</h2>
    }
    
    if(!data) {
        <h2>No data to display</h2>
    } else {
        return (
            <div className={`${theme === "dark" ? "bg-bg-dark text-white" : "bg-white"}`}>
                <SingleProduct />
            </div>
        );
    }
}

export default Product
