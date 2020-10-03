import { setAlert } from 'src/store/actions/ControlAction';
export const showError = (dispatch, message) => {
    dispatch(setAlert({
        'type': 'danger',
        'message': message || 'Une erreur inattendue s\'est produite'
    }));
};

export const showWarning = (dispatch, message) => {
    dispatch(setAlert({
        'type': 'warning',
        'message': message || 'L\'exécution a échoué'
    }));
};

export const showSuccess = (dispatch, message) => {
    dispatch(setAlert({
        'type': 'success',
        'message': message || 'L\'exécution s\'est bien déroulée'
    }));
};