import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AgentList from './AgentList';
import { fetchAgentList } from 'src/store/actions/AgentAction';
import { launchAction } from 'src/util/reduxUtil';

const play = (event, row) => {
    console.log('PLAY', event.target, row);
};

const AgentListContainer = () => {

    const agentList = useSelector(state => {
        return state.agent;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        launchAction(dispatch, fetchAgentList());
    });

    return (
        <AgentList
            data={agentList}
            onClick={play}
        />
    );
};

export default AgentListContainer;