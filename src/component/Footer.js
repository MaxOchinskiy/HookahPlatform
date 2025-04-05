import React from "react";
import { Link } from "react-router-dom";
import "../component/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <Link to="/" className="footer-logo-link">
                        Hookah<span>Club</span>
                    </Link>
                </div>
                <ul className="footer-menu">
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="/community">Сообщество</Link></li>
                    <li><Link to="/education">Обучение</Link></li>
                    <li><Link to="/contact">Контакты</Link></li>
                </ul>
                <div className="footer-socials">
                    <a href="#" className="social-icon">📱</a>
                    <a href="#" className="social-icon">🐦</a>
                    <a href="#" className="social-icon">📷</a>
                </div>
            </div>
            <p className="footer-copy">© 2025 HookahClub. Все права защищены.</p>
        </footer>
    );
};

export default Footer;

