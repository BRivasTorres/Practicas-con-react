import { useContext } from "react";
import ThemeContext from "../../../../context/ThemeContext";


const SingleProductAmount = ({ handleSelectedAmount }) => {
    const { theme } = useContext(ThemeContext);
    const values = Array.from({ length: 20 }, (_, i) => i + 1);

    const handleAmount = (e) => {
        handleSelectedAmount(e.target.value)
    }
    
    return (
        <section className="flex flex-col w-[50%] gap-y-2 ">
            <label
                htmlFor="amount"
                className="font-semibold text-[1.4rem] capitalize"
            >
				amount
            </label>
            <select
                name="amount"
                id="amouont"
                className={`${
                    theme === "dark"
                        ? "border border-[#BF95F9] outline-[#BF95F9] bg-main-dark text-white "
                        : "border border-[#463AA1] outline-[#463AA1]"
                } px-4 py-2 rounded-lg `}
                onChange={handleAmount}
            >
                {values.map((val, id) => {
                    return (
                        <option value={val} key={id}>
                            {val}
                        </option>
                    );
                })}
            </select>
        </section>
    );
};

export default SingleProductAmount
