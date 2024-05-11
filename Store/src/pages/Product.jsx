import { useState } from "react"
import { useParams } from "react-router-dom"
import SingleProduct from "../components/products/Products Section/SingleProduct"

const Product = () => {
  
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div>
      <SingleProduct id={id} />
    </div>
  )
}

export default Product
