//quan ly cac state lien quan den customer
import { SHOW_AN_ALERT } from '../constants';

const initialState = {

    alertList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_AN_ALERT:
            return {
                ...state,
                alertList: [...action.payload]
            }

        default:
            return state
    }
}