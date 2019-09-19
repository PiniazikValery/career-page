import React from 'react';
import { Point, EmailIcon } from './icons';

const HireSystem = (props) => {
    return (
        <div id="hire_system" className={`hire-system-section${props.mobile ? ' mobile' : ''}`}>
            <div className="hire-system-content">
                <div className="intro">
                    Система найма
                </div>
                <div className="line">
                    <div className="send-point">
                        <div className="point">
                            <Point />
                            <div className="point-content">
                                <div className="intro">
                                    ОТПРАВЛЯЕТЕ
                            <div className="description">
                                        анкету с кейсами или техническим заданием
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="check-point">
                        <div className="point">
                            <Point />
                            <div className="point-content">
                                <div className="intro">
                                    ПРОВЕРЯЕМ
                            <div className="description">
                                        вашу работу в течение 7 дней
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="answer-point">
                        <div className="point">
                            <Point />
                            <div className="point-content">
                                <div className="intro">
                                    ОТВЕЧАЕМ
                            <div className="description">
                                        либо приглашаем на собеседование в live-чат
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="finish-point"><EmailIcon /></div>
                </div>
            </div>
        </div>
    );
};

export default HireSystem;
