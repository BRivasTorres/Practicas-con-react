import { useContext } from "react";
import ThemeContext from "../../../../context/ThemeContext";

const SingleProductColors = ({colors = [], handleSelectedColor, selectedColor}) => {
    const {theme} = useContext(ThemeContext)
    
    const colorValues = {
        green: "#33FF57",
        blue: "#3366FF",
        orange: "#FF5733",
        yellow: "#FFFF00",
    };
    
    const handleChangeColor = (color) => {
        handleSelectedColor(color)    
    }
        
    return (
        <div>
            <h2 className="font-semibold text-[1.4rem] capitalize">colors</h2>
            <div className="flex gap-2 mt-2 ">
                {colors.map((color, id) => {    
                    return (
                        <input
                            type="radio"
                            name="color"
                            id="color"
                            key={id}
                            value={color}
                            className={`${
                                theme === "dark"
                                    ? "border-[#BF95F9]"
                                    : "border-black"
                            } colors-products ${selectedColor === id ? "border-2" : "" }`}
                            onChange={() => handleChangeColor(id)}
                            style={{
                                backgroundColor: colorValues[color],
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SingleProductColors
