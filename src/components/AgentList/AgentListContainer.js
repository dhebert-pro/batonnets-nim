import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AgentList from './AgentList';
import { fetchAgentList } from 'src/store/actions/AgentAction';
import { launchAction } from 'src/util/reduxUtil';

const AgentListContainer = () => {

    const agentList = useSelector(state => {
        return state.agent.agentList;
    });
    
    const dispatch = useDispatch();

    useEffect(() => {
        launchAction(dispatch, fetchAgentList());
    }, []);

    return (
        <AgentList
            data={agentList}
        />
    );
};

export default AgentListContainer;