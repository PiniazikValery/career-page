import React, { useState } from 'react';
import DesktopVacancySection from './desktopVacancySection'

const VacancySection = () => {
    const [devSectionOpen, setDevSection] = useState(false);

    const [supportSectionOpen, setSupportSection] = useState(false);

    const [commerceSectionOpen, setCommerceSection] = useState(false);

    const opencloseDevSection = () => {
        setDevSection(!devSectionOpen);
        setSupportSection(false);
        setCommerceSection(false);
    };

    const opencloseSupportSection = () => {
        setSupportSection(!supportSectionOpen);
        setDevSection(false);
        setCommerceSection(false);
    };

    const opencloseCommerceSection = () => {
        setCommerceSection(!commerceSectionOpen);
        setDevSection(false);
        setSupportSection(false);
    };

    return (
        <DesktopVacancySection
            devSectionOpen={devSectionOpen}
            supportSectionOpen={supportSectionOpen}
            commerceSectionOpen={commerceSectionOpen}
            opencloseDevSection={opencloseDevSection}
            opencloseSupportSection={opencloseSupportSection}
            opencloseCommerceSection={opencloseCommerceSection}
        />
    );
};

export default VacancySection;
