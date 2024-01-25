const DrinkCard = ({info}) => {
  return (
		<div className="drinks-wrapper-styles">
			{info 
				? info.map((drink) => {
				return (
					<div
						key={drink.idDrink}
						className="bg-[#FFFFFF] shadow-lg rounded-2xl overflow-hidden max-w-[350px] "
					>
						<img src={drink.strDrinkThumb} alt={drink.strDrink} />
						<div className="p-[1.5rem] flex flex-col ">
							<h2 className="text-[2rem] font-bold ">
								{drink.strDrink}
							</h2>
							<span className="text-[1.5rem] font-normal ">
								{drink.strGlass}
							</span>
							<span className="text-[#96748B]">
								{drink.strAlcoholic}
							</span>
                            
						</div>
					</div>
				)}) 
				: <h2 className="text-center text-[3rem] font-semibold ">No matching cocktails found...</h2>
			}
		</div>
  );
}

export default DrinkCard
