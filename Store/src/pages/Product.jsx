import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import productsData from "../mocks/ProductsData"
import SingleProduct from "../components/products/Products Section/SingleProduct/SingleProduct"
import ThemeContext from "../context/ThemeContext"

const Product = () => {
    const {themePalette} = useContext(ThemeContext)
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData]  = useState([])
    
    useEffect(() => {
        setIsLoading(true)
        const fetchData = () => {
            try {
                setData(productsData[id].attributes)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [id]);
    
    if(!data) {
        return <h2>No data to display</h2>
    }
    
    if(isLoading) {
        <h2>Cargando Data</h2>
    } else {
        return (
            <div className={`${themePalette}`}>
                <SingleProduct data={data} />
            </div>
        );
    }
}

export default Product
