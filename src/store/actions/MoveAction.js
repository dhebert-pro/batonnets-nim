import axios from 'axios';

import { FETCH_BEST_MOVE } from './types';

export const fetchBestMoveAction = bestMove => {
    return {
        type: FETCH_BEST_MOVE,
        bestMove
    };
};

export const fetchBestMove = (agentId, params) => dispatch => {
    return axios
        .get(`/moves?agentId=${agentId}&params=${params}`)
        .then(response => {
            return dispatch(fetchBestMoveAction(response.data));
        }).catch(err => {
            throw err.response.data || err.response || err;
        });
};