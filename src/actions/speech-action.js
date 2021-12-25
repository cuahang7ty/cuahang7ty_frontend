import axios from 'axios';
import { LOAD_TRANSCRIPT } from '../constants';

export const loadTranscript = (newTranscript) => dispatch => {
    console.log(newTranscript)
    dispatch({
        type: LOAD_TRANSCRIPT,
        payload: newTranscript
    })
}