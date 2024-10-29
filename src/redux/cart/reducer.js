import { ADD_TO_CART, CLEAR_CART, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "./actionType";

const updateLocalStorage = (cart) => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
}

const initialState = {
    // cart: []
    cart: localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const hasProduct = state.cart.find(p => p.id === action.payload.id ) ? true : false
            // false => [...state.cart, {...action.payload, qty: 1}]
            // true => state.cart.map(p => p.id === action.payload.id ? {...p, qty: p.qty + 1} : p)
            state.cart = hasProduct ? state.cart.map(p => p.id === action.payload.id ? {...p, qty: p.qty + 1} : p) : [...state.cart, {...action.payload, qty: 1}]
            // localStorage.setItem('shopping-cart', JSON.stringify(state.cart));
            updateLocalStorage(state.cart);
            return {
                ...state,
                // cart:[ ...state.cart, {...action.payload, qty: 1} ]
                cart: state.cart
            }
        case INCREMENT:
            state.cart = state.cart.map(p => p.id === action.payload ? {...p, qty: p.qty + 1} : p); 
            // localStorage.setItem('shopping-cart', JSON.stringify(state.cart));
            updateLocalStorage(state.cart);
            return {
                ...state,
                cart: state.cart
            }
        case DECREMENT:
            const product = state.cart.find(p => p.id === action.payload)
            if(product.qty > 1) {
                state.cart = state.cart.map(p => p.id === action.payload ? {...p, qty: p.qty - 1} : p); 
            } else {
                state.cart = state.cart
            }
            // localStorage.setItem('shopping-cart', JSON.stringify(state.cart));
            updateLocalStorage(state.cart);
            return {
                ...state,
                cart: state.cart
            }
        case REMOVE_FROM_CART:
            state.cart = state.cart.filter(p => p.id !== action.payload)
            updateLocalStorage(state.cart);
            return {
                ...state,
                cart: state.cart
            }
        case CLEAR_CART:
            updateLocalStorage([]);
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}

export default cartReducer;