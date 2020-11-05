import axios from 'axios';

import { FETCH_AGENT_LIST, FETCH_AGENT, DELETE_AGENT_LIST } from './types';

export const fetchAgentListAction = agentList => {
    return {
        type: FETCH_AGENT_LIST,
        agentList
    };
};

export const fetchAgentAction = agent => {
    return {
        type: FETCH_AGENT,
        agent
    };
};

export const deleteAgentListAction = () => {
    return {
        type: DELETE_AGENT_LIST
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

export const fetchAgent = id => dispatch => {

    return axios
        .get(`/agents/${id}`)
        .then(response => {
            return dispatch(fetchAgentAction(response.data));
        }).catch(err => {
            throw err.response.data || err.response || err;
        });

};

export const deleteAgentList = () => dispatch => {

    return axios
        .delete('/agents')
        .then(() => {
            return dispatch(deleteAgentListAction());
        }).catch(err => {
            throw err.response.data || err.response || err;
        });

};