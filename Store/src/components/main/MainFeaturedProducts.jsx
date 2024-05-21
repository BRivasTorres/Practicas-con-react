import FeaturedProducts from "./FeaturedProducts";

const MainFeaturedProducts = () => {        
    return (
        <div className="w-[80%] mx-auto pb-[2rem]">
            <h2 className="font-semibold text-[2rem] capitalize my-[4rem] ">
				featured products
            </h2>
            <FeaturedProducts />			
        </div>
    );
}

export default MainFeaturedProducts