import React from 'react';
import AppBar from '../../layout/app_bar';
import StatisticSection from '../../main_page_components/statistic_section';
import OpportunitiesSection from '../../main_page_components/opportunities_section';
import OurTeamSection from '../../main_page_components/our_team_section';
import HireSystemSection from '../../main_page_components/hire_system_section';
import VacancySection from '../../main_page_components/vacancy_section';
import AlternativesSection from '../../main_page_components/alternatives_section';
import OurRelaxSection from '../../main_page_components/our_relax_section';
import ContactsSection from '../../main_page_components/contacts_section';

const Career = () => {
    return (
        <div className="page">
            <AppBar />
            <div className="content">
                <StatisticSection />
                <OpportunitiesSection />
                <HireSystemSection />
                <VacancySection />
                <AlternativesSection />
                <OurTeamSection />
                <OurRelaxSection />
                <ContactsSection />
            </div>
        </div>
    );
};

export default Career;
