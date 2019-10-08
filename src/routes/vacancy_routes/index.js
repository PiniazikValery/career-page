import React from 'react';
import VacancyPageRoutes from './vacancy_page_routes';
import { Route, Switch } from 'react-router-dom';

const Routes = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.path}/php_programmer`} render={(props) => <VacancyPageRoutes {...props} vacancy="php_programmer" />} />
            <Route path={`${match.path}/machine_learning_specialist`} render={(props) => <VacancyPageRoutes {...props} vacancy="machine_learning_specialist" />} />
            <Route path={`${match.path}/solution_architect`} render={(props) => <VacancyPageRoutes {...props} vacancy="solution_architect" />} />
            <Route path={`${match.path}/mathematician_analyst`} render={(props) => <VacancyPageRoutes {...props} vacancy="mathematician_analyst" />} />
            <Route path={`${match.path}/1c_programmer`} render={(props) => <VacancyPageRoutes {...props} vacancy="one_c_programmer" />} />
            <Route path={`${match.path}/hr_director`} render={(props) => <VacancyPageRoutes {...props} vacancy="hr_director" />} />
            <Route path={`${match.path}/recruiter`} render={(props) => <VacancyPageRoutes {...props} vacancy="recruiter" />} />
            <Route path={`${match.path}/danish_support_specialist`} render={(props) => <VacancyPageRoutes {...props} vacancy="danish_support_specialist" />} />
            <Route path={`${match.path}/spanish_support_specialist`} render={(props) => <VacancyPageRoutes {...props} vacancy="spanish_support_specialist" />} />
            <Route path={`${match.path}/german_support_specialist`} render={(props) => <VacancyPageRoutes {...props} vacancy="german_support_specialist" />} />
            <Route path={`${match.path}/dutch_support_specialist`} render={(props) => <VacancyPageRoutes {...props} vacancy="dutch_support_specialist" />} />
            <Route path={`${match.path}/polish_support_specialist`} render={(props) => <VacancyPageRoutes {...props} vacancy="polish_support_specialist" />} />
            <Route path={`${match.path}/finnish_support_specialist`} render={(props) => <VacancyPageRoutes {...props} vacancy="finnish_support_specialist" />} />
            <Route path={`${match.path}/french_support_specialist`} render={(props) => <VacancyPageRoutes {...props} vacancy="french_support_specialist" />} />
            <Route path={`${match.path}/swedish_support_specialist`} render={(props) => <VacancyPageRoutes {...props} vacancy="swedish_support_specialist" />} />
            <Route path={`${match.path}/brand_manager`} render={(props) => <VacancyPageRoutes {...props} vacancy="brand_manager" />} />
            <Route path={`${match.path}/plumbing_brand_manager`} render={(props) => <VacancyPageRoutes {...props} vacancy="plumbing_brand_manager" />} />
            <Route path={`${match.path}/international_logistician`} render={(props) => <VacancyPageRoutes {...props} vacancy="international_logistician" />} />
            <Route path={`${match.path}/expres_delivery_logistician`} render={(props) => <VacancyPageRoutes {...props} vacancy="expres_delivery_logistician" />} />
        </Switch>
    );
};

export default Routes;
