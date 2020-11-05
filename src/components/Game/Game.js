import React from 'react';
import PropTypes from 'prop-types';
import Stick from 'src/assets/stick.png';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { keyframes, css } from '@emotion/core';
import styled from '@emotion/styled';

const PlayerName = styled.div(({selected}) => {
    let selectedStyle = '';
    if (selected) {
        selectedStyle = `
            font-weight: 600;
            color: red;
        `;
    }
    return `
        top: 60%;
        left: 20%;
        margin: auto;
        position: absolute;
        ${selectedStyle}
    `;
});

const CPUName = styled.div(({selected}) => {
    let selectedStyle = '';
    if (selected) {
        selectedStyle = `
            font-weight: 600;
            color: red;
        `;
    }
    return `
        top: 60%;
        right: 20%;
        margin: auto;
        position: absolute;
        text-align: right;
        ${selectedStyle}
    `;
});

const ValidateButton = styled(Button)`
    top: 60%;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
`;

const GameContent = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
`;

const changeColorSelectKF = keyframes`
    0% {
        filter: hue-rotate(0) saturate(100%);
    }
    50% {
        filter: hue-rotate(-25deg) saturate(350%);
    }
    100% {
        filter: hue-rotate(-50deg) saturate(600%);
    }
`;

const changeColorUnselectKF = keyframes`
    100% {
        filter: hue-rotate(0) saturate(100%);
    }
    50% {
        filter: hue-rotate(-25deg) saturate(350%);
    }
    0% {
        filter: hue-rotate(-50deg) saturate(600%);
    }
`;

const changeColorVanishKF = keyframes`
    0% {
        filter: opacity(100%);
    }
    50% {
        filter: opacity(50%);
    }
    100% {
        filter: opacity(0%);
    }
`;

const changeColorSelect = css`
    animation: ${changeColorSelectKF} 0.1s linear 1;
`;

const changeColorUnselect = css`
    animation: ${changeColorUnselectKF} 0.1s linear 1;
`;

const changeColorVanish = css`
    animation: ${changeColorVanishKF} 0.1s linear 1;
`;

const StickTile = styled(Image)(({state, position}) => {
    let changeColor = '';
    let pointer = 'pointer';
    if (state === 2) {
        changeColor = changeColorSelect;
    } else if (state === 3) {
        changeColor = changeColorUnselect;
    } else if (state === 0) {
        changeColor = changeColorVanish;
        pointer = 'default';
    }
    return css`
        position: absolute;
        ${changeColor};
        animation-fill-mode: forwards;
        height: 40%;
        top: 10%;
        left: ${5 * position}%;
        margin: auto;
        cursor: ${pointer};
    `;
});

const GameTable = styled.div`
    max-width: 800px;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
`;

const Info = styled.div`
    width: 100%;
    text-align: center;   
    position: absolute;
`;

const Game = ({ sticks, onSelectStick, onPlay, agent, isPlayerTurn }) => (
    <GameContent>
        <GameTable>
            <Info>Bâtons restants : {sticks.filter(stick => !!stick).length}</Info>
            {
                sticks.map((stick, index) => (
                    <StickTile onClick={stick !== 0 ? onSelectStick(index) : null} state={stick} position={index} key={index} id={`stick${index}`} src={Stick} />
                ))
            }
            <PlayerName selected={isPlayerTurn}>Joueur</PlayerName>
            <ValidateButton variant="primary" onClick={onPlay}>Valider</ValidateButton>
            <CPUName selected={!isPlayerTurn}>{ agent.name ? `AG-${agent.name.substring(0,4)}` : 'CPU' }</CPUName>
        </GameTable>
    </GameContent>
);

Game.propTypes = {
    isPlayerTurn: PropTypes.bool.isRequired,
    sticks: PropTypes.array.isRequired,
    onSelectStick: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    agent: PropTypes.shape({
        name: PropTypes.string
    }).isRequired
};

export default Game;