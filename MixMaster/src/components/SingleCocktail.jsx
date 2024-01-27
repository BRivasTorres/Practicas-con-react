import { Link } from "react-router-dom";

const SingleCocktail = ({data}) => {
  
  const {name, image, category, glass, ingredients, instructions, info } = data
  
  return (
		<section className="w-[50%] mx-auto pt-[6rem] flex flex-col items-center ">
			<Link
				to="/"
				className="bg-greenCustom text-white text-[1.2rem] capitalize px-[.5rem] py-[.2rem] rounded-[.4rem] w-fit "
			>
				back home
			</Link>
			<h2 className="text-[2rem] font-semibold ">{name}</h2>
			<div className="grid grid-cols-[_1fr_1fr] mt-[5rem] items-center ">
				<img
					src={image}
					alt={name}
					className="h-[400px] rounded-lg "
				></img>
				<div className="flex flex-col gap-[1.5rem] font-semibold text-[1.2rem] ">
					<p>
						<span className="single-cocktail-p">name :</span> {name}
					</p>
					<p>
						<span className="single-cocktail-p">category :</span>{" "}
						{category}
					</p>
					<p>
						<span className="single-cocktail-p">info :</span> {info}
					</p>
					<p>
						<span className="single-cocktail-p">glass :</span>{" "}
						{glass}
					</p>
					<p>
						<span className="single-cocktail-p">ingredients :</span>
						{ingredients.map((item, index) => {
							return item ? (
								<span key={index}> {item}</span>
							) : null;
						})}
					</p>
					<p>
						<span className="single-cocktail-p">instructons :</span>{" "}
						{instructions}
					</p>
				</div>
			</div>
		</section>
  );
}

export default SingleCocktail
