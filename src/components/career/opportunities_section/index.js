import React from 'react';
import Opportunity from './Opportunity';
import { Desktop, Mobile } from '../../../responsive_design';
import { useMediaQuery } from 'react-responsive';
import deviceSizes from '../../../responsive_design/device_sizes';

const OpportunitiesSection = () => {
    const isMobile = useMediaQuery({ query: `(max-width: ${deviceSizes.mobileMaxWidth}px)` });

    return (
        <div className={`opportunities-section${isMobile ? ' mobile' : ''}`}>
            <div className="opportunities-content">
                <Desktop>
                    <Opportunity>
                        Только удаленная работа на мощном корпоративном портале
                        <div className="quote">
                            "Не выходи из комнаты, не совершай ошибку..."
                            <div className="autor">
                                И.А. Бродский
                            </div>
                        </div>
                    </Opportunity>
                    <Opportunity>
                        Масштабные и амбициозные задачи в разработке IT решений для бизнеса и освоении новых рынков
                    </Opportunity>
                    <Opportunity>
                        Современные ресурсы (серверные, коммуникационные, FinTech, AI, Date Base)
                    </Opportunity>
                    <br />
                    <Opportunity>
                        Профессиональное окружение из старательно отобранных коллег
                    </Opportunity>
                    <Opportunity>
                        Говорим на 9-ти иностранных языках и еще множество программных
                    </Opportunity>
                    <Opportunity>
                        Предоставляем юридическую и бухгалтерскую помощь по всем вопросам сотрудничества и не только
                    </Opportunity>
                </Desktop>
                <Mobile>
                    <Opportunity mobile={true}>
                        Только удаленная работа на мощном корпоративном портале
                        <div className="quote">
                            "Не выходи из комнаты, не совершай ошибку..."
                            <br />
                            <div className="autor">
                                И.А. Бродский
                            </div>
                        </div>
                    </Opportunity>
                    <br />
                    <Opportunity mobile={true}>
                        Масштабные и амбициозные задачи в разработке IT решений для бизнеса и освоении новых рынков
                    </Opportunity>
                    <br />
                    <Opportunity mobile={true}>
                        Современные ресурсы (серверные, коммуникационные, FinTech, AI, Date Base)
                    </Opportunity>
                    <br />
                    <Opportunity mobile={true}>
                        Профессиональное окружение из старательно отобранных коллег
                    </Opportunity>
                    <br />
                    <Opportunity mobile={true}>
                        Говорим на 9-ти иностранных языках и еще множество программных
                    </Opportunity>
                    <br />
                    <Opportunity mobile={true}>
                        Предоставляем юридическую и бухгалтерскую помощь по всем вопросам сотрудничества и не только
                    </Opportunity>
                </Mobile>
            </div>
        </div>
    );
};

export default OpportunitiesSection;
