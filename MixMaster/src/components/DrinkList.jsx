import { useContext } from "react"
import DataContext from "../context/DataContext"
import Loading from "./Loading";
import DrinkCard from "./DrinkCard";

const DrinkList = () => {
    const { data, isLoading } = useContext(DataContext)
    
  return (
		<div className="">
			{isLoading ? <Loading /> : <DrinkCard info={data.drinks} />}
		</div>
  );
}

export default DrinkList
