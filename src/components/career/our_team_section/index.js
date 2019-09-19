import React from 'react';
import ImageSlider from './ImageSlider';
import { useMediaQuery } from 'react-responsive';
import deviceSizes from '../../../responsive_design/device_sizes';

const OurTeamSection = () => {
    const isMobile = useMediaQuery({ query: `(max-width: ${deviceSizes.mobileMaxWidth}px)` });

    return (
        <div id="our_team" className="our-team-section">
            <div className="our-team-content">
                <div className="intro">
                    Наша команда
                    <div className="description">
                        65 человек из 7 стран мира (РФ, Украины, РБ, Латвии, Италии, Испании и Швейцарии), - в ленте фотографии самых смелых из нас :)
                    </div>
                </div>
                <ImageSlider
                    mobile={isMobile}
                    items={
                        [
                            {
                                imgSrc: 'ourTeamPhotos/man2.png',
                                name: 'undefined',
                                position: 'undefined'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man3.png',
                                name: 'undefined',
                                position: 'undefined'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/women1.png',
                                name: 'undefined',
                                position: 'undefined'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man4.png',
                                name: 'Кукреш Сергей',
                                position: 'CEO'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man5.png',
                                name: 'undefined',
                                position: 'undefined'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man6.png',
                                name: 'undefined',
                                position: 'undefined'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man7.png',
                                name: 'undefined',
                                position: 'undefined'
                            },
                            {
                                imgSrc: 'ourTeamPhotos/man1.png',
                                name: 'undefined',
                                position: 'undefined'
                            }
                        ]
                    }
                />
            </div>
        </div>
    );
};

export default OurTeamSection;
