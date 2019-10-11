import React from 'react';
import { CareerPage, HowWeAreWorkingPage } from '../components/career';
import VacanciesRoutes from './vacancy_routes';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" >
                <Redirect to="/home" />
            </Route>
            <Route path="/home" component={CareerPage} />
            <Route path="/vacancy" component={VacanciesRoutes} />
            <Route path="/how_we_are_working" component={HowWeAreWorkingPage} />
        </Switch>
    );
};
