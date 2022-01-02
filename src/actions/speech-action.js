import axios from 'axios';
import { LOAD_TRANSCRIPT } from '../constants';

export const loadTranscript = (transcript) => dispatch => {
    dispatch({
        type: LOAD_TRANSCRIPT,
        payload: transcript
    })
}