import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GenerationList from './GenerationList';
import { fetchGenerationList } from 'src/store/actions/GenerationAction';
import { addGame } from 'src/store/actions/GameAction';
import { launchAction } from 'src/util/reduxUtil';
import { showSuccess, showWarning } from 'src/util/alertUtil';

const GenerationListContainer = () => {
    const [nbGenerations, setNbGenerations] = useState('');
    const [nbGenerationsCreated, setNbGenerationsCreated] = useState(0);

    const generationList = useSelector(state => {
        return state.generation;
    });

    const dispatch = useDispatch();

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

    const createGeneration = () => {
        return launchAction(dispatch, addGame()).then(() => {
            setNbGenerationsCreated(nbGenerationsCreated + 1);
        });
    };

    const onGenerate = event => {
        event.preventDefault();
        if (
            nbGenerations && 
            !isNaN(nbGenerations) && 
            Number.isInteger(parseInt(nbGenerations))
        ) {
            createGeneration();
        } else {
            showWarning(dispatch, 'Vous devez renseigner un nombre');
        }
    };

    useEffect(() => {
        launchAction(dispatch, fetchGenerationList());
    }, []);

    useEffect(() => {
        if (nbGenerationsCreated !== 0) {
            if (nbGenerationsCreated < nbGenerations) {
                createGeneration();
            } else {
                setNbGenerationsCreated(0);
                showSuccess(dispatch, `${nbGenerations} générations dans la base`);
                launchAction(dispatch, fetchGenerationList());
            }
        }
    }, [nbGenerationsCreated]);

    return (
        <GenerationList 
            data={generationList}
            nbGenerations={nbGenerations}
            nbGenerationsCreated={nbGenerationsCreated}
            onChangeNbGenerations={onChangeNbGenerations}
            onGenerate={onGenerate}
        />
    );
};

export default GenerationListContainer;