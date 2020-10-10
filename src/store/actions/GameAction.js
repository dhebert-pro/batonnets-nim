import axios from 'axios';

import { ADD_GAME } from './types';

export const addGameAction = payload => {
    return {
        type: ADD_GAME,
        payload
    };
};

export const addGame = () => dispatch => {

    return axios
        .post('/game')
        .then(response => {
            return dispatch(addGameAction(response.data));
        }).catch(err => {
            throw err.response.data;
        });

};