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
                <ImageSlider />
            </div>
        </div>
    );
};

export default OurTeamSection;
