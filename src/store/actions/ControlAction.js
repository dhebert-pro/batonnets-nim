import { SET_ALERT } from './types';

export const setAlertAction = payload => {
    return {
        type: SET_ALERT,
        payload
    };
};

export const setAlert = alert => dispatch => {

    dispatch(setAlertAction(alert));

};