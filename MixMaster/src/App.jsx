import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import Home from "./pages/Home";
import Cocktail from "./pages/Cocktail";
import { DataProvider } from "./context/DataContext";
import { ToastContainer } from "react-toastify";


function App() {
  return (
		<>
			<DataProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route
							path="/newsletter"
							element={<Newsletter />}
						></Route>
						<Route
							path="/cocktail/:id"
							element={<Cocktail />}
						></Route>
					</Routes>
				</BrowserRouter>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</DataProvider>
		</>
  );
}

export default App
