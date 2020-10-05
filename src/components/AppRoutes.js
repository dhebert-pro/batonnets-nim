import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GenerationList from 'src/components/GenerationList';
import AgentList from 'src/components/AgentList';
import Game from 'src/components/Game';

const AppRoutes = () => (
    <Switch>
        <Route path="/generations">
            <GenerationList />
        </Route>
        <Route path="/agents">
            <AgentList />
        </Route>
        <Route path="/play">
            <Game />
        </Route>
        <Route path="/">
            <Redirect to="/generations"/>
        </Route>
    </Switch>
);

export default AppRoutes;