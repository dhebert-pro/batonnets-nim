import React from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

const AlertMessage = ({show, onClose, message}) => (
    <Alert show={show} onClose={onClose} variant={message.type} dismissible>{message.message}</Alert>
);

AlertMessage.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    message: PropTypes.object
};

export default AlertMessage;