import React from 'react';
import { Desktop, Mobile } from '../../../../responsive_design';
import DesktopStatisticSection from './DesktopStatisticSection';
import MobileStatisticSection from './MobileStatisticSection';

const StatisticSection = () => {
    return (
        [
            <Desktop key="desktop-statistic-section">
                <DesktopStatisticSection />
            </Desktop>,
            <Mobile key="mobile-statistic-section">
                <MobileStatisticSection />
            </Mobile>
        ]
    );
};

export default StatisticSection;
