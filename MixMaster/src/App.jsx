import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import Home from "./pages/Home";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
		<>
		<DataProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} ></Route>
					<Route path="/about" element={<About />} ></Route>
					<Route path="/newsletter" element={<Newsletter />} ></Route>
				</Routes>
			</BrowserRouter>
		</DataProvider>
		</>
  );
}

export default App
