import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Game from './Game';
import { showError } from 'src/util/alertUtil';
import { showModal } from 'src/util/modalUtil';
import { useParams } from 'react-router-dom';
import { fetchAgent } from 'src/store/actions/AgentAction';
import { launchAction } from 'src/util/reduxUtil';

const startSticksPosition = Array(20).fill(1);

const GameContainer = () => {
    
    const [sticks, setSticks] = useState(startSticksPosition);

    const dispatch = useDispatch();

    const { agentId } = useParams();

    const agent = useSelector(state => {
        return state.agent.agent;
    });

    useEffect(() => {
        launchAction(dispatch, fetchAgent(agentId));
    }, []);

    useEffect(() => {
        console.log('AGENT', agent);
        const nbSticks = sticks.filter(stick => !!stick).length;
        if (nbSticks === 0) {
            showModal(dispatch, 'La partie est terminée');
        }
    }, [sticks]);

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