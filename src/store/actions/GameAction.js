import axios from 'axios';

import { ADD_GAME } from './types';

export const addGameAction = () => {
    return {
        type: ADD_GAME
    };
};

export const addGame = () => dispatch => {

    return axios
        .post('/game')
        .then(() => {
            return dispatch(addGameAction());
        }).catch(err => {
            throw err.response.data || err.response || err;
        });

};