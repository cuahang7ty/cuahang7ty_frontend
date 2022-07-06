import axios from 'axios';
import { ADD_NEW_CART, LOAD_CART_LIST_FROM_LOCALSTORAGE, SET_CART_COUNTER, LOAD_CART_COUNTER, REMOVE_A_CART, ADD_NEW_BILL_DETAIL_TO_CART } from '../constants';

export const addNewCart = (index) => dispatch => {
    const cart = {
        customerName: 'Đơn ' + index,
        billDetails: []
    }
    dispatch({
        type: ADD_NEW_CART,
        payload: cart
    })
}

export const addBillDetailToCart = (product, quantity, indexCartSelected, cartList) => dispatch => {
    // var cartSelected = cartList.filter(ele => {
    //     return ele.customerName === tagName;
    // })
    var newBillDetail = {
        productName: product.productName,
        retailPrice: product.retailPrice,
        costPrice: product.costPrice,
        quantity: quantity
    }
    // cartList[indexCartSelected].billDetails = [...cartList[indexCartSelected].billDetails, newBillDetail]
    //do sth to check duplication of products
    cartList[indexCartSelected].billDetails.push(newBillDetail)

    dispatch({
        type: ADD_NEW_BILL_DETAIL_TO_CART,
        payload: cartList
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
            customerName: 'Khách #',
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
    return arr.filter(function (ele) {
        return ele.customerName !== value;
    });
}