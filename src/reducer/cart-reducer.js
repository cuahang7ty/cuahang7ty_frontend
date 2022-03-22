import { ADD_NEW_CART, LOAD_CART_LIST_FROM_LOCALSTORAGE, REMOVE_A_CART } from '../constants'

const initialState = {
    cartList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_CART:
            const newCartList = [...state.cartList, action.payload]
            window.localStorage.setItem('cartList', JSON.stringify(newCartList))
            return {
                ...state,
                cartList: [...newCartList]
            }
        case LOAD_CART_LIST_FROM_LOCALSTORAGE:
            return {
                ...state,
                cartList: [...action.payload]
            }
        case REMOVE_A_CART:
            window.localStorage.cartList = JSON.stringify(action.payload)
            return {
                ...state,
                cartList: [...action.payload]
            }
        default:
            return state
    }
}