export const cartReducer = (state, action) => {

    //action will be the information passed
    // eslint-disable-next-line no-unused-vars
    const {type, payload} = action;

    // eslint-disable-next-line default-case
    switch(type){
        case "ADD_TO_CART":
        return {...state, cartList: payload.products}

        case "REMOVE_FROM_CART":
        return {...state, cartList: payload.products}

        case"UPDATE_TOTAL":
        return

        default:
            throw new Error("No Case Found In cartReducer")
    }
}