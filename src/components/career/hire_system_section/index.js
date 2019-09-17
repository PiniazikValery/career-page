import React from 'react';
import { Desktop, Mobile } from '../../../responsive_design';
import HireSystem from './HireSystem';

const HireSystemSection = () => {
    return (
        [
            <Desktop key="desktop-hire-system-section">
                <HireSystem mobile={false} />
            </Desktop>
            ,
            <Mobile key="mobile-hire-system-section">
                <HireSystem mobile={true} />
            </Mobile>
        ]
    );
};

export default HireSystemSection;
