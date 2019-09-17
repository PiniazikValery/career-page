import React from 'react';

const DesktopStatisticSection = () => {
    return (
        <div className="statistic-section">
            <div className="map-background" style={{ backgroundImage: 'url("map.png")' }} />
            <div className="statistic-content">
                <div className="intro">
                    Рекрутинговый сайт интернет-магазина<img alt="tile.expert logo" className="te-logo" src="logo.png" /><br />
                </div>
                <div className="statistic-numbers">
                    <div className="statistic-number">
                        <h1>>200</h1>
                        <div className="statistic-description">
                            производителей в портфеле
                    </div>
                    </div>
                    <div className="statistic-number about-customers">
                        <h1>>240</h1>
                        <div className="statistic-description">
                            тыс. посетителей в месяц
                    </div>
                    </div>
                    <div className="from">
                        <h3>из</h3>
                    </div>
                    <div className="statistic-number about-countries">
                        <h1>23</h1>
                        <div className="statistic-description">
                            стран мира
                    </div>
                    </div>
                    <div className="statistic-number">
                        <h1>>10</h1>
                        <div className="statistic-description">
                            млн. € в год (оборот)
                    </div>
                    </div>
                    <div className="statistic-number">
                        <h1>9,5/10</h1>
                        <div className="statistic-description">
                            рэйтинг компании на <a href="#trustpilot">Trustpilot</a>
                        </div>
                    </div>
                </div>
                <div className="look-at-vacancies">Посмотреть вакансии</div>
            </div>
        </div>
    );
};

export default DesktopStatisticSection;
