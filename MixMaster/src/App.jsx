import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import Home from "./pages/Home";

function App() {
  return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} ></Route>
					<Route path="/about" element={<About />} ></Route>
					<Route path="/newsletter" element={<Newsletter />} ></Route>
				</Routes>
			</BrowserRouter>
		</>
  );
}

export default App
