//quan ly cac state lien quan den customer
import { ADD_KEYWORD, LOAD_TRANSCRIPT, SEARCH_BY_KEYWORDS } from '../constants';

const initialState = {
    keyword: null,
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
        case SEARCH_BY_KEYWORDS:
            return {
                ...state,
                topResults: action.payload.topResults,
                badResults: action.payload.badResults
            }
        default:
            return state
    }
}