import { FETCH_BEST_MOVE } from 'src/store/actions/types';

const initialState = {
    bestMove: {}
};

export default function move(state = initialState, action) {
    switch (action.type) {
        case FETCH_BEST_MOVE:
            return {
                ...state,
                bestMove: action.bestMove
            };
        default:
            return state;
    }
}