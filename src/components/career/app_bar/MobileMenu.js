import React, { useState } from 'react';
import { BurgerIcon, CloseIcon } from './icons';
import { HashLink as Link } from 'react-router-hash-link';

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
                    <li><Link to="/home#about">О нас</Link></li>
                    <li><Link to="/home#hire_system">Система найма</Link></li>
                    <li><Link to="/home#vacancies">Вакансий</Link></li>
                    <li><Link to="/home#our_team">Наша команда</Link></li>
                    <li><Link to="/home#contact">Контакты</Link></li>
                    <li><Link to="/home#blogs">Блоги</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
