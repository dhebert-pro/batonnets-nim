import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import AlertMessage from './AlertMessage';

const AlertMessageContainer = () => {
    const [show, setShow] = useState(false);
    const [alertTimeout, setAlertTimeout] = useState();

    const control = useSelector(state => {
        return state.control;
    });

    const closeAlert = () => {
        setShow(false);
        clearTimeout(alertTimeout);
    };

    useEffect(() => {
        if (control.message) {
            if (show) closeAlert();
            setShow(true);
            const timeout = setTimeout(closeAlert, 10000);
            setAlertTimeout(timeout);
        }
    }, [control]);

    return (
        <AlertMessage show={show} onClose={closeAlert} message={control} />
    );
};

export default AlertMessageContainer;