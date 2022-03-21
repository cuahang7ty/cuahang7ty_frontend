import { ADD_NEW_CART } from '../constants';

const initialState = {
    cartCounter: 1,
    cartList: [{
        customerName: 'Khách 1',
        billDetails: []
    }]
    
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_CART:
            return {
                ...state,
                cartList: [...state.cartList, action.payload]
            }
        default:
            return state
    }
}