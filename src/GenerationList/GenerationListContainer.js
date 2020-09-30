import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GenerationList from './GenerationList';
import { fetchGenerationList } from 'src/store/actions/GenerationAction';
import { addGame } from 'src/store/actions/GameAction';

const columns = [
    {
        title: '#',
        field: 'generation'
    },
    {
        title: 'Victoires',
        field: 'winning'
    },
    {
        title: 'Défaites',
        field: 'losing'
    }
];

const play = (event, row) => {
    console.log('PLAY', event.target, row);
};

const container = () => {
    const [nbGenerations, setNbGenerations] = useState('');

    const generationList = useSelector(state => {
        return state.generation;
    });
    const game = useSelector(state => {
        return state.game;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenerationList());
    }, [game]);

    const onChangeNbGenerations = event => {
        event.preventDefault();
        const value = event.target.value;
        if (
            !value || 
            (
                !isNaN(value) && 
                Number.isInteger(parseInt(value))
            )
        ) {
            setNbGenerations(value);
        }
    };

    const onGenerate = event => {
        event.preventDefault();
        if (
            nbGenerations && 
            !isNaN(nbGenerations) && 
            Number.isInteger(parseInt(nbGenerations))
        ) {
            dispatch(addGame(nbGenerations)).then(game => {
                alert(`${game.payload.count} générations dans la base`);
            });
        } else {
            alert('Vous devez renseigner un nombre');
        }
    };

    return (
        <GenerationList 
            data={generationList} 
            columns={columns}
            onClick={play}
            nbGenerations={nbGenerations}
            onChangeNbGenerations={onChangeNbGenerations}
            onGenerate={onGenerate}
        />
    );
};

export default container;