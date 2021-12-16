//quan ly cac state lien quan den product
import {
    ADD_NEW_PRODUCT,
    DELETE_A_PRODUCT_FOREVER,
    EDIT_PRODUCT,
    GET_ALL_PRODUCT
} from '../constants';

const initialState = {
    productList: [],
    product: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                productList: action.payload
            }
        case ADD_NEW_PRODUCT:
            return {
                ...state,
            }
        case EDIT_PRODUCT:
            return {
                ...state,
            }
        case DELETE_A_PRODUCT_FOREVER:
            return {
                ...state,
            }
        default:
            return state
    }
}