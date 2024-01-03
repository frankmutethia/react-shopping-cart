import { ProductCard } from "../components";

export const Home = () => {

const products = [
  {"id": 1, "name": "Product1", "price": 1000, "image": "/assets/blackfriday.jpg"},
  {"id": 1, "name": "Product1", "price": 1000, "image": "/assets/blackfriday.jpg"},  
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


