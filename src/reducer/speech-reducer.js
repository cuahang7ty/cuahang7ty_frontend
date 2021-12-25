//quan ly cac state lien quan den customer
import { LOAD_TRANSCRIPT } from '../constants';

const initialState = {
    isListening: false,
    transcript: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        
        case LOAD_TRANSCRIPT:
            return {
                ...state,
                // isListening = action.payload.listening,
                transcript = action.payload
            }
        default:
            return state
    }
}