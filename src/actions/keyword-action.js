import axios from 'axios';
import {
    ADD_KEYWORD, ADD_SECONDKEY, DELETE_SECONDKEY, GET_KEYWORDS_OF_PRODUCT, RESET_TRANSCRIPT,
} from '../constants';
import { config } from '../config'

const local_url = process.env.REACT_APP_LOCAL_URL;

export const addKeyword = (primaryKey, secondKeys) => (dispatch) => {
    const body = {
        primaryKey: primaryKey,
        secondKeys: secondKeys
    }

    return new Promise((resolve, reject) => {
        axios.post(`${local_url}/api/keyword/add/primarykey}`, body, config)
            .then(res => {
                dispatch({
                    type: ADD_KEYWORD,
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


export const getKeywordsOfProduct = (product_id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.get(`${local_url}/api/keyword/get/${product_id}`, null, config)
            .then(res => {
                dispatch({
                    type: GET_KEYWORDS_OF_PRODUCT,
                    payload: res.data
                })
                console.log(res.data)
                resolve(res.data)
            })
            .catch(err => {
                // dispatch({
                //     type: ADD_NEW_PRODUCT_FAIL,
                // })
                console.log(err)
                reject(err)
            })
    })
}

export const addNewSecondKey = (primaryKey, secondKey) => dispatch => {
    const body = {
        primaryKey: primaryKey,
        secondKey: secondKey
    }

    return new Promise((resolve, reject) => {
        axios.post(`${local_url}/api/keyword/add/secondkey`, body, config)
            .then(res => {
                dispatch({
                    type: ADD_SECONDKEY,
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

export const deleteSecondKey = (primaryKey, secondKey) => dispatch => {
    const body = {
        primaryKey: primaryKey,
        secondKey: secondKey
    }
    return new Promise((resolve, reject) => {
        axios.put(`${local_url}/api/keyword/delete/secondkey/${secondKey}`, body, config)
            .then(res => {
                dispatch({
                    type: DELETE_SECONDKEY,
                })
                resolve()
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
