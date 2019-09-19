import React from 'react';
import { PlusIcon, MinusIcon, RightArrow } from './icons';

const DesktopVacancySection = (props) => {
    return (
        <div id="vacancies" className="vacancy-section">
            <div className="vacancy-content">
                <div className="intro">
                    Вакансии
                    <div className="description">
                        Ищем лучших, а не ближайших!
                    </div>
                </div>
                <div className="vacancy-block">
                    <div className="archive">Архив</div>
                    <div onClick={props.opencloseDevSection} className="vacancy-section">
                        {props.devSectionOpen ? <MinusIcon /> : <PlusIcon />}
                        Дизайн и разработка
                    </div>
                    <div className={`dev vacancies ${props.devSectionOpen ? '' : 'close'}`}>
                        <div className="vacancy">
                            <div className="position">PHP-программист</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <div className="text">Детали</div>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист машинного обучения</div>
                            <div className="salary">от 1300 EUR</div>
                            <div className="more">
                                <div className="text">Детали</div>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Solution Architect (Проектировщик веб-процессов)</div>
                            <div className="salary">от 750 EUR</div>
                            <div className="more">
                                <div className="text">Детали</div>
                                <RightArrow />
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
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <div className="text">Детали</div>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист машинного обучения</div>
                            <div className="salary">от 1300 EUR</div>
                            <div className="more">
                                <div className="text">Детали</div>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Solution Architect (Проектировщик веб-процессов)</div>
                            <div className="salary">от 750 EUR</div>
                            <div className="more">
                                <div className="text">Детали</div>
                                <RightArrow />
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
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <div className="text">Детали</div>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист машинного обучения</div>
                            <div className="salary">от 1300 EUR</div>
                            <div className="more">
                                <div className="text">Детали</div>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Solution Architect (Проектировщик веб-процессов)</div>
                            <div className="salary">от 750 EUR</div>
                            <div className="more">
                                <div className="text">Детали</div>
                                <RightArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopVacancySection;
