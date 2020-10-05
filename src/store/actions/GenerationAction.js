import axios from 'axios';

import { FETCH_GENERATION_LIST, DELETE_GENERATION_LIST } from './types';

export const fetchGenerationListAction = generationList => {
    return {
        type: FETCH_GENERATION_LIST,
        generationList
    };
};

export const deleteGenerationListAction = () => {
    return {
        type: DELETE_GENERATION_LIST
    };
};

export const fetchGenerationList = () => dispatch => {

    return axios
        .get('/generations?filter=withWinner')
        .then(response => {
            return dispatch(fetchGenerationListAction(response.data));
        }).catch(err => {
            throw err.response.data || err.response || err;
        });

};

export const deleteGenerationList = () => dispatch => {

    return axios
        .delete('/generations')
        .then(() => {
            return dispatch(deleteGenerationListAction());
        }).catch(err => {
            throw err.response.data || err.response || err;
        });

};