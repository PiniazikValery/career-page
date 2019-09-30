import React from 'react';
import AppBar from '../../app_bar';
import VacancyTitleSection from '../../vacancy_title_section';

const VacancyPage = (props) => {
    return (
        <div className="career-page">
            <AppBar />
            <div className="content">
                <VacancyTitleSection {...props} />
            </div>
        </div>
    );
};

export default VacancyPage;
