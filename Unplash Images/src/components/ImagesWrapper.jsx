import { useContext } from "react"
import APIContext from "../contexts/APIContext"

const ImagesWrapper = () => {
    const {data, isLoading} = useContext(APIContext)
  //TODO verificar porque solo renderiza el primer elemento del array .    
  return (
		<div className="w-[70%] mx-[100px] grid grid-cols-[_1fr_1fr_1fr] gap-[2rem] mt-[3rem] ">
			{isLoading 
        ? <h2 className="text-[2rem] text-white ">Loading...</h2> 
        :(data.results.map((item) => {
            return (              
              <div key={item.id}>
                <img
                  src={item.tags[0].source.cover_photo.urls.raw}
                  alt=""
                />
              </div>
            );
				}))
      }
		</div>
  );
}

export default ImagesWrapper
