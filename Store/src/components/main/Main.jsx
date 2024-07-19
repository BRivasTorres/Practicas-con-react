import MainFeaturedProducts from "./MainFeaturedProducts"
import MainPrincipalProducts from "./MainPrincipalProducts"

const Main = () => {    
    return (
        <div className="max-w-[1200px] mx-auto px-[2rem] ">
            <MainPrincipalProducts />
            <MainFeaturedProducts />
        </div>
    )
}
export default Main
