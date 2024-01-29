import { BrowserRouter, Route, Routes } from "react-router-dom";
import TailwindPortfolio from "./components/TailwindPortfolio";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
		<>
    <BrowserRouter>
      <TailwindPortfolio />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
		</>
  );
}

export default App
