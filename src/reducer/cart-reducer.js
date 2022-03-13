import { ADD_NEW_CART } from '../constants';

const initialState = {
    cartList: []
    
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_CART:
            return {
                ...state,
                cartList: [...this.cartList, action.payload]
            }
        default:
            return state
    }
}