import { useContext } from "react";
import ThemeContext from "../../../../context/ThemeContext";

const SingleProductColors = ({colors = [], handleSelectedColor, selectedColor = colors[0]}) => {
    const {theme} = useContext(ThemeContext)
    
    const handleChangeColor = (color) => {
        handleSelectedColor(color)   
    }
    
    return (
        <div>
            <h2 className="font-semibold text-[1.4rem] capitalize">colors</h2>
            <div className="flex gap-2 mt-2">
                {colors.map((color) => {    
                    return (
                        <input
                            type="radio"
                            name="color"
                            id="color"
                            key={color}
                            value={color}
                            className={`${
                                theme === "dark"
                                    ? "border-[#BF95F9]"
                                    : "border-black"
                            } colors-products ${
                                selectedColor === color
                                    ? "border-2"
                                    : ""
                            }`}
                            onChange={() => handleChangeColor(color)}
                            style={{
                                backgroundColor: color,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SingleProductColors
