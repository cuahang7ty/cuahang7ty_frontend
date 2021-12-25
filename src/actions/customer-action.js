import axios from 'axios';
import {
    ADD_NEW_CUSTOMER,
    DELETE_A_CUSTOMER_FOREVER,
    EDIT_CUSTOMER,
    GET_ALL_CUSTOMER
} from '../constants';
import { config } from '../config'
// import { returnErrors } from './errorAction';

const local_url = process.env.REACT_APP_LOCAL_URL;

export const getAllCustomer = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.get(`${local_url}/api/customer/`, null, config)
            .then(res => {
                dispatch({
                    type: GET_ALL_CUSTOMER,
                    payload: res.data
                })
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const addNewCustomer = (fullName, numberphone, level) => (dispatch) => {
    const body = {
        fullName: fullName,
        numberphone: numberphone,
        level: level,
    }
    return new Promise((resolve, reject) => {
        axios.post(`${local_url}/api/customer/add`, body, config)
            .then(res => {
                dispatch({
                    type: ADD_NEW_CUSTOMER,
                })
                resolve(res.data)
            })
            .catch(err => {
                // dispatch({
                //     type: ADD_NEW_CUSTOMER_FAIL,
                // })
                reject(err)
            })
    })
}

export const editCustomer = (_id, fullName, numberphone, address, level) => (dispatch) => {
    const body = {
        fullName: fullName,
        numberphone: numberphone,
        address: address,
        level: level,
    }

    return new Promise((resolve, reject) => {
        axios.put(`${local_url}/api/customer/edit/${_id}`, body, config)
            .then(res => {
                dispatch({
                    type: EDIT_CUSTOMER,
                })
                resolve(res.data)
            })
            .catch(err => {
                // dispatch({
                //     type: ADD_NEW_CUSTOMER_FAIL,
                // })
                reject(err)
            })
    })
}


export const deleteACustomerForever = (_id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${local_url}/api/customer/delete/${_id}`, null, config)
            .then(res => {
                dispatch({
                    type: DELETE_A_CUSTOMER_FOREVER,
                })
                resolve(res.data)
            })
            .catch(err => {
                // dispatch({
                //     type: ADD_NEW_CUSTOMER_FAIL,
                // })
                alert(err)
                reject(err)
            })
    })
}


