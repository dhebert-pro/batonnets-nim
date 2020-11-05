import { ADD_GAME } from 'src/store/actions/types';

export default function game(state = [], action) {
    switch (action.type) {
        case ADD_GAME:
            return state;
        default:
            return state;
    }
}