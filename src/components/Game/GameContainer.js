import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Game from './Game';
import { showError } from 'src/util/alertUtil';

const startSticksPosition = Array(20).fill(1);

const GameContainer = () => {
    
    const [sticks, setSticks] = useState(startSticksPosition);

    const dispatch = useDispatch();

    const onSelectStick = position => event => {
        event.preventDefault();
        const newSticks = [...sticks];
        const oldPosition = newSticks[position];
        if (oldPosition === 1 || oldPosition === 3) {
            newSticks[position] = 2;
        } else if (oldPosition === 2) {
            newSticks[position] = 3;
        }
        setSticks(newSticks);
    };

    const onPlay = event => {
        event.preventDefault();
        const nbSticks = sticks.filter(stick => stick === 2).length;
        if (nbSticks > 3) {
            showError(dispatch, 'Vous ne pouvez pas sélectionner plus de 3 bâtons');
        } else if (nbSticks === 0) {
            showError(dispatch, 'Vous devez sélectionner au moins 1 bâton');
        } else {
            const newSticks = sticks.map(stick => stick === 2 ? 0 : stick);
            setSticks(newSticks);
        }
    };

    return (
        <Game sticks={sticks} onSelectStick={onSelectStick} onPlay={onPlay} />
    );
};

export default GameContainer;