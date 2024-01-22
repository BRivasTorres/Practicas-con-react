import { DataProvider } from "../context/DataContext"
import Header from "./Header"

const MixMaster = () => {
  return (
    <div className="w-[100%] min-h-[100vh]">
        <DataProvider>
            <Header />
        </DataProvider>
    </div>
  )
}

export default MixMaster
