import CartItems from "../components/cart/CartItems";
import OrderSummary from "../components/cart/OrderSummary";
import ThemeContext from "../context/ThemeContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext } from "react";

const Cart = () => {    
    const {map, removeItem} = useLocalStorage("cart products")
    const {themePalette} = useContext(ThemeContext)
    
    const cartArray = Array.from(map.values())
    
        
    return (
		<div
			className={`${themePalette} min-h-dvh px-[2rem]`}
		>
			<section className="max-w-[1200px] min-w-[400px] mx-auto pt-[3rem]">
				<div>
					<h2 className="font-semibold text-[2rem] capitalize">
						{map.size <= 0 ? "Your cart is empty" : "Shopping cart"}
					</h2>
					<div className="w-[100%] h-[2px] my-4 bg-[#E2E8F4] "></div>
				</div>

				<section className="grid sm:grid-cols-[_70%_30%] border border-green-800">
					<div className="flex flex-col gap-3">
						<CartItems 
                            cartArray={cartArray}
                            removeItem={removeItem}
                        />
					</div>

					<div className="border border-green-700">
						<OrderSummary 
                            cartArray={cartArray}
                        />

						<button>please login</button>
					</div>
				</section>
			</section>
		</div>
	);
}

export default Cart
