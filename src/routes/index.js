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
            <Route exact path="/vacancy/php_programmer" render={() => <VacancyPage vacancy="php_programmer" />} />
            <Route exact path="/vacancy/machine_learning_specialist" render={() => <VacancyPage vacancy="machine_learning_specialist" />} />
            <Route exact path="/vacancy/solution_architect" render={() => <VacancyPage vacancy="solution_architect" />} />
            <Route exact path="/vacancy/mathematician_analyst" render={() => <VacancyPage vacancy="mathematician_analyst" />} />
            <Route exact path="/vacancy/1c_programmer" render={() => <VacancyPage vacancy="one_c_programmer" />} />
            <Route exact path="/vacancy/hr_director" render={() => <VacancyPage vacancy="hr_director" />} />
            <Route exact path="/vacancy/recruiter" render={() => <VacancyPage vacancy="recruiter" />} />
            <Route exact path="/vacancy/danish_support_specialist" render={() => <VacancyPage vacancy="danish_support_specialist" />} />
            <Route exact path="/vacancy/spanish_support_specialist" render={() => <VacancyPage vacancy="spanish_support_specialist" />} />
            <Route exact path="/vacancy/german_support_specialist" render={() => <VacancyPage vacancy="german_support_specialist" />} />
            <Route exact path="/vacancy/dutch_support_specialist" render={() => <VacancyPage vacancy="dutch_support_specialist" />} />
            <Route exact path="/vacancy/polish_support_specialist" render={() => <VacancyPage vacancy="polish_support_specialist" />} />
            <Route exact path="/vacancy/finnish_support_specialist" render={() => <VacancyPage vacancy="finnish_support_specialist" />} />
            <Route exact path="/vacancy/french_support_specialist" render={() => <VacancyPage vacancy="french_support_specialist" />} />
            <Route exact path="/vacancy/swedish_support_specialist" render={() => <VacancyPage vacancy="swedish_support_specialist" />} />
            <Route exact path="/vacancy/brand_manager" render={() => <VacancyPage vacancy="brand_manager" />} />
            <Route exact path="/vacancy/plumbing_brand_manager" render={() => <VacancyPage vacancy="plumbing_brand_manager" />} />
            <Route exact path="/vacancy/international_logistician" render={() => <VacancyPage vacancy="international_logistician" />} />
            <Route exact path="/vacancy/expres_delivery_logistician" render={() => <VacancyPage vacancy="expres_delivery_logistician" />} />
        </Switch>
    );
};
