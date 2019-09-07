import React from 'react';
import AppBar from './app_bar';
import StatisticSection from './statistic_section';
import OpportunitiesSection from './opportunities_section';
import OurTeamSection from './our_team_section';
import HireSystemSection from './hire_system_section';

const Career = () => {
    return (
        <div>
            <AppBar />
            <div className="content">
                <StatisticSection />
                <OpportunitiesSection />
                <HireSystemSection />
                <OurTeamSection />
            </div>
        </div>
    );
};

export default Career;
