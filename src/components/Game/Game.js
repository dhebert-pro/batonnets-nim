import React from 'react';
import PropTypes from 'prop-types';
import Stick from 'src/assets/stick.png';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import styled, { keyframes, css } from 'styled-components';

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

const changeColorSelect = css`
    animation: ${changeColorSelectKF} 0.3s linear 1;
`;

const changeColorUnselect = css`
    animation: ${changeColorUnselectKF} 0.3s linear 1;
`;

const StickTile = styled(Image)`
    position: absolute;
    ${props => {
        if (props.state === 2) {
            return changeColorSelect;
        } else if (props.state === 3) {
            return changeColorUnselect;
        } else {
            return '';
        }
    }};
    animation-fill-mode: forwards;
    height: 40%;
    top: 5%;
    left: ${props => 5 * props.position}%;
    margin: auto;
    cursor: pointer;
`;

const GameTable = styled.div`
    max-width: 800px;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
`;

const Game = ({ sticks, onSelectStick }) => (
    <GameContent>
        <GameTable>
            {
                sticks.map((stick, index) => (
                    stick && <StickTile onClick={onSelectStick(index)} state={stick} position={index} key={index} id={`stick${index}`} src={Stick} />
                ))
            }
            <ValidateButton variant="primary" onClick={onSelectStick(3)}>Valider</ValidateButton>
        </GameTable>
    </GameContent>
);

Game.propTypes = {
    sticks: PropTypes.array.isRequired,
    onSelectStick: PropTypes.func.isRequired,
    onValidate: PropTypes.func.isRequired
};

export default Game;