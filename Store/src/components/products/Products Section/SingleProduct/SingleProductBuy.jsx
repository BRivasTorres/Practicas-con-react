import { useContext } from 'react';
import ThemeContext from '../../../../context/ThemeContext';

const SingleProductBuy = () => {
    
    const {theme} = useContext(ThemeContext)
    
    return (
        <div>
            <button
                className={`${
                    theme === "dark"
                        ? "bg-[#BF95F9] text-bg-main-dark "
                        : "bg-[#463AA1] text-white "
                } px-5 py-3 rounded-lg hover:opacity-85 transition duration-200 ease-linear`}
            >
				Add to bag
            </button>
        </div>
    );
}

export default SingleProductBuy
