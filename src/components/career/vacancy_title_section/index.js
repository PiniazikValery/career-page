import React from 'react';

const VacancyTitleSection = (props) => {
    return (
        <div className="vacancy_title_section">
            <div className="map-background" style={{ backgroundImage: 'url("/map.png")' }} />
            <div className="vacancy-title">{props.job_title}</div>
            <div className="vacancy-salary">от {props.salary} EUR</div>
            <div className="fill-profile">Заполнить анкету</div>
        </div>
    );
};

export default VacancyTitleSection;
