import { FETCH_GENERATION_LIST, DELETE_GENERATION_LIST } from 'src/store/actions/types';

export default function generation(state = [], action) {
    switch (action.type) {
        case FETCH_GENERATION_LIST:
            return action.generationList;
        case DELETE_GENERATION_LIST:
            return state;
        default:
            return state;
    }
}