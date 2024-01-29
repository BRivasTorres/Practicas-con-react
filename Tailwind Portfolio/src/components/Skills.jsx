import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
		<div className="bg-[#F8FAFC] " id="skills">
			<section className="w-[60%] mx-auto pt-[4rem] ">
				<h2 className="text-[2rem] font-semibold mb-[1rem] ">Tech Stack</h2>
				<hr />
				<aside>
					<FontAwesomeIcon icon={faHtml5} />
					<h2>HTML&CSS</h2>
					<p>
						Highly skilled in HTML & CSS, adeptly crafting visually
						appealing and responsive websites for optimal user
						experiences.
					</p>
				</aside>
				<aside>
					<FontAwesomeIcon icon={faJs} />
					<h2>Javascript</h2>
					<p>
						Expertise in JavaScript, building interactive and
						dynamic web applications with a focus on seamless user
						interactions and functionality
					</p>
				</aside>
				<aside>
					<FontAwesomeIcon icon={faJs} />
					<h2>React</h2>
					<p>
						Advanced proficiency in React, developing efficient and
						interactive front-end applications with a strong
						emphasis on component-based architecture.
					</p>
				</aside>
				<FontAwesomeIcon icon={faReact} />
			</section>
		</div>
  );
}

export default Skills
