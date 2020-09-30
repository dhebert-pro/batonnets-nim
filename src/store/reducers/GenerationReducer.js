import { FETCH_GENERATION_LIST } from 'src/store/actions/types';

export default function addGame(state = [], action) {
    switch (action.type) {
        case FETCH_GENERATION_LIST:
            return action.generationList;
        default:
            return state;
    }
}