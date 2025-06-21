import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
    MapPin, 
    Users, 
    BookOpen, 
    Coffee, 
    LogIn, 
    Menu, 
    X,
    Home
} from 'lucide-react';
import "./ComponentsNavBar/StylesNavBar/NavBar.scss";
import logo from '../Image/logo.png';

const navLinks = [
    { name: 'Главная', path: '/', icon: <Home /> },
    { name: 'Кальянные', path: '/hookahs', icon: <MapPin /> },
    { name: 'Сообщество', path: '/community', icon: <Users /> },
    { name: 'Обучение', path: '/education', icon: <BookOpen /> },
    { name: 'Табаки', path: '/tobacco', icon: <Coffee /> },
];

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        closeMenu();
    }, [location]);

    return (
        <>
            <div className={`navbar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
            <nav className="navbar">
                <NavLink to="/" className="navbar-logo">
                    <img src={logo} alt="HookahClub Logo" />
                    <h1>HookahClub</h1>
                </NavLink>

                <div className="navbar-links-desktop">
                    {navLinks.map((link) => (
                        <NavLink key={link.name} to={link.path} className="navbar-link">
                            {link.icon}
                            <span>{link.name}</span>
                        </NavLink>
                    ))}
                </div>

                <div className="navbar-actions">
                    <button className="navbar-auth-button">
                        <LogIn />
                        <span>Войти</span>
                    </button>
                    <button className="navbar-menu-toggle" onClick={toggleMenu}>
                        <Menu />
                    </button>
                </div>
            </nav>

            <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="navbar-menu-header">
                    <button className="navbar-close-button" onClick={closeMenu}>
                        <X />
                    </button>
                </div>

                {navLinks.map((link) => (
                    <NavLink key={link.name} to={link.path} className="navbar-menu-link" onClick={closeMenu}>
                        {link.icon}
                        <span>{link.name}</span>
                    </NavLink>
                ))}

                <button className="navbar-auth-button-mobile">
                    <LogIn />
                    <span>Войти</span>
                </button>
            </div>
        </>
    );
};

export default NavBar;
