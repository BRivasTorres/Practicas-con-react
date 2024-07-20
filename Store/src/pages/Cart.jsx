import ThemeContext from "../context/ThemeContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext } from "react";

const Cart = () => {    
    const {map, removeItem} = useLocalStorage("cart products")
    const {theme} = useContext(ThemeContext)
    
    const cartArray = Array.from(map.values())
    const subtotalPrice = cartArray
        .map((item) => parseFloat(item.price))
        .reduce((acc, el) => acc + el, 0);
        
    const totalShipping = cartArray.some(item => item.shipping === true)
    
    return (
        <div
            className={`${
                theme === "dark"
                    ? "bg-main-dark text-white"
                    : "bg-white text-black"
            } min-h-dvh px-[2rem]`}
        >
            <section className="max-w-[1200px] min-w-[400px] mx-auto pt-[3rem] border border-red-700">
                <div>
                    <h2 className="font-semibold text-[2rem] capitalize">
                        {map.size <= 0 ? "Your cart is empty" : "Shopping cart"}
                    </h2>
                    <div className="w-[100%] h-[2px] my-4 bg-[#E2E8F4] "></div>
                </div>

                <section>
                    <div className="flex flex-col gap-3 ">
                        {cartArray.map((item) => {
                            return (
                                <section
                                    key={item.title}
                                    className="grid sm:grid-cols-4 gap-x-3"
                                >
                                    <div className="">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-[150px] h-[150px] rounded-[15px] "
                                        />
                                    </div>

                                    <div>
                                        <h4 className="capitalize font-semibold ">
                                            {item.title}
                                        </h4>
                                        <h5 className="text-[#C7C9D1]">
                                            {item.company}
                                        </h5>
                                        <h5>
											Color :{" "}
                                            <div
                                                className="w-3 h-3 inline-block rounded-2xl"
                                                style={{
                                                    background: item.color,
                                                }}
                                            ></div>
                                        </h5>
                                    </div>

                                    <div>
                                        <h3 className="capitalize">amount</h3>
                                        <h1>select</h1>
                                        <button
                                            className={
                                                theme === "dark"
                                                    ? "text-[#FF7AC6] "
                                                    : "text-[#057AFF]"
                                            }
                                            onClick={() =>
                                                removeItem(item.title)
                                            }
                                        >
											remove
                                        </button>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">
											${item.price}
                                        </h4>
                                    </div>
                                </section>
                            );
                        })}
                    </div>

                    <div
                        className={`${
                            theme === "dark"
                                ? "bg-main-dark text-white"
                                : "bg-bg-light text-black"
                        }`}
                    >
                        <p>
                            <span>subtotal : </span>
                            <span>{subtotalPrice}</span>
                        </p>
                        <p>
                            <span>shipping</span>
                            <span> {totalShipping ? "$5.00" : "$0.00"} </span>
                        </p>
                        <p>
                            <span>tax</span>
                            <span>tax</span>
                        </p>
                        <p>
                            <span>order total</span>
                            <span>order total</span>
                        </p>
                    </div>
                    
                </section>
            </section>
        </div>
    );
}

export default Cart
