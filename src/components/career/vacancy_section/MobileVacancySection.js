import React from 'react';
import { PlusIcon, MinusIcon } from './icons';

const MobileVacancySection = (props) => {
    return (
        <div className="vacancy-section">
            <div className="vacancy-content">
                <div className="intro">
                    Вакансии
                <div className="description">
                        Ищем лучших, а не ближайших!
                </div>
                </div>
                <div className="vacancy-block mobile">
                    <div className="archive">Архив</div>
                    <div onClick={props.opencloseDevSection} className="vacancy-section">
                        {props.devSectionOpen ? <MinusIcon /> : <PlusIcon />}
                        Дизайн и разработка
                </div>
                    <div className={`dev vacancies ${props.devSectionOpen ? '' : 'close'}`}>
                        <div className="vacancy">
                            <div className="position">PHP-программист</div>
                            <br />
                            <div className="salary-wrapper">
                                <div className="salary">от 1000 EUR</div>
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист машинного обучения</div>
                            <br />
                            <div className="salary-wrapper">
                                <div className="salary">от 1300 EUR</div>
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Solution Architect (Проектировщик веб-процессов)</div>
                            <br />
                            <div className="salary-wrapper">
                                <div className="salary">от 750 EUR</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={props.opencloseSupportSection} className="vacancy-section">
                        {props.supportSectionOpen ? <MinusIcon /> : <PlusIcon />}
                        Клиентская поддержка
                </div>
                    <div className={`support vacancies ${props.supportSectionOpen ? '' : 'close'}`}>
                        <div className="vacancy">
                            <div className="position">PHP-программист</div>
                            <br />
                            <div className="salary-wrapper">
                                <div className="salary">от 1000 EUR</div>
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист машинного обучения</div>
                            <br />
                            <div className="salary-wrapper">
                                <div className="salary">от 1300 EUR</div>
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Solution Architect (Проектировщик веб-процессов)</div>
                            <br />
                            <div className="salary-wrapper">
                                <div className="salary">от 750 EUR</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={props.opencloseCommerceSection} className="vacancy-section">
                        {props.commerceSectionOpen ? <MinusIcon /> : <PlusIcon />}
                        Коммерческий отдел
                </div>
                    <div className={`commerce vacancies ${props.commerceSectionOpen ? '' : 'close'}`}>
                        <div className="vacancy">
                            <div className="position">PHP-программист</div>
                            <br />
                            <div className="salary-wrapper">
                                <div className="salary">от 1000 EUR</div>
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист машинного обучения</div>
                            <br />
                            <div className="salary-wrapper">
                                <div className="salary">от 1300 EUR</div>
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Solution Architect (Проектировщик веб-процессов)</div>
                            <br />
                            <div className="salary-wrapper">
                                <div className="salary">от 750 EUR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileVacancySection;
