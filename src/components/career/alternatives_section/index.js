import React, { useState, useEffect } from 'react';
import { Rectangle, Ellipse, Triangle } from './icons';
import { useMediaQuery } from 'react-responsive';
import deviceSizes from '../../../responsive_design/device_sizes';

const AlternativesSection = () => {
    const [backgroundItems, SetBackgroundItems] = useState([]);

    const isMobile = useMediaQuery({ query: `(max-width: ${deviceSizes.mobileMaxWidth}px)` });

    useEffect(() => {
        let items = [];
        for (let i = 1; i < 5; i++) {
            items.push({
                itemType: Rectangle,
                top: Math.floor(Math.random() * 70),
                left: Math.floor(Math.random() * 90),
                rotate: Math.floor(Math.random() * 360)
            });
        }
        for (let i = 1; i < 5; i++) {
            items.push({
                itemType: Ellipse,
                top: Math.floor(Math.random() * 70),
                left: Math.floor(Math.random() * 90),
                rotate: Math.floor(Math.random() * 360)
            });
        }
        for (let i = 1; i < 5; i++) {
            items.push({
                itemType: Triangle,
                top: Math.floor(Math.random() * 70),
                left: Math.floor(Math.random() * 90),
                rotate: Math.floor(Math.random() * 360)
            });
        }
        SetBackgroundItems(items);
    }, []);

    return (
        <div className="alternatives-section">
            {backgroundItems.map((item, index) => {
                return <div key={index} className="background-item" style={{
                    top: `${item.top}%`,
                    left: `${item.left}%`,
                    transform: `rotate(${item.rotate}deg)`
                }}><item.itemType /></div>
            })}
            <div className="alternatives-content">
                <div className="intro">
                    Не нашли подходящую вакансию?
                    <div className={`description${isMobile ? ' mobile' : ''}`}>
                        Мы всегда открыты для перспективных и энергичных людей! Отправьте нам свое резюме, и в случае появления вакансии, соответствующей вашему опыту, мы обязательно свяжемся с вами!
                    </div>
                </div>
            </div>
            <div className="centered-button">
                <div className="send-resume-button">
                    Отправить резюме
            </div>
            </div>
        </div>
    );
};

export default AlternativesSection;
