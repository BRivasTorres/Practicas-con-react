import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const About = () => {
  
    const {themePalette, theme} = useContext(ThemeContext)
  
    return (
        <div
            className={`${themePalette}`}
        >
            <div className="w-[80%] mx-auto pt-[3rem] min-h-[100dvh] max-w-[1200px]">
                <h2 className="font-bold text-[3rem] lg:text-[5rem] text-center">
					We love{" "}
                    <span
                        className={`${
                            theme === "dark"
                                ? "bg-btns-bg-dark text-text-light"
                                : "bg-btns-bg-light text-white"
                        } p-[.8rem] rounded-[20px] text-[3rem]`}
                    >
						comfy
                    </span>
                </h2>
                <p className="w-[65%] mx-auto mt-[2rem] ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolore, aut veniam doloribus ad fugit in ipsam dolores
					eligendi, laborum rerum expedita doloremque, temporibus esse
					neque consequatur iusto ut tempore repudiandae. Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Voluptatum ex
					temporibus illum ad enim nulla illo exercitationem odio
					quisquam rem, delectus iste incidunt fuga excepturi pariatur
					ullam perferendis libero. Necessitatibus! Lorem ipsum dolor
					sit amet consectetur, adipisicing elit.
                </p>
            </div>
        </div>
    );
}

export default About
