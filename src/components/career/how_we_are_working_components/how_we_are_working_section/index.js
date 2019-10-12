import React from 'react';
import QuoteSection from '../quote_section';
import { PlayListIcon, CloudIcon, SortIcon, LocalActivityIcon, StatisticIcon } from './icons';
import { useMediaQuery } from 'react-responsive';
import deviceSizes from '../../../../responsive_design/device_sizes';

const HowWeAreWorkingSection = () => {
    const isMobile = useMediaQuery({ query: `(max-width: ${deviceSizes.mobileMaxWidth}px)` });

    return (
        <div className={`how-we-are-working-section${isMobile ? ' mobile' : ''}`}>
            <div className="how-we-are-working-content">
                <div className="title">
                    Как мы работаем
                </div>
                <div className="descriptions">
                    <div className="description">
                        <PlayListIcon className="icon" />
                        <div className="text">
                            Назначайте задачи своим коллегам, создавайте интересующие вас темы и участвуйте
                            в их обсуждении как в режиме live чата (прямо сейчас),
                            так и в формате форума (отложенного во время обсуждения)
                        </div>
                    </div>
                    <div className="description">
                        <CloudIcon className="icon" />
                        <div className="text">
                            Все рабочие документы, история
                            созданных задач и обсуждения хранятся
                            на облачном сервере с гибкой системой поиска
                        </div>
                    </div>
                    <div className="description">
                        <SortIcon className="icon" />
                        <div className="text">
                            Проводите фокус-группы и опросы среди
                            своих коллег
                        </div>
                    </div>
                    <div className="description">
                        <LocalActivityIcon className="icon" />
                        <div className="text">
                            Корпоративная жизнь: праздники, блоги и
                            интересные идеи коллег, новости
                            компании и фоотчеты с корпоративов -
                            всегда на самом видном месте
                        </div>
                    </div>
                    <div className="description">
                        <StatisticIcon className="icon" />
                        <div className="text">
                            Следите за статистикой активности на
                            портале через общую сводку или в виде
                            графиков
                        </div>
                    </div>
                </div>
            </div>
            <QuoteSection className="quote-section" />
        </div>
    );
};

export default HowWeAreWorkingSection;
