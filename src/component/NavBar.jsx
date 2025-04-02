import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Главная" },
        { path: "/hookah-list", label: "Кальянные" },
        { path: "/education", label: "Обучение" },
        { path: "/community", label: "Сообщество" },
        { path: "/contacts", label: "Контакты" },
    ];

    return (
        <div className="navbar">
            <div className='container'>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className={location.pathname === item.path ? 'active' : ''}>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavBar;


