//TODO crear paginas condicionales para datos del producto

const CardProduct = ({img, title, company, description, featured, category, price, shipping, colors}) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <span>{price}</span>
    </div>
  )
}

export default CardProduct
