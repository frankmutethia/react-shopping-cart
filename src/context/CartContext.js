import {createContext, useReducer} from "react";
import { useContext} from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList:[],
    total: 0,
}


export const CartContext = createContext(initialState);


 export const CartProvider = ({children}) => {
    //dispatch has the power to call the cartReducer cases
    //dispatch is the more powerful version of set state and set counter
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(cartReducer, initialState);
    
    // eslint-disable-next-line no-unused-vars
    const addToCart = (product)=> {
    // eslint-disable-next-line no-unused-vars
    const updateCartList = state.cartList.concat(product);
    dispatch({
        //type is basically what we have to perform
        type: "ADD_TO_CART",
        payload:{
            // eslint-disable-next-line no-undef
            products: updatedCart
        }

    })
    }

    // eslint-disable-next-line no-unused-vars
    const removeFromCart = (product) => {
        // eslint-disable-next-line no-unused-vars
        const updateCartList = state.cartList.filter(current => current.id !== product.id);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload:{
                // eslint-disable-next-line no-undef
                products: updatedCartList
            }
        })
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
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