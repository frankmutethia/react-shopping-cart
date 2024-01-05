import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";


export const Cart = () => {
  useTitle("Cart");
  
  const products = [
    {id: 1, "name": "KFC Spicy Chicken", "price": 350, "image": "/images/blackfriday.jpg",}, 
    {id: 2, "name": "Pepperoni Pizza", "price": 1400, "image": "/images/blackfriday.jpg",}, 
  ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}