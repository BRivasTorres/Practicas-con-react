import CartItems from "../components/cart/CartItems";
import OrderSummary from "../components/cart/OrderSummary";
import ThemeContext from "../context/ThemeContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext } from "react";

const Cart = () => {    
    const {map, removeItem} = useLocalStorage("cart products")
    const {themePalette, theme} = useContext(ThemeContext)
    
    const cartArray = Array.from(map.values())
    const colorBtn = theme === "dark" ? "btns-bg-main-dark text-main-dark" : "bg-btns-bg-light text-white"
        
    return (
        <div className={`${themePalette} min-h-dvh px-[2rem]`}>
            <section className="max-w-[1200px] min-w-[400px] mx-auto pt-[3rem]">
                <div>
                    <h2 className="font-semibold text-[2rem] capitalize">
                        {map.size <= 0 ? "Your cart is empty" : "Shopping cart"}
                    </h2>
                    <div className="w-[100%] h-[2px] mb-[4rem] bg-[#E2E8F4] "></div>
                </div>

                <section className="grid sm:grid-cols-[_70%_30%]">
                    <div>
                        <CartItems
                            cartArray={cartArray}
                            removeItem={removeItem}
                        />
                    </div>

                    <div className="p-[1rem] min-w-[200px]">
                        <OrderSummary cartArray={cartArray} />

                        <button
                            className={`${colorBtn} w-[100%] py-[.8rem] rounded-[10px] mt-[2rem] uppercase font-semibold`}
                        >
							please login
                        </button>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Cart
