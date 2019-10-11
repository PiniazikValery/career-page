import React, { useState } from 'react';
import DesktopVacancySection from './DesktopVacancySection';
import MobileVacancySection from './MobileVacancySection';
import { Desktop, Mobile } from '../../../../responsive_design';

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
        [
            <Desktop key="desktop-vacancy-section">
                < DesktopVacancySection
                    devSectionOpen={devSectionOpen}
                    supportSectionOpen={supportSectionOpen}
                    commerceSectionOpen={commerceSectionOpen}
                    opencloseDevSection={opencloseDevSection}
                    opencloseSupportSection={opencloseSupportSection}
                    opencloseCommerceSection={opencloseCommerceSection}
                />
            </Desktop>
            ,
            <Mobile key="mobile-vacancy-section">
                <MobileVacancySection
                    devSectionOpen={devSectionOpen}
                    supportSectionOpen={supportSectionOpen}
                    commerceSectionOpen={commerceSectionOpen}
                    opencloseDevSection={opencloseDevSection}
                    opencloseSupportSection={opencloseSupportSection}
                    opencloseCommerceSection={opencloseCommerceSection}
                />
            </Mobile>
        ]
    );
};

export default VacancySection;
