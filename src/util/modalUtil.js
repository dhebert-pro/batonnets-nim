import { setModal } from 'src/store/actions/ControlAction';

export const showModal = (dispatch, message) => {
    dispatch(setModal({
        'message': message
    }));
};