import React from 'react';
import { Point, EmailIcon } from './icons';

const HireSystemSection = () => {
    return (
        <div className="hire-system-section">
            <div className="hire-system-content">
                <div className="intro">
                    Система найма
                </div>
                <div className="line">
                    <div className="send-point"><Point /></div>
                    <div className="check-point"><Point /></div>
                    <div className="answer-point"><Point /></div>
                    <div className="finish-point"><EmailIcon /></div>
                </div>
            </div>
        </div>
    );
};

export default HireSystemSection;
