import { SET_ALERT } from 'src/store/actions/types';

export default function control(state = {}, action) {
    switch (action.type) {
        case SET_ALERT:
            return action.payload;
        default:
            return state;
    }
}