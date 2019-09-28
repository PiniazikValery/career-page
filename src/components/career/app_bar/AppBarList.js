import React from 'react';

const AppBarList = () => {
    return (
        <div className="list-container">
            <ul className="app-bar-list">
                <li><a href="/home#about">О нас</a></li>
                <li><a href="/home#hire_system">Система найма</a></li>
                <li><a href="/home#vacancies">Вакансий</a></li>
                <li><a href="/home#our_team">Наша команда</a></li>
                <li><a href="/home#contact">Контакты</a></li>
            </ul>
            <a className="app-bar-blogs" href="/home#blogs">Блоги</a>
        </div>
    );
};

export default AppBarList;
