import React from 'react';
import { LocationPoint } from './icons';
import ImageSlider from './ImageSlider';
import { useMediaQuery } from 'react-responsive';
import deviceSizes from '../../../../responsive_design/device_sizes';

const OurRelaxSection = () => {
    const isMobile = useMediaQuery({ query: `(max-width: ${deviceSizes.mobileMaxWidth}px)` });

    return (
        <div className={`our-relax-section${isMobile ? ' mobile' : ''}`}>
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
                        mobile={isMobile}
                        images={[
                            {
                                imgSrc: 'ourRelaxPhotos/photo1.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo2.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo3.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo4.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo5.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo6.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo7.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo8.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo9.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo10.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo11.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo12.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo13.png'
                            },
                            {
                                imgSrc: 'ourRelaxPhotos/photo14.png'
                            },
                        ]}
                    />
                    <div className={`description${isMobile ? ' mobile' : ''}`}>
                        <div className="sharp">
                            #
                    </div>
                        Каждый год мы собираемся вместе в какой-нибудь замечательной стране и отлично проводим  время, компания оплачивает все расходы :)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurRelaxSection;
