import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItems = ({cartArray, removeItem}) => {    
    const { theme } = useContext(ThemeContext);
    const values = Array.from({ length: 20 }, (_, i) => i + 1);
    
    const notify = () => {
        toast.error("Item deleted from cart", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    
    const callEvents = (key) => {
        notify()
        removeItem(key)
    };
    
    const updateAmountChange = (e) => {
        handleSelectedAmount(e.target.value)
    }
    
    return (
        <div className="flex flex-col gap-3">
            {cartArray.map((item, idx) => {
                return (
                    <section key={item.title}>
                        <div className="grid sm:grid-cols-4 gap-x-3">
                            <div>
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

                            <div className="flex flex-col items-start gap-y-3 ">
                                <label htmlFor="amount" className="capitalize">
									amount
                                </label>
                                <select
                                    defaultValue={item.amount}
                                    name="amount"
                                    id="amount"
                                    className={`${
                                        theme === "dark"
                                            ? "border border-[#BF95F9] outline-[#BF95F9] bg-main-dark text-white "
                                            : "border border-[#463AA1] outline-[#463AA1]"
                                    } px-4 py-2 rounded-lg `}
                                    onChange={updateAmountChange}
                                >
                                    {values.map((val, id) => {
                                        return (
                                            <option value={val} key={id}>
                                                {val}
                                            </option>
                                        );
                                    })}
                                </select>
                                <button
                                    className={
                                        theme === "dark"
                                            ? "text-[#FF7AC6]"
                                            : "text-[#057AFF]"
                                    }
                                    onClick={() => callEvents(item.title)}
                                >
									remove
                                </button>
                            </div>

                            <div>
                                <h4 className="font-semibold">${item.price}</h4>
                            </div>
                        </div>
                        <div className="w-[90%] ">
                            {idx < cartArray.length - 1 && (
                                <div className="h-[1px] bg-[#E2E8F4] my-[2.5rem]"></div>
                            )}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default CartItems
