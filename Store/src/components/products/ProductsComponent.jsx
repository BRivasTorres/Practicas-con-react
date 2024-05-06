import productsData from "../../mocks/ProductsData"
import CardProduct from "./CardProduct"

const ProductsComponent = () => {
  return (
    <div>
      {productsData.map((product) => {
        return(
            <div key={product.id}>
                <CardProduct 
                    img={product.attributes.image}
                    title={product.attributes.title}
                    company={product.attributes.company}
                    description={product.attributes.description}
                    featured={product.attributes.featured}
                    category={product.attributes.category}
                    price={product.attributes.price}
                    shipping={product.attributes.shipping}
                    colors={product.attributes.colors}
                />
            </div>
        )
      })}
    </div>
  )
}

export default ProductsComponent

// title: "Lounge Chair",
// company: "Luxora",
// description:
//     "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
// featured: false,
// category: "Chairs",
// image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
// price: "259.99",
// shipping: false,
// colors: ["#FF5733", "#33FF57", "#3366FF"],