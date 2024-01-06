import { DataProvider } from "../hooks/DataContext"
import Header from "./Header"
import Main from "./Main"

const Cart = () => {
  
  return (
    <div>
      <DataProvider>
        <Header />
        <Main />
      </DataProvider>
    </div>
  )
}

export default Cart
