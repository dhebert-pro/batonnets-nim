import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import AlertMessage from './AlertMessage';

const AlertMessageContainer = () => {
    const [show, setShow] = useState(false);
    const [alertTimeout, setAlertTimeout] = useState();

    const alert = useSelector(state => {
        return state.control.alert;
    });

    const closeAlert = () => {
        setShow(false);
        clearTimeout(alertTimeout);
    };

    useEffect(() => {
        if (alert && alert.message) {
            if (show) closeAlert();
            setShow(true);
            const timeout = setTimeout(closeAlert, 10000);
            setAlertTimeout(timeout);
        }
    }, [alert]);

    return (
        <AlertMessage show={show} onClose={closeAlert} message={alert} />
    );
};

export default AlertMessageContainer;