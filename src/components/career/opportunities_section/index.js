import React from 'react';
import Opportunity from './Opportunity'

const OpportunitiesSection = () => {
    return (
        <div className="opportunities-section">
            <div className="opportunities-content">
                <div className="quote">
                    Не выходи из комнаты, не совершай ошибку...
                    <div className="autor">- И. А. Бродский -</div>
                </div>
                <Opportunity>
                    Только удаленная работа на мощном корпоративном портале
                </Opportunity>
                <Opportunity>
                    Масштабные и амбициозные задачи в разработке IT решений для бизнеса и освоении новых рынков
                </Opportunity>
                <Opportunity>
                    Современные ресурсы (серверные, коммуникационные, FinTech, AI, Date Base)
                </Opportunity>
                <Opportunity>
                    Профессиональное окружение из старательно отобранных коллег
                </Opportunity>
                <Opportunity>
                    Говорим на 9-ти иностранных языках и еще множество программных
                </Opportunity>
                <Opportunity>
                    Предоставляем юридическую и бухгалтерскую помощь по всем вопросам сотрудничества и не только
                </Opportunity>
            </div>
        </div>
    );
};

export default OpportunitiesSection;
