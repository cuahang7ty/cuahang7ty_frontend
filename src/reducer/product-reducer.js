//quan ly cac state lien quan den product
import {
    GET_ALL_PRODUCT
} from '../constants';

const initialState = {
    productList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                productList: action.payload
            }
        default:
            return state
    }
}