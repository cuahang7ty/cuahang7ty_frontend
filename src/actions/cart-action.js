import axios from 'axios';
import { ADD_NEW_CART, LOAD_CART_LIST_FROM_LOCALSTORAGE, SET_CART_COUNTER, LOAD_CART_COUNTER, REMOVE_A_CART } from '../constants';

export const addNewCart = (index) => dispatch => {
    const cart = {
        customerName: 'Khách ' + index,
        billDetails: []
    }
    dispatch({
        type: ADD_NEW_CART,
        payload: cart
    })
}

export const loadCartListFromLocalStorage = () => dispatch => {
    var cartList = window.localStorage.cartList
    if (cartList) {
        dispatch({
            type: LOAD_CART_LIST_FROM_LOCALSTORAGE,
            payload: JSON.parse(cartList)
        })
    }
    else {
        const cart = {
            customerName: 'Khách 1',
            billDetails: []
        }
        dispatch({
            type: ADD_NEW_CART,
            payload: cart
        })
    }
    
}

export const removeACart = (tagName) => async dispatch => {
    var cartList = JSON.parse(window.localStorage.cartList)
    // const cartToRemove = cartList.filter(cart => cart.customerName === tagName)
    cartList = await arrayRemove(cartList, tagName)
    console.log(cartList)
    dispatch({
        type: REMOVE_A_CART,
        payload: cartList
    })

}

function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele.customerName != value; 
    });
}