import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Menu = () => (
    <Navbar bg="dark" variant="dark">
        <Nav>
            <Nav.Link as={NavLink} to="/generations">Générations</Nav.Link>
            <Nav.Link as={NavLink} to="/agents">Agents</Nav.Link>
        </Nav>
    </Navbar>
);

export default Menu;