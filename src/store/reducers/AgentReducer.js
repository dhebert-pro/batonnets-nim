import { FETCH_AGENT_LIST, FETCH_AGENT, DELETE_AGENT_LIST } from 'src/store/actions/types';

const initialState = {
    agentList: [],
    agent: {}
};

export default function agent(state = initialState, action) {
    switch (action.type) {
        case FETCH_AGENT_LIST:
            return {
                ...state,
                agentList: action.agentList
            };
        case FETCH_AGENT:
            return {
                ...state,
                agent: action.agent
            };
        case DELETE_AGENT_LIST:
            return state;
        default:
            return state;
    }
}