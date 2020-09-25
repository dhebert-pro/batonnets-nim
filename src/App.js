import React from 'react';
import GenerationList from 'src/GenerationList';
import styled from 'styled-components';
import Sticks from 'src/assets/sticks.svg';

const Main = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    text-align: center;
    height: 100px;
    line-height: 100px;
    font-size: 2em;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    background-color: #94B0DA;
    display: flex;
    direction: flex-row;
    justify-content: center;
    font-family: 'Semi Coder', arial, sans-serif;
`;

const BackgroundImg = styled.img`
    width: 150px;
`;

const Footer = styled.footer`
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #FFFFFF;
    background-color: #515B5C;
`;

const Body = styled.div`
    padding: 1rem;
    flex: 1;
`;

const Title = styled.span`
    padding-left: 10px;
    flex: 1;
`;

const App = () => (
    <Main>
        <Header>
            <Title>Le jeu des bâtonnets</Title>
            <BackgroundImg src={Sticks} />
        </Header>
        <Body>
            <GenerationList />
        </Body>
        <Footer>
            Créé par David Hébert
        </Footer>
    </Main>
);

export default App;
