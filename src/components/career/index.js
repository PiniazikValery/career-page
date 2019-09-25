import React from 'react';
import AppBar from './app_bar';
import StatisticSection from './statistic_section';
import OpportunitiesSection from './opportunities_section';
import OurTeamSection from './our_team_section';
import HireSystemSection from './hire_system_section';
import VacancySection from './vacancy_section';
import AlternativesSection from './alternatives_section';
import OurRelaxSection from './our_relax_section';
import ContactsSection from './contacts_section';

const Career = () => {
    return (
        <div className="career-page">
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
