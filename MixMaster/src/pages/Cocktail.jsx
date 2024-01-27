import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import getData from "../services/getData"
import Loading from "../components/Loading";
import SingleCocktail from "../components/SingleCocktail";

const Cocktail = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
				const data = await getData(
					`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
				);
				if (data.drinks) {
					const {
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strInstructions: instructions,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					} = data.drinks[0];
					const ingredients = [
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					];
					const newCocktail = {
						name,
						image,
						info,
						category,
						glass,
						instructions,
						ingredients,
					};
					setCocktail(newCocktail);
				} else {
					setCocktail(null);
				}
			} catch (error) {
				console.log(error);
			}
            setIsLoading(false)
        }
        fetchData()
    }, [id])
    
    if(isLoading) {
        return <Loading />
    } 
    
    if(!cocktail) {
        <h2>No cocktail to display</h2>
    } else {        
        return (
			<div className="bg-[#F8FAFC] min-h-[100vh] ">
				<SingleCocktail data={cocktail} />
			</div>
		);
    } 
}

export default Cocktail
