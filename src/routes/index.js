import React from 'react';
import { CareerPage, DanishSupportVacancyPage } from '../components/career';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" >
                <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={CareerPage} />
            <Route exact path="/vacancy/danish_support" component={DanishSupportVacancyPage} />
        </Switch>
    );
};
