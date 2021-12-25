//quan ly cac state lien quan den customer
import {
    ADD_NEW_CUSTOMER,
    DELETE_A_CUSTOMER_FOREVER,
    EDIT_CUSTOMER,
    GET_ALL_CUSTOMER
} from '../constants';

const initialState = {
    customerList: [],
    customer: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CUSTOMER:
            return {
                ...state,
                customerList: action.payload
            }
        case ADD_NEW_CUSTOMER:
            return {
                ...state,
            }
        case EDIT_CUSTOMER:
            return {
                ...state,
            }
        case DELETE_A_CUSTOMER_FOREVER:
            return {
                ...state,
            }
        default:
            return state
    }
}