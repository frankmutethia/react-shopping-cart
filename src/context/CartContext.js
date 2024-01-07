import {createContext} from "react";
import { useContext } from "react";

const initialState = {
    cartList:[],
    total: 0,
}


export const CartContext = createContext(initialState);


 export const CartProvider = ({children}) => {

    const value = {
        total: 50,
    };

    return (
        <CartContext.Provider value= {value}>
         {children}
        </CartContext.Provider>
    );
}

//allows us to call an axis all the value
//this isn't very necessary. Instead we can access the value from each page it is needed.
export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}