import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import  DataContext  from "../hooks/DataContext";

const Header = () => {
  const {products} = useContext(DataContext)
  return (
		<header className="bg-[#645CFF]">
            <div className="w-[50%] mx-auto flex justify-between items-center p-[2rem] text-white text-[2rem]">
                <h2>UseReducer</h2>
                <div>
                  <FontAwesomeIcon icon={faCartPlus} className="text[12rem]" />
                  <span className="bg-[#A29DFF] text-[15px] px-[10px] py-[5px] rounded-[100px] relative top-[-25px] left-[-15px] ">{products}</span>
                </div>
            </div>
		</header>
  );
}

export default Header
