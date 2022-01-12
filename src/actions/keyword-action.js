import axios from 'axios';
import {
    ADD_KEYWORD, GET_KEYWORDS_OF_PRODUCT, RESET_TRANSCRIPT,
} from '../constants';
import { config } from '../config'

const local_url = process.env.REACT_APP_LOCAL_URL;

export const addKeyword = (primaryKey, secondKeys) => (dispatch) => {
    const body = {
        primaryKey: primaryKey,
        secondKeys: secondKeys
    }

    return new Promise((resolve, reject) => {
        axios.post(`${local_url}/api/keyword/add}`, body, config)
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

export const resetTranscript = () => dispatch  => {
    dispatch({
        type: RESET_TRANSCRIPT
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
