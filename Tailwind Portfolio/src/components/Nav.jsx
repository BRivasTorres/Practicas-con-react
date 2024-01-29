import { Link } from "react-router-dom";

const Nav = () => {
  return (
		<nav>
			<ul className="text-[1.4rem] flex gap-[.7rem] items-center ">
				<Link to={"/"}>Home</Link>
				<Link to={"skills"}>Skills</Link>
				<Link to={"/about"}>About</Link>
				<Link to={"/proyects"}>Proyects</Link>
			</ul>
		</nav>
  );
}

export default Nav
