import axios from 'axios';
import {
    ADD_KEYWORD,
    ADD_NEW_PRODUCT,
    DELETE_A_PRODUCT_FOREVER,
    EDIT_PRODUCT,
    GET_ALL_PRODUCT,
    SEARCH_BY_KEYWORDS
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

export const addNewProduct = (tenMatHang, giaBanLe, giaNhap, soLuongTon) => (dispatch) => {
    const body = {
        tenMatHang: tenMatHang,
        giaBanLe: giaBanLe,
        giaNhap: giaNhap,
        soLuongTon: soLuongTon,
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

export const updateProduct = (_id, tenMatHang, giaBanLe, giaNhap, soLuongTon) => (dispatch) => {
    const body = {
        tenMatHang: tenMatHang,
        giaBanLe: giaBanLe,
        giaNhap: giaNhap,
        soLuongTon: soLuongTon,
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

export const deleteAProductForever = (_id) => (dispatch) => {
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

export const addKeyword = (_id, keyword) => (dispatch) => {
    const body = {
        keyword: keyword
    }

    return new Promise((resolve, reject) => {
        axios.put(`${local_url}/api/product/add/keyword/${_id}`, body, config)
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

export const searchByKeywords = (transcript) => dispatch => {
    const body = {
        transcript: transcript
    }
    return new Promise((resolve, reject) => {
        axios.put(`${local_url}/api/product/get/keywords`, body, config)
            .then(async res => {
                if (res.data.length > 0) {
                    const result = await classifyResults(res.data)
                    dispatch({
                        type: SEARCH_BY_KEYWORDS,
                        payload: result
                    })
                    resolve(result)
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}

const classifyResults = (resultsOfSearching) => {
    return new Promise(resolve => {
        const bestCount = resultsOfSearching[0].count
        let topResults = []
        let badResults = []
        const promises = resultsOfSearching.map(result => {
            return new Promise(resolve => {
                if (bestCount === result.count)
                    topResults.push(result.product)
                else
                    badResults.push(result.product)
                resolve()
            })
        })
        Promise.all(promises).then(() => {
            resolve({ topResults, badResults })
        })
    })
}





