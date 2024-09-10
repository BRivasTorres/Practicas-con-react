import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import StoreApp from "./components/StoreApp"
import { ThemeProvider } from "./context/ThemeContext"
import { FilterContextProvider } from "./context/FilterContext"
import { CartProvider } from "./context/CartContext"
import { ToastContainer } from "react-toastify";

const compose = (...providers) =>
    ({children}) => {
        return providers.reduceRight(
            (decendents, Provider) => <Provider>{decendents}</Provider>,
            children
        )
    } 

const Providers = compose(ThemeProvider, FilterContextProvider, CartProvider)

function App() {    
    return (
        <div>
            <Providers>
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
            </Providers>
        </div>
    );
}

export default App
