import React from 'react';
import AppBar from '../../layout/app_bar';
import VacancyTitleSection from '../../vacancy_page_components/vacancy_title_section';
import VacancyDescriptionSection from '../../vacancy_page_components/vacancy_description_section';
import VacancyCommentsSection from '../../vacancy_page_components/vacancy_comments_section';

const VacancyPage = (props) => {
    return (
        <div className="page">
            <AppBar />
            <div id="page-content" className="content">
                <VacancyTitleSection {...props} />
                <VacancyDescriptionSection {...props} />
                <VacancyCommentsSection />
            </div>
        </div>
    );
};

export default VacancyPage;
