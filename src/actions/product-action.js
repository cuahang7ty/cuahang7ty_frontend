import axios from 'axios';
import {
    GET_ALL_PRODUCT
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