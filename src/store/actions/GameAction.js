import axios from 'axios';

import { ADD_GAME } from './types';

export const addGameAction = payload => {
    return {
        type: ADD_GAME,
        payload
    };
};

export const addGame = nbGenerations => dispatch => {

    return axios
        .post('http://localhost:3000/game', {
            nbGenerations
        })
        .then(response => {
            return dispatch(addGameAction(response.data));
        });

};