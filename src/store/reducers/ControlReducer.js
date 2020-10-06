import { SET_ALERT, SET_MODAL } from 'src/store/actions/types';

const initialState = {
    alert: {
        message: '',
        type: ''
    },
    modal: {
        message: ''
    }
};

export default function control(state = initialState, action) {
    switch (action.type) {
        case SET_ALERT:
            return {
                ...state,
                alert : action.payload
            };
        case SET_MODAL:
            return {
                ...state,
                modal : action.payload
            };
        default:
            return state;
    }
}