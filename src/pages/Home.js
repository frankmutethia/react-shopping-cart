import { ProductCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {

  useTitle("Home");

const products = [
  {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/nathan-dumlao-pMW4jzELQCw-unsplash.jpg"},
  {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/blackfriday.png"}, 
]

  return (
    <main>
      <section className="products">
      {products.map( (product) => (
        <ProductCard key={product.id} product={product}/>
      ) ) }
      
      </section>
    </main>
  )
}


