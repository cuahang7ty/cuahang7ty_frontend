import axios from 'axios';
import {
    ADD_NEW_PRODUCT,
    DELETE_A_PRODUCT_FOREVER,
    EDIT_PRODUCT,
    GET_ALL_PRODUCT,
} from '../constants';
import { config } from '../config'
// import { returnErrors } from './errorAction';

const local_url = process.env.REACT_APP_LOCAL_URL;

export const getAllProduct = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.get(`${local_url}/api/product/`, null, config)
            .then(res => {
                dispatch({
                    type: GET_ALL_PRODUCT,
                    payload: res.data
                })
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const addNewProduct = (productName, retailPrice, costPrice, stock) => (dispatch) => {
    const body = {
        productName: productName,
        retailPrice: retailPrice,
        costPrice: costPrice,
        stock: stock,
    }

    return new Promise((resolve, reject) => {
        axios.post(`${local_url}/api/product/add`, body, config)
            .then(res => {
                dispatch({
                    type: ADD_NEW_PRODUCT,
                })
                resolve(res.data)
            })
            .catch(err => {
                // dispatch({
                //     type: ADD_NEW_PRODUCT_FAIL,
                // })
                reject(err)
            })
    })
}

export const updateProduct = (_id, productName, retailPrice, costPrice, stock) => (dispatch) => {
    const body = {
        productName: productName,
        retailPrice: retailPrice,
        costPrice: costPrice,
        stock: stock,
    }

    return new Promise((resolve, reject) => {
        axios.put(`${local_url}/api/product/update/${_id}`, body, config)
            .then(res => {
                dispatch({
                    type: EDIT_PRODUCT,
                })
                resolve(res.data)
            })
            .catch(err => {
                // dispatch({
                //     type: ADD_NEW_PRODUCT_FAIL,
                // })
                reject(err)
            })
    })
}

export const deleteAProductForever = (_id) => dispatch => {
    return new Promise((resolve, reject) => {
        axios.delete(`${local_url}/api/product/delete/${_id}`, null, config)
            .then(res => {
                dispatch({
                    type: DELETE_A_PRODUCT_FOREVER,
                })
                resolve(res.data)
            })
            .catch(err => {
                // dispatch({
                //     type: ADD_NEW_PRODUCT_FAIL,
                // })
                alert(err)
                reject(err)
            })
    })
}





