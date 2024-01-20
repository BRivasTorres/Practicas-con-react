import { useContext } from "react"
import APIContext from "../contexts/APIContext"

const ImagesWrapper = () => {
    const {data, isLoading} = useContext(APIContext)
  return (
		<div className="w-[70%] mx-[100px] grid grid-cols-[_1fr_1fr_1fr] gap-[2rem] mt-[3rem] ">
			{isLoading 
        ? <h2 className="text-[2rem] text-white ">Loading...</h2> 
        : data.results.length === 0 
          ? <h2 className="text-center text-white text-[2rem] font-semibold">No data found</h2> 
          :(data.results.map((item) => {
            return (              
              <div key={item.id}>
                <img
                  src={item.urls.thumb}
                  alt=""
                  className="w-[100%] h-[350px] "
                />
              </div>
            );
				}))
      }
		</div>
  );
}

export default ImagesWrapper
