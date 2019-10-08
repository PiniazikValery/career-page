import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
                            <div className="salary">от 1300 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/php_programmer#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист машинного обучения</div>
                            <div className="salary">от 1300 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/machine_learning_specialist#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Solution Architect (Проектировщик веб-процессов)</div>
                            <div className="salary">от 750 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/solution_architect#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Математик аналитик</div>
                            <div className="salary">от 700 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/mathematician_analyst#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Программист 1С</div>
                            <div className="salary">от 900 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/1c_programmer#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
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
                            <div className="position">HR-директор</div>
                            <div className="salary">от 1300 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/hr_director#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Рекрутер</div>
                            <div className="salary">от 800 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/recruiter#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист поддержки со знанием датского языка</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/danish_support_specialist#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист поддержки со знанием испанского языка</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/spanish_support_specialist#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист поддержки со знанием немецкого языка</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/german_support_specialist#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист поддержки со знанием нидерландского языка</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/dutch_support_specialist#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист поддержки со знанием польского языка</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/polish_support_specialist#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист поддержки со знанием финского языка</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/finnish_support_specialist#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист поддержки со знанием французского языка</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/french_support_specialist#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Специалист поддержки со знанием шведского языка</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/swedish_support_specialist#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
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
                            <div className="position">Бренд-менеджер</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/brand_manager#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Бренд-менеджер по сантехнике</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/plumbing_brand_manager#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Логист международный</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/international_logistician#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="vacancy">
                            <div className="position">Логист по экспресс-доставкам</div>
                            <div className="salary">от 1000 EUR</div>
                            <div className="more">
                                <Link to="/vacancy/expres_delivery_logistician#page-content">
                                    <div className="text">Подробнее</div>
                                </Link>
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
