import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import getData from "../services/getData"
import Loading from "../components/Loading";
import SingleCocktail from "../components/SingleCocktail";

const Cocktail = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
			const response = await getData(
				`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
			);
            setCocktail(response)
            setIsLoading(false);
		};
        fetchData()
    }, [id])
    
    if(isLoading) {
        <Loading />
    } else {
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
        } = cocktail.drinks[0];      
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
        setCocktail(newCocktail)
        
        return (
            <div>
                {/* <SingleCocktail data={cocktail} /> */}
                {console.log(cocktail.drinks)}
            </div>
        );
    }
    
    
}

export default Cocktail
