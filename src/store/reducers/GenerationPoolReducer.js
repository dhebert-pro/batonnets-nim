import { ADD_GENERATION_POOL } from 'src/store/actions/types';

export default function addGenerationPool(state = [], action) {
    switch (action.type) {
        case ADD_GENERATION_POOL:
            return action.payload;
        default:
            return state;
    }
}