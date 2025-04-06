import React from "react";
import { Link } from "react-router-dom";
import "../component/Footer.scss";
import logo from "../Image/logo.png"; // путь к логотипу

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="HookahClub Logo" className="footer-logo-img" />
                </div>
                <ul className="footer-menu">
                    <li><Link to="/aboutUs">О нас</Link></li>
                    <li><Link to="/contact">Контакты</Link></li>
                </ul>
                <div className="footer-socials">
                    <a href="/#" className="social-icon">📱</a>
                    <a href="/#" className="social-icon">🐦</a>
                    <a href="/#" className="social-icon">📷</a>
                </div>
            </div>
            <p className="footer-copy">© 2025 HookahClub. Все права защищены.</p>
        </footer>
    );
};

export default Footer;


