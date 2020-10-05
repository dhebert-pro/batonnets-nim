import React, { useState } from 'react';
import Game from './Game';

const startSticksPosition = Array(20).fill(1);

const GameContainer = () => {
    
    const [sticks, setSticks] = useState(startSticksPosition);

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
        const newSticks = sticks.map(stick => stick === 2 ? 0 : stick);
        setSticks(newSticks);
    };

    return (
        <Game sticks={sticks} onSelectStick={onSelectStick} onPlay={onPlay} />
    );
};

export default GameContainer;