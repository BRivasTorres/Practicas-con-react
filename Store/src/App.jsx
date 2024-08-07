import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import StoreApp from "./components/StoreApp"
import { ThemeProvider } from "./context/ThemeContext"
import { FilterContextProvider } from "./context/FilterContext"
import Product from "./pages/Product"
import { ToastContainer } from "react-toastify";


function App() {    
    return (
        <div>
            <ThemeProvider>
                <FilterContextProvider>
                    <BrowserRouter>
                        <StoreApp />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/products/:id" element={<Product />} />
                        </Routes>
                        <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </BrowserRouter>
                </FilterContextProvider>
            </ThemeProvider>
        </div>
    );
}

export default App
