import React from 'react';
import JobsLogo from './JobsLogo';
import AppBarList from './AppBarList';
import MobileMenu from './MobileMenu';
import { Desktop, Mobile } from '../../../../responsive_design';

const AppBar = () => {
    return (
        <div className="app-bar">
            <JobsLogo />
            <Desktop>
                <AppBarList />
            </Desktop>
            <Mobile>
                <MobileMenu />
            </Mobile>
        </div>
    );
};

export default AppBar;
