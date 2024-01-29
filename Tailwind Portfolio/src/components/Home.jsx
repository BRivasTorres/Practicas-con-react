import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
		<div className="w-[60%] max-w-[1200px] mx-auto grid grid-cols-[_1fr_1fr] gap-[2rem] items-center py-[4.5rem] ">
			<section className="text-[#334155] ">
				<h2 className="text-[5rem] font-bold text-black ">I'm Billy</h2>
				<h3 className="text-[2rem]">Front-End Developer</h3>
				<p className="text-[1.4rem] capitalize">
					Turning Ideas into interacting reality
				</p>

				<ul className="flex items-center gap-[1rem] text-[2.5rem]">
					<a
						href="#"
						className="hover:text-black transition-all duration-300 ease-linear"
					>
						<FontAwesomeIcon icon={faSquareGithub} />
					</a>
					<a
						href="#"
						className="hover:text-black transition-all duration-300 ease-linear"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						href="#"
						className="hover:text-black transition-all duration-300 ease-linear"
					>
						<FontAwesomeIcon icon={faXTwitter} />
					</a>
				</ul>
			</section>
			<img src="/imgs/hero.svg" alt="" className="w-[80%]" />
		</div>
  );
}

export default Home
