import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './icons';

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
        <div className="vacancy-section">
            <div className="vacancy-content">
                <div className="intro">
                    Вакансии
                    <div className="description">
                        Ищем лучших, а не ближайших!
                    </div>
                </div>
                <div className="vacancy-block">
                    <div onClick={opencloseDevSection} className="vacancy-section">
                        {devSectionOpen ? <MinusIcon /> : <PlusIcon />}
                        Дизайн и разработка
                    </div>
                    <div className={`dev vacancies ${devSectionOpen ? '' : 'close'}`}>
                        <div className="vacancy">

                        </div>
                        <div className="vacancy">

                        </div>
                        <div className="vacancy">

                        </div>
                    </div>
                    <div onClick={opencloseSupportSection} className="vacancy-section">
                        {supportSectionOpen ? <MinusIcon /> : <PlusIcon />}
                        Клиентская поддержка
                    </div>
                    <div className={`support vacancies ${supportSectionOpen ? '' : 'close'}`}>
                        <div className="vacancy">

                        </div>
                        <div className="vacancy">

                        </div>
                        <div className="vacancy">

                        </div>
                    </div>
                    <div onClick={opencloseCommerceSection} className="vacancy-section">
                        {commerceSectionOpen ? <MinusIcon /> : <PlusIcon />}
                        Коммерческий отдел
                    </div>
                    <div className={`commerce vacancies ${commerceSectionOpen ? '' : 'close'}`}>
                        <div className="vacancy">

                        </div>
                        <div className="vacancy">

                        </div>
                        <div className="vacancy">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VacancySection;
