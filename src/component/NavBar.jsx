import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ComponentsNavBar/StylesNavBar/NavBar.scss";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Hookah<span>Club</span>
                </Link>
                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/hookah-list" >Кальянные</Link>
                    </li>
                    <li>
                        <Link to="/community" >Сообщество</Link>
                    </li>
                    <li>
                        <Link to="/education" >Обучение</Link>
                    </li>
                </ul>
                <Link to="/auth" className="navbar-auth-button">
                    Войти
                </Link>

                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;





