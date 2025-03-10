import { type } from "@testing-library/user-event/dist/type";
import { ADD_TO_CART, CLEAR_CART, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "./actionType";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const increment = (productId) => {
    return {
        type: INCREMENT,
        payload: productId
    }
}

export const decrement = (productId) => {
    return {
        type: DECREMENT,
        payload: productId
    }
}

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}