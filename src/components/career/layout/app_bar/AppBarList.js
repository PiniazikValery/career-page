import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const AppBarList = () => {
    return (
        <div className="list-container">
            <ul className="app-bar-list">
                <Link to="/home#about">
                    <li>О нас</li>
                </Link>
                <Link to="/home#hire_system">
                    <li>Система найма</li>
                </Link>
                <Link to="/home#vacancies">
                    <li>Вакансий</li>
                </Link>
                <Link to="/home#our_team">
                    <li>Наша команда</li>
                </Link>
                <Link to="/home#contact">
                    <li>Контакты</li>
                </Link>
            </ul>
            <Link className="app-bar-blogs" to="/home#blogs">
                Блоги
            </Link>
        </div>
    );
};

export default AppBarList;
