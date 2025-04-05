import React from "react";
import { Link } from "react-router-dom";
import "./ComponentsNavBar/StylesNavBar/NavBar.scss";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Hookah<span>Club</span>
                </Link>

                <ul className="navbar-menu">
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="/community">Сообщество</Link></li>
                    <li><Link to="/education">Обучение</Link></li>
                    <li><Link to="/hookah-list">Лучшие кальянные</Link></li>
                    <li><Link to="/contact">Контакты</Link></li>
                </ul>

                <Link to="/auth" className="navbar-auth-button">
                    Войти
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;




