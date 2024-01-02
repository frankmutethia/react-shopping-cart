import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/blackfriday.jpg";
import "./Header.css";
export const Header = () => {
  return (
    <header>
      <Link to= "/" className= "logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
      <NavLink to="/" className="link" end>Home</NavLink>
      <br />
      <NavLink to="/" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>
          Cart: 2
        </span>
      </Link>
    </header>
  )
}


