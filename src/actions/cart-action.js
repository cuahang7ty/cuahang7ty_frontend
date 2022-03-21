import axios from 'axios';
import { ADD_NEW_CART } from '../constants';

export const addNewCart = (index) => dispatch => {
    console.log('index ', index)
    const cart = {
        customerName: 'Khách ' + index,
        billDetails: []
    }
    dispatch({
        type: ADD_NEW_CART,
        payload: cart
    })
}