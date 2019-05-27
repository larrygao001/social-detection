import axios from 'axios';
import { LOAD_DATA, GET_ERRORS} from './types';

export const search = input => async dispatch => {
    await axios.post('/api/search', input)
        .then(res => {
            dispatch({
                type: LOAD_DATA,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}