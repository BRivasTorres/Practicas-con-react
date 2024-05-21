import MainFeaturedProducts from "./MainFeaturedProducts"
import MainPrincipalProducts from "./MainPrincipalProducts"

const Main = () => {    
    return (
        <div className="max-w-[1400px] mx-auto">
            <MainPrincipalProducts />
            <MainFeaturedProducts />
        </div>
    )
}
export default Main
