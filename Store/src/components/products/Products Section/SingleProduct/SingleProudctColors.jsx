import { useContext, useState } from "react";
import ThemeContext from "../../../../context/ThemeContext";

const SingleProudctColors = ({colors = []}) => {
    const {theme} = useContext(ThemeContext)
    const [selectedColor, setSelectedColor] = useState()
    const colorValues = {
        green: "#33FF57",
        blue: "#3366FF",
        orange: "#FF5733",
        yellow: "#FFFF00",
    };
    
    const handleChangeColor = (e) => {
        console.log(e.target.value)
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
                                    ? "focus:border-[#BF95F9]"
                                    : "focus:border-black"
                            } colors-products ${color === selectedColor ? "bg-red-800" : "" }`}
                            onChange={handleChangeColor}
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

export default SingleProudctColors
