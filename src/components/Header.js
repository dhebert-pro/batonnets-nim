import React from 'react';
import Sticks from 'src/assets/sticks.svg';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeaderContainer = styled(Container)`
    font-size: 2em;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.4rem;
    background-color: #94B0DA;
    font-family: 'Semi Coder', arial, sans-serif;
    height: 100px;
`;

const BackgroundImg = styled.img`
    width: 150px;
`;

const Header = () => (
    <HeaderContainer fluid className="p-0">
        <Row className="h-100 m-0">
            <Col lg={{ span: 8, offset: 2 }} className="text-center align-self-center text-uppercase p-0">
                Le jeu des bâtonnets
            </Col>
            <Col lg={2} className="align-self-end d-none d-lg-block p-0">
                <BackgroundImg src={Sticks} className="float-right" />
            </Col>
        </Row>
    </HeaderContainer>
);

export default Header;