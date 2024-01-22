import data from "../mocks/data"

const Proyects = () => {
  return (
		<div className="bg-[#E2E8F0] flex flex-col justify-center items-center ">
			<h2 className="my-[2.5rem] text-[3.5rem] font-semibold ">
				Projects
			</h2>
			<div className="relative w-[100px] h-[5px] bg-[#645CFF] top-[-40px] "></div>
			<div className="proyects-styles ">
				{data.map((proyect) => {
					return (
						<a
							key={proyect.id}
							href={proyect.srcProyect}
							className="bg-white w-[100%] rounded-[10px] hover:scale-105 transition-all duration-500 "
							target="blank"
						>
							<img
								src={proyect.srcImg}
								alt={proyect.name}
								className="rounded-[10px] rounded-b-none "
							/>
							<h3 className="text-center capitalize text-[1.5rem] ">
								{proyect.name}
							</h3>
						</a>
					);
				})}
			</div>
		</div>
  );
}

export default Proyects
