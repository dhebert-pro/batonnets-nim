import { FETCH_AGENT_LIST } from 'src/store/actions/types';

export default function fetchAgentList(state = [], action) {
    switch (action.type) {
        case FETCH_AGENT_LIST:
            return action.agentList;
        default:
            return state;
    }
}