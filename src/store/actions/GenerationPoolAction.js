import axios from 'axios';

import { ADD_GENERATION_POOL } from './types';

export const addGenerationPoolAction = payload => {
    return {
        type: ADD_GENERATION_POOL,
        payload
    };
};

export const addGenerationPool = nbGenerations => dispatch => {

    return axios
        .post('http://localhost:3000/generation-pool', {
            nbGenerations
        })
        .then(response => {
            dispatch(addGenerationPoolAction(response.data));
        })
        .catch(error => {
            throw error;
        });

};