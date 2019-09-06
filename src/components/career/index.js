import React from 'react';
import AppBar from './app_bar';
import StatisticSection from './statistic_section';
import OpportunitiesSection from './opportunities_section';

const Career = () => {
    return (
        <div>
            <AppBar />
            <div className="content">
                <StatisticSection />
                <OpportunitiesSection />
            </div>
        </div>
    );
};

export default Career;
