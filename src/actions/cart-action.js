import axios from 'axios';
import { ADD_NEW_CART } from '../constants';

export const addNewCart = (indexCustomer) => dispatch => {
    const cart = {
        customerName: 'khách' + indexCustomer,
        billDetails: []
    }
    dispatch({
        type: ADD_NEW_CART,
        payload: cart
    })
}