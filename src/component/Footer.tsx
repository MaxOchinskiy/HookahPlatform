import React from "react";
import { Link } from "react-router-dom";
import { 
    Coffee, 
    MapPin, 
    Phone, 
    Mail, 
    Users, 
    BookOpen, 
    Heart,
    ExternalLink,
    Github,
    Twitter,
    Instagram
} from 'lucide-react';
import "../component/Footer.scss";

const Footer: React.FC = React.memo(() => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        main: [
            { to: "/", label: "Главная", icon: <Coffee className="link-icon" /> },
            { to: "/hookah-list", label: "Кальянные", icon: <MapPin className="link-icon" /> },
            { to: "/community", label: "Сообщество", icon: <Users className="link-icon" /> },
            { to: "/education", label: "Обучение", icon: <BookOpen className="link-icon" /> }
        ],
        info: [
            { to: "/aboutUs", label: "О нас" },
            { to: "/contact", label: "Контакты" },
            { to: "/privacy", label: "Политика конфиденциальности" },
            { to: "/terms", label: "Условия использования" }
        ]
    };

    const socialLinks = [
        { href: "#", icon: <Github className="social-icon" />, label: "GitHub" },
        { href: "#", icon: <Twitter className="social-icon" />, label: "Twitter" },
        { href: "#", icon: <Instagram className="social-icon" />, label: "Instagram" }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-main">
                    {/* Logo Section */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <div className="logo-icon">
                                <Coffee className="logo-coffee" />
                            </div>
                            <div className="logo-text">
                                Hookah<span className="logo-accent">Club</span>
                            </div>
                        </div>
                        <p className="footer-description">
                            Лучшая платформа для любителей кальянной культуры. 
                            Найдите идеальные места для отдыха и присоединитесь к нашему сообществу.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href}
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="footer-section">
                        <h3 className="footer-title">Навигация</h3>
                        <ul className="footer-links">
                            {footerLinks.main.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.to} className="footer-link">
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info Links */}
                    <div className="footer-section">
                        <h3 className="footer-title">Информация</h3>
                        <ul className="footer-links">
                            {footerLinks.info.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.to} className="footer-link">
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-section">
                        <h3 className="footer-title">Контакты</h3>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <Phone className="contact-icon" />
                                <span>+375 (29) 123-45-67</span>
                            </div>
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <span>info@hookahclub.by</span>
                            </div>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>Минск, Беларусь</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>
                            © {currentYear} HookahClub. Все права защищены.
                        </p>
                        <p className="footer-made-with">
                            Сделано с <Heart className="heart-icon" /> для любителей кальянов
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
