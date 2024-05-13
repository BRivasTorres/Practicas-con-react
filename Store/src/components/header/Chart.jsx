import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Chart = () => {
    const {theme} = useContext(ThemeContext)
    
    return (
        <div>
            <NavLink
                to="/cart"
                className={`${
                    theme === "dark"
                        ? "hover:bg-active-bg-dark"
                        : "hover:bg-nav-hov-text"
                }  p-[1rem] rounded-[50%] relative`}
            >
                <FontAwesomeIcon icon={faCartShopping} />
                <span
                    className={`${
                        theme === "dark"
                            ? "bg-btns-bg-dark text-bg-dark"
                            : "bg-[#057AFF] text-white"
                    }  text-[1rem] px-[.5rem] rounded-[50%] absolute top-[5px] right-[3px]`}
                >
                0
                </span>
            </NavLink>
        </div>
    );
}

export default Chart
