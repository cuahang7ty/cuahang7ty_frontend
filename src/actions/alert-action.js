import axios from 'axios';
import {

} from '../constants';
import { config } from '../config'
// import { returnErrors } from './errorAction';

const local_url = process.env.REACT_APP_LOCAL_URL;

export const makeAlert = () => (dispatch) => {
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