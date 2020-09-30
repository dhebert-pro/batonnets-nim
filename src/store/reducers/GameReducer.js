import { ADD_GAME } from 'src/store/actions/types';

export default function addGame(state = [], action) {
    switch (action.type) {
        case ADD_GAME:
            return action.payload;
        default:
            return state;
    }
}