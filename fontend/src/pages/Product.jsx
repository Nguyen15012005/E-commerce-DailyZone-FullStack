import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom"
import ProductHd from "../components/Products/ProductHd";


const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <h1>Product not found!</h1>
  }
  return (
    <section>
      <div className="">
        <ProductHd product={product}/>
      </div>
    </section>
  )
}

export default Product