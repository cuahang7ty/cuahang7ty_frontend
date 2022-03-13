//quan ly cac state lien quan den customer
import { ADD_KEYWORD, ADD_SECONDKEY, DELETE_SECONDKEY, GET_KEYWORDS_OF_PRODUCT, LOAD_TRANSCRIPT, RESET_TRANSCRIPT, SEARCH_BY_KEYWORDS } from '../constants';

const initialState = {
    keywords: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_KEYWORD:
            return {
                ...state,
            }
        case GET_KEYWORDS_OF_PRODUCT:
            return {
                ...state,
                keywords: action.payload
            }
        case ADD_SECONDKEY:
            return {
                ...state,
                // keywords: action.payload
            }
        case DELETE_SECONDKEY:
            return{
                ...state,
                
            }
        default:
            return state
    }
}