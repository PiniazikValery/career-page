import React from 'react';
import { CareerPage, VacancyPage } from '../components/career';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" >
                <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={CareerPage} />
            <Route exact path="/vacancy/php_programmer"
                render={() => <VacancyPage
                    vacancy="php_programmer"
                    job_title="PHP-программист"
                    salary={1000}
                />}
            />
        </Switch>
    );
};
