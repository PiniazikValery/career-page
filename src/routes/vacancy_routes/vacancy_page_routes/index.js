import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VacancyPage from '../../../components/career/pages/vacancy_page';

const VacancyPageRoutes = (props) => {
    return (
        <Switch>
            <Route exact path={`${props.match.path}/`} render={() => <VacancyPage {...props} />} />
            <Route path={`${props.match.path}/questionary`} render={() => <div>Here will be questionary page</div>} />
        </Switch>
    );
};

export default VacancyPageRoutes;
