import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import useLocalStorage from '../../hooks/useLocalStorage';

const Chart = () => {
    const {theme} = useContext(ThemeContext)
    const { map, cartSize } = useLocalStorage("cart products");
    const [newCartSize, setNewCartSize] = useState(map.size)
    
    useEffect(() => {
        setNewCartSize(map.size)
    }, [cartSize]);
    
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
                    {newCartSize}
                </span>
            </NavLink>
        </div>
    );
}

export default Chart
