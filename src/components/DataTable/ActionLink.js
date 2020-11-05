import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Action = styled(Link)`
    text-decoration: none !important;
    color: inherit !important;
`;

const ActionLink = props => {
    const id = props.action.id.reduce((result, element) => result[element], props.data);
    return (
        <OverlayTrigger
            placement='bottom'
            overlay={
                <Tooltip>
                    {props.action.tooltip}
                </Tooltip>
            }
        >
            <Action to={props.action.id ? `${props.action.link}/${id}` : props.action.link}>
                <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit" tabIndex="0" type="button">
                    <span className="MuiIconButton-label">
                        <span className="material-icons MuiIcon-root" aria-hidden="true">
                            {props.action.icon}
                        </span>
                    </span>
                    <span className="MuiTouchRipple-root"></span>
                </button>
            </Action>
        </OverlayTrigger>
    );
};
ActionLink.propTypes = {
    action: PropTypes.shape({
        tooltip: PropTypes.string,
        link: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        id: PropTypes.array
    }).isRequired,
    data: PropTypes.object.isRequired
};

export default ActionLink;