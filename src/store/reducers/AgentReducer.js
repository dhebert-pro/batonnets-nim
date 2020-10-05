import { FETCH_AGENT_LIST, DELETE_AGENT_LIST } from 'src/store/actions/types';

export default function agent(state = [], action) {
    switch (action.type) {
        case FETCH_AGENT_LIST:
            return action.agentList;
        case DELETE_AGENT_LIST:
            return state;
        default:
            return state;
    }
}