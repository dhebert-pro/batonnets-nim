import { SET_ALERT, SET_MODAL } from './types';

export const setAlertAction = payload => {
    return {
        type: SET_ALERT,
        payload
    };
};

export const setModalAction = payload => {
    return {
        type: SET_MODAL,
        payload
    };
};

export const setAlert = alert => dispatch => {

    dispatch(setAlertAction(alert));

};

export const setModal = modal => dispatch => {

    dispatch(setModalAction(modal));

};