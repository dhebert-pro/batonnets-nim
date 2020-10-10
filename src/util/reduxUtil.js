import { showError } from 'src/util/alertUtil';

export const launchAction = (dispatch, action) => {
    return dispatch(action).catch(err => {
        showError(dispatch, err.message);
    });
};
