import { useContext } from "react";
import ThemeContext from "../../../../context/ThemeContext";


const SingleProductAmount = () => {
    
    const {theme} = useContext(ThemeContext)
    
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
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
        </section>
    );
}

export default SingleProductAmount
