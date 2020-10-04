import axios from 'axios';

import { FETCH_AGENT_LIST } from './types';

export const fetchAgentListAction = agentList => {
    return {
        type: FETCH_AGENT_LIST,
        agentList
    };
};

export const fetchAgentList = () => dispatch => {

    return axios
        .get('/agents')
        .then(response => {
            return dispatch(fetchAgentListAction(response.data));
        }).catch(err => {
            throw err.response.data || err.response || err;
        });

};