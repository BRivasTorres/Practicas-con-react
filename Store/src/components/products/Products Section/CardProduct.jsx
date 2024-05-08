import { useContext } from "react"
import ThemeContext from "../../../context/ThemeContext"

const CardProduct = ({img, title, price }) => {
  
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className="border border-blue-800">
      <img src={img} alt={title} className="w-[100%] h-[350px] " />
      <h2>{title}</h2>
      <span>{price}</span>
    </div>
  )
}

export default CardProduct
