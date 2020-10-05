import React, { useState } from 'react';
import Game from './Game';

const startSticksPosition = Array(20).fill(1);

const GameContainer = () => {
    
    const [sticks, setSticks] = useState(startSticksPosition);

    const onSelectStick = position => event => {
        event.preventDefault();
        console.log('EVENT');
        const newSticks = [...sticks];
        const oldPosition = newSticks[position];
        if (oldPosition === 1 || oldPosition === 3) {
            newSticks[position] = 2;
        } else {
            newSticks[position] = 3;
        }
        setSticks(newSticks);
    };

    return (
        <Game sticks={sticks} onSelectStick={onSelectStick} />
    );
};

export default GameContainer;