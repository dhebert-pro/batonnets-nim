import axios from 'axios';

import { FETCH_GENERATION_LIST } from './types';

export const fetchGenerationListAction = generationList => {
    return {
        type: FETCH_GENERATION_LIST,
        generationList
    };
};

export const fetchGenerationList = () => dispatch => {

    return axios
        .get('http://localhost:3000/generations')
        .then(response => {
            return dispatch(fetchGenerationListAction(response.data));
        }).catch(err => {
            throw err.response.data || err.response || err;
        });

};