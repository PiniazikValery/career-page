import React from 'react';
import strings from '../pages/vacancy_page/page_content';
import { useMediaQuery } from 'react-responsive';
import deviceSizes from '../../../responsive_design/device_sizes';

const VacancyTitleSection = (props) => {
    const isMobile = useMediaQuery({ query: `(max-width: ${deviceSizes.mobileMaxWidth}px)` });

    return (
        <div className={`vacancy_title_section${isMobile ? ' mobile' : ''}`}>
            <div className="map-background" style={{ backgroundImage: 'url("/map.png")' }} />
            <div className="vacancy-title">{strings[props.vacancy].name}</div>
            <div className="vacancy-salary">{strings[props.vacancy].salary}</div>
            <div className="fill-profile">{strings.fill_form}</div>
        </div>
    );
};

export default VacancyTitleSection;
