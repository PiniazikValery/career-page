import React from 'react';
import { CommentsIcon, MailIcon, InstagramIcon, PinterestIcon, FacebookIcon, TwitterIcon } from './icons';
import { useMediaQuery } from 'react-responsive';
import deviceSizes from '../../../responsive_design/device_sizes';
import { Desktop } from '../../../responsive_design';

const ContactsSection = () => {
    const isMobile = useMediaQuery({ query: `(max-width: ${deviceSizes.mobileMaxWidth}px)` });

    return (
        <div id="contact" className="contacts-section">
            <div className="contacts-content">
                <div className="intro">
                    Контакты
                    <div className="description">Наш адрес: 199-189 Triq Ir-Repubblika, Il-Belt Valetta, Мальта</div>
                </div>
                Мы всегда рады к общению через...
                <br />
                <div className={`options${isMobile ? ' mobile' : ''}`}>
                    <div className={`comments-option${isMobile ? ' mobile' : ''}`}>
                        <CommentsIcon />
                        Комментарии к вакансиям
                </div>
                    <Desktop>
                        <div className="vl" />
                    </Desktop>
                    <div className={`email-option${isMobile ? ' mobile' : ''}`}>
                        <MailIcon />
                        E-mail: hr@tile.expert
                </div>
                </div>
                <div className="social-links">
                    <InstagramIcon />
                    <PinterestIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
        </div>
    );
};

export default ContactsSection;
