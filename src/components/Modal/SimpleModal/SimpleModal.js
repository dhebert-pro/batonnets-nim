import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const SimpleModal = ({show, modal, onClose}) => (
    <Modal show={show}>
        <Modal.Body>{modal.message}</Modal.Body>
        <Modal.Footer>
            <Button onClick={onClose} variant="primary">
                Close
            </Button>
        </Modal.Footer>
    </Modal>
);

SimpleModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    modal: PropTypes.shape({
        message: PropTypes.string.isRequired
    })
};

export default SimpleModal;