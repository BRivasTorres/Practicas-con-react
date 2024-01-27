import { Link } from "react-router-dom";

const SingleCocktail = ({data}) => {
  
  const {name, image, category, glass, ingredients, instructions, info } = data
  
  return (
		<section className="border border-red-700 w-[50%] mx-auto pt-[4rem] flex flex-col items-center ">
			<Link to="/" className="bg-greenCustom text-white text-[1.2rem] capitalize px-[.5rem] py-[.2rem] rounded-[.4rem] w-fit ">
				back home
			</Link>
			<h2 className="text-[2rem] font-semibold ">{name}</h2>
			<div className="grid grid-cols-[_1fr_1fr] mt-[5rem] items-center ">
				<img src={image} alt={name} className="h-[400px] rounded-lg "></img>
				<div>
					<p>
						<span>name :</span> {name}
					</p>
					<p>
						<span>category :</span>{" "}
						{category}
					</p>
					<p>
						<span>info :</span> {info}
					</p>
					<p>
						<span>glass :</span> {glass}
					</p>
					<p>
						<span>instructons :</span>{" "}
						{instructions}
					</p>
					<p>
						<span>ingredients :</span>
						{ingredients.map((item, index) => {
							return item ? (
								<span key={index}> {item}</span>
							) : null;
						})}
					</p>
				</div>
			</div>
		</section>
  );
}

export default SingleCocktail
