import { useContext } from "react"
import APIContext from "../contexts/APIContext"

const ImagesWrapper = () => {
    const {data} = useContext(APIContext)
    
  return (
    <div>
        {data.results.map(item => {
            return <img src={data.results.links.self} alt="" key={item.id} />;
        })}
    </div>
  )
}

export default ImagesWrapper
