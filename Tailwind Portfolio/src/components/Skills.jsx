import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataTechStack from "../mocks/DataTechStack";

const Skills = () => {
  return (
		<div className="bg-[#F8FAFC] " id="skills">
			<div className="w-[60%] mx-auto pt-[4rem] pb-[7rem] ">
				<h2 className="text-[2rem] font-semibold mb-[1rem] ">Tech Stack</h2>
				<hr />
				<section className="flex gap-x-[2rem]">
					{dataTechStack.map(item => {
						return (
							<aside key={item.id} className="flex flex-col gap-[1rem] items-start mt-[4rem] ">
								<FontAwesomeIcon
									icon={item.icon}
									className="text-[#10B981] text-[4.5rem]"
								/>
								<h2 className="font-bold text-[1.2rem]">
									{item.tool}
								</h2>
								<p className=" text-text-color ">
									{item.description}
								</p>
							</aside>
						);
					})}
				</section>
			</div>
		</div>
  );
}

export default Skills
