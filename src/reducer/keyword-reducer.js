//quan ly cac state lien quan den customer
import { ADD_KEYWORD, GET_KEYWORDS_OF_PRODUCT, LOAD_TRANSCRIPT, RESET_TRANSCRIPT, SEARCH_BY_KEYWORDS } from '../constants';

const initialState = {
    keywords: [],
    transcript: '',
    topResults: [], //[product]
    badResults: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_KEYWORD:
            return {
                ...state,
            }
        case LOAD_TRANSCRIPT:
            return {
                ...state,
                transcript: action.payload
            }
        case RESET_TRANSCRIPT:
            return {
                ...state,
                transcript: ''
            }
        case SEARCH_BY_KEYWORDS:
            return {
                ...state,
                topResults: action.payload.topResults,
                badResults: action.payload.badResults
            }
        case GET_KEYWORDS_OF_PRODUCT:
            return {
                ...state,
                keywords: action.payload
            }
        default:
            return state
    }
}