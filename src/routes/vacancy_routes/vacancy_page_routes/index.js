import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VacancyPage from '../../../components/career/pages/vacancy_page';
import QuestionaryPage from '../../../components/career/pages/questionary_page';

const VacancyPageRoutes = (props) => {
    return (
        <Switch>
            <Route exact path={`${props.match.path}/`} render={() => <VacancyPage {...props} />} />
            <Route path={`${props.match.path}/questionary`} render={() => <QuestionaryPage {...props} />} />
        </Switch>
    );
};

export default VacancyPageRoutes;
