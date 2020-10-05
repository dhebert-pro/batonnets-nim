import { showError } from 'src/util/alertUtil';

export const launchAction = (dispatch, action, callback) => {
    return dispatch(action).then(callback).catch(err => {
        showError(dispatch, err.message);
    });
};