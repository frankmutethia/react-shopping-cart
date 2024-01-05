import { ProductCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {

  useTitle("Home");

const products = [
  {"id": 1, "name": "KFC Spicy Chicken", "price": 350, "image": "/images/blackfriday.jpg"},
  {"id": 2, "name": "Pepperoni Pizza", "price": 1400, "image": "/images/blackfriday.jpg"}, 
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


