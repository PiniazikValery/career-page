import React from 'react';
import { LocationPoint } from './icons';
import ImageSlider from './ImageSlider';

const OurRelaxSection = () => {
    return (
        <div className="our-relax-section">
            <div className="layers">
                <div className="dots-layer" />
                <div className="location-layer">
                    <div className="location">
                        <LocationPoint />
                        ЭТНА, СИЦИЛИЯ
                    </div>
                </div>
                <div className="slider-layer" >
                    <ImageSlider
                        images={[
                            {
                                imgSrc: 'ourTeamPhotos/man3.png'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man2.png'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man4.png'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man2.png'
                            },
                        ]} />
                    <div className="description">Some text</div>
                </div>
            </div>
        </div>
    );
};

export default OurRelaxSection;
