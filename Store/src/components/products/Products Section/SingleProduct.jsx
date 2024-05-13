import { useParams } from "react-router-dom"

const SingleProduct = () => {
  
    const {id} = useParams()
  
    return (
        <div>
            {console.log(id)}
            <h2 className="text-[2rem] font-semibold text-red-700 ">El producto actual es === {id}</h2>
        </div>
    )
}

export default SingleProduct
