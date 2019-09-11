import React from 'react';
import { CommentsIcon, MailIcon, InstagramIcon, PinterestIcon, FacebookIcon, TwitterIcon } from './icons';

const ContactsSection = () => {
    return (
        <div className="contacts-section">
            <div className="contacts-content">
                <div className="intro">
                    Контакты
                    <div className="description">Наш адрес: 199-189 Triq Ir-Repubblika, Il-Belt Valetta, Мальта</div>
                </div>
                Мы всегда рады к общению через...
                <br />
                <div className="options">
                    <div className="comments-option">
                        <CommentsIcon />
                        Комментарии к вакансиям
                </div>
                    <div className="vl"></div>
                    <div className="email-option">
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
