import React from 'react';

const MobileStatisticSection = () => {
    return (
        <div className="statistic-section mobile">
            <div className="map-background mobile" style={{ backgroundImage: 'url("map.png")' }} />
            <div className="statistic-content">
                <div className="intro">
                    Рекрутинговый сайт интернет-магазина
                </div>
                <div className="statistic-numbers mobile">
                    <div className="statistic-number mobile">
                        <h1>>200</h1>
                        <div className="statistic-description">
                            производителей в портфеле
                    </div>
                    </div>
                    <div className="statistic-number mobile">
                        <h1>>10</h1>
                        <div className="statistic-description">
                            млн. € в год (оборот)
                    </div>
                    </div>
                    <br />
                    <div className="statistic-number about-customers mobile">
                        <h1>>240</h1>
                        <div className="statistic-description">
                            тыс. посетителей в месяц
                    </div>
                    </div>
                    <div className="from mobile">
                        <h3>из</h3>
                    </div>
                    <div className="statistic-number about-countries mobile">
                        <h1>23</h1>
                        <div className="statistic-description">
                            стран мира
                    </div>
                    </div>
                    <br />
                    <div className="statistic-number mobile">
                        <h1>9,5/10</h1>
                        <div className="statistic-description">
                            рэйтинг компании на <a href="#trustpilot">Trustpilot</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileStatisticSection;
