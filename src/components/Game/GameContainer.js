import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Game from './Game';
import { showError } from 'src/util/alertUtil';
import { showModal } from 'src/util/modalUtil';
import { useParams } from 'react-router-dom';
import { fetchAgent } from 'src/store/actions/AgentAction';
import { fetchBestMove } from 'src/store/actions/MoveAction';
import { launchAction } from 'src/util/reduxUtil';
import { getNbNotNull } from 'src/util/arrayUtil';

const REMOVE_STICKS = 'REMOVE_STICKS';

const startSticksPosition = Array(20).fill(1);

const GameContainer = () => {

    const [sticks, setSticks] = useState(startSticksPosition);
    const [isPlayerTurn, setPlayerTurn] = useState(false);

    const dispatch = useDispatch();

    const { agentId } = useParams();

    const agent = useSelector(state => {
        return state.agent.agent;
    });

    let bestMove = useSelector(state => {
        return state.move.bestMove;
    });

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
            setPlayerTurn(!isPlayerTurn);
        }
    };

    const removeSticks = nbSticks => {
        let remainingSticks = nbSticks;
        const newSticks = sticks.map(stick => {
            if (remainingSticks && stick !== 0) {
                remainingSticks--;
                return 0;
            } else {
                return stick;
            }
        });
        setSticks(newSticks);
        setPlayerTurn(!isPlayerTurn);
    };

    const playAction = (name, params) => {
        if (name === REMOVE_STICKS) {
            removeSticks(params[0]);
        }
    };

    useEffect(() => {
        launchAction(dispatch, fetchAgent(agentId));
        bestMove = undefined;
    }, []);

    useEffect(() => {
        if (bestMove) {
            playAction(bestMove.name, bestMove.params);
        }
    }, [bestMove]);

    useEffect(() => {
        if (!isPlayerTurn && getNbNotNull(sticks) !== 0) {
            launchAction(dispatch, fetchBestMove(agentId, [getNbNotNull(sticks)]));
        }
    }, [isPlayerTurn]);

    useEffect(() => {
        if (getNbNotNull(sticks) === 0) {
            showModal(dispatch, isPlayerTurn ? 'Vous avez gagné' : 'Vous avez perdu');
        }
    }, [sticks]);

    return (
        <Game 
            agent={agent}
            sticks={sticks} 
            onSelectStick={onSelectStick} 
            onPlay={onPlay}
            isPlayerTurn={isPlayerTurn}
        />
    );
};

export default GameContainer;