import React from 'react';
import AppBar from '../../layout/app_bar';
import HowWeAreWorkingSection from '../../how_we_are_working_components/how_we_are_working_section';

const HowWeAreWorkingPage = () => {
    return (
        <div className="page">
            <AppBar />
            <div className="content">
                <HowWeAreWorkingSection />
            </div>
        </div>
    );
};

export default HowWeAreWorkingPage;
