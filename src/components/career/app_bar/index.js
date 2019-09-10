import React from 'react';
import JobsLogo from './JobsLogo';
import AppBarList from './AppBarList';

const AppBar = () => {
    return (
        <div className="app-bar">
            <JobsLogo />
            <AppBarList />
        </div>
    );
};

export default AppBar;
