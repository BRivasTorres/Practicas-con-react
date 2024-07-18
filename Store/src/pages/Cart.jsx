import ThemeContext from "../context/ThemeContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";

const Cart = () => {    
    const {map} = useLocalStorage("cart products")
    const {theme} = useContext(ThemeContext)
    
    const cartArray = Array.from(map.values())
    
    const colorValues = {
        green: "#33FF57",
        blue: "#3366FF",
        orange: "#FF5733",
        yellow: "#FFFF00",
    };
    
    return (
        <div
            className={`${
                theme === "dark"
                    ? "bg-main-dark text-white"
                    : "bg-white text-black"
            } min-h-dvh  `}
        >
            <section className="w-[80%] mx-auto pt-[5rem] border border-red-700">
                {map.size <= 0 ? (
                    <h2>Your cart is empty</h2>
                ) : (
                    <h2>Shopping Cart</h2>
                )}
                {map.values().map((item) => console.log(item))}

                {cartArray.map((item) => {
                    <div className="w-100% h-[1px] bg-[#E2E8F4]"></div>
                    return (
                        <section
                            key={item.title}
                            className="grid sm:grid-cols-4"
                        >
                            <div className="">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[150px] h-[150px] rounded-[15px] "
                                />
                            </div>

                            <div>
                                <h4 className="capitalize font-semibold ">{item.title}</h4>
                                <h5 className="text-[#C7C9D1] ">{item.company}</h5>
                                <h5>Color : <div style={{background : colorValues[item.color], width: "10px", height: "10px", display: "inline-block" }}></div> </h5>
                                <div style={{background: colorValues[item.color]}}></div>
                                {console.log(item.color)}
                            </div>

                            <div>
                                <h3>amount</h3>
                                <h1>select</h1>
                                <button>remove</button>
                            </div>

                            <div>
                                <h4>{item.price}</h4>
                            </div>
                        </section>
                    );
                })}
            </section>
        </div>
    );
}

export default Cart
