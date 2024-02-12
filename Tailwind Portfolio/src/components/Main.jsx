import About from "./About";
import Home from "./Home"
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
		<div className="bg-[#D1FAE5] max-w-[2200px] ">
			<Home />
      <Skills />
      <About />
      <Projects />
		</div>
  );
}

export default Main
