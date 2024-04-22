import { useContext } from "react";
import filterData from "../../mocks/filterData";
import InputSearchProduct from "./FilterSearch";
import ThemeContext from "../../context/ThemeContext";

const FilterInput = () => {
	
	const {theme} = useContext(ThemeContext)
	
	return (
		<div className="select-inputs p-[2rem] ">
			<InputSearchProduct />
			{filterData.map((select) => {
				return (
					<div key={select.id} className="flex flex-col gap-y-[1rem]">
						<label htmlFor={select.title} className="capitalize">
							{select.title}
						</label>
						<select
							name={select.title}
							id={select.title}
							className={`${
								theme === "dark"
									? "bg-main-dark text-white border border-[#3F414B]"
									: "bg-white text-main-dark border border-[#D7DCE1]"
							} px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer `}
						>
							{select.selections.map((option, id) => {
								return (
									<option
										value={option}
										key={id}
										className="px-[1rem] py-[.5rem]"
									>
										{option}
									</option>
								);
							})}
						</select>
					</div>
				);
			})}
		</div>
	);
};

export default FilterInput;
