import React from 'react';
import Menu from './Menu';
import { launchAction } from 'src/util/reduxUtil';
import { useDispatch } from 'react-redux';
import { showSuccess } from 'src/util/alertUtil';
import { deleteGenerationList, fetchGenerationList } from 'src/store/actions/GenerationAction';
import { deleteAgentList, fetchAgentList } from 'src/store/actions/AgentAction';

const MenuContainer = () => {
    const dispatch = useDispatch();

    const onEmptyDatabase = event => {
        event.preventDefault();
        launchAction(dispatch, deleteGenerationList()).then(() => {
            launchAction(dispatch, deleteAgentList()).then(() => {
                showSuccess(dispatch, 'La base a été vidée');
                launchAction(dispatch, fetchGenerationList());
                launchAction(dispatch, fetchAgentList());
            }); 
        });
    };

    return (
        <Menu onEmptyDatabase={onEmptyDatabase} />
    );
};

export default MenuContainer;