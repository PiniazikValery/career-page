import React from 'react';
import { useMediaQuery } from 'react-responsive';
import deviceSizes from '../../../responsive_design/device_sizes';

const JobsLogo = () => {
    const isMobile = useMediaQuery({ query: `(max-width: ${deviceSizes.mobileMaxWidth}px)` });

    return (
        <div className={`jobs-logo${isMobile ? ' mobile' : ''}`} style={{ backgroundImage: 'url(/jobs-logo.png)' }} />
    );
};

export default JobsLogo;
