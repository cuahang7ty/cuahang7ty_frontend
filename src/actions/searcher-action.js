import axios from 'axios';
import { LOAD_TRANSCRIPT, SEARCH_BY_KEYWORDS, RESET_TRANSCRIPT, CLEAR_RESULTS } from '../constants';

import { config } from '../config'
const local_url = process.env.REACT_APP_LOCAL_URL;

export const loadTranscript = (transcript) => dispatch => {
    dispatch({
        type: LOAD_TRANSCRIPT,
        payload: transcript
    })
}

export const resetTranscript = () => dispatch => {
    dispatch({
        type: RESET_TRANSCRIPT
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
                else{
                    dispatch({
                        type: CLEAR_RESULTS
                    })
                    resolve(null)
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}

const classifyResults = (allResults) => {
    return new Promise(resolve => {
        const bestCount = allResults[0].count
        let topResults = []
        let badResults = []
        const promises = allResults.map(result => {
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

export const clearResults = () => dispatch => {
    dispatch({
        type: CLEAR_RESULTS
    })
}