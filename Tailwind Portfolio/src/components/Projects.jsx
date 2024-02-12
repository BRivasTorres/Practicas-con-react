import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectsData from "../mocks/ProjectsData";

const Projects = () => {
	return (
		<div className="bg-[#F8FAFC] py-[8rem]" id="proyects">
			<section className="w-[60%]  mx-auto flex gap-x-[2.4rem]">
				{projectsData.map((proyect) => {
					return (
						<div
							key={proyect.id}
							className="bg-[#FFFFFF] rounded-[15px] overflow-hidden "
						>
							<img src={proyect.img} alt="" />
							<section className="p-[2rem] flex flex-col gap-[1.5rem] text-[#334155] ">
								<h2 className="capitalize font-semibold text-[1.5rem] text-black ">
									{proyect.name}{" "}
								</h2>
								<p>{proyect.description}</p>
								<aside className="flex gap-x-[1.3rem] text-[2rem] ">
									<a href="#">
										<FontAwesomeIcon
											icon={proyect.iconWeb}
										/>
									</a>
									<a
										href="https://github.com/BRivasTorres"
										target="blank"
									>
										<FontAwesomeIcon
											icon={proyect.iconCode}
										/>
									</a>
								</aside>
							</section>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Projects;
