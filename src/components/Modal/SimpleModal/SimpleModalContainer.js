import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SimpleModal from './SimpleModal';

const SimpleModalContainer = () => {
    const [show, setShow] = useState(false);

    const modal = useSelector(state => {
        return state.control.modal;
    });

    const closeModal = () => {
        setShow(false);
    };

    useEffect(() => {
        if (modal && modal.message) {
            setShow(true);
        }
    }, [modal]);

    return (
        <SimpleModal show={show} modal={modal} onClose={closeModal} />
    );
};

export default SimpleModalContainer;