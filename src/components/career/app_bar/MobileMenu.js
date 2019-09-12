import React, { useState } from 'react';
import { BurgerIcon, CloseIcon } from './icons';

const MobileMenu = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const openCloseMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <div className="mobile-menu">
            {
                isOpenMenu ?
                    <CloseIcon onClick={openCloseMenu} className="burger-button" />
                    :
                    <BurgerIcon onClick={openCloseMenu} className="burger-button" />
            }
            <div className={`mobile-list${isOpenMenu ? ' open' : ' close'}`}>
                <ul className="list">
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#hire_system">Система найма</a></li>
                    <li><a href="#vacancies">Вакансий</a></li>
                    <li><a href="#our_team">Наша команда</a></li>
                    <li><a href="#contact">Контакты</a></li>
                    <li><a href="#blogs">Блоги</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
