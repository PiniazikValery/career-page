import React from 'react';
import ImageSlider from './ImageSlider';

const OurTeamSection = () => {
    return (
        <div className="our-team-section">
            <div className="our-team-content">
                <div className="intro">
                    Наша команда
                    <div className="description">
                        65 человек из 7 стран мира (РФ, Украины, РБ, Латвии, Италии, Испании и Швейцарии), - в ленте фотографии самых смелых из нас :)
                    </div>
                </div>
                <ImageSlider
                    items={
                        [
                            {
                                imgSrc: 'ourTeamPhotos/women1.png',
                                name: 'Лана Дэль Рэй',
                                position: 'Певица'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/women2.png',
                                name: 'Анджелина Джоли',
                                position: 'Актриса'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man2.png',
                                name: 'Брэд Питт',
                                position: 'Актер'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man3.png',
                                name: 'Крис Хемсворт',
                                position: 'Актер'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/women4.png',
                                name: 'Эмма Уотсон',
                                position: 'Актриса'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man4.png',
                                name: 'Роберт Дауни(младший)',
                                position: 'Актер'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/women3.png',
                                name: 'Скарлетт Йоханссон',
                                position: 'Актриса'
                            }
                        ]
                    }
                />
            </div>
        </div>
    );
};

export default OurTeamSection;
