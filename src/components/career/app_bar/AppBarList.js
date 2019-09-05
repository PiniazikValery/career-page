import React from 'react';

const AppBarList = () => {
    return (
        <div className="list-container">
            <ul className="app-bar-list">
                <li><a href="#about">О нас</a></li>
                <li><a href="#hire_system">Система найма</a></li>
                <li><a href="#vacancies">Вакансий</a></li>
                <li><a href="#our_team">Наша команда</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
            <a className="app-bar-blogs" href="#blogs">Блоги</a>
        </div>
    );
};

export default AppBarList;
