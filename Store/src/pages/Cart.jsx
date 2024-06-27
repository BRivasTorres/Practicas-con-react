import { useContext } from "react"
import FilterContext from "../context/FilterContext"

const Cart = () => {
    
    const {cartData} = useContext(FilterContext)
    
    return (
        <div>
            {cartData.map((item, id) => {
                return <h2 key={id}>{item.title}</h2>;
            })}
        </div>
    );
}

export default Cart
