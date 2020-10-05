import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Menu = ({onEmptyDatabase}) => (
    <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav>
                <Nav.Link as={NavLink} to="/generations">Générations</Nav.Link>
                <Nav.Link as={NavLink} to="/agents">Agents</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link onClick={onEmptyDatabase}>Vider la base</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

Menu.propTypes = {
    onEmptyDatabase: PropTypes.func.isRequired
};

export default Menu;