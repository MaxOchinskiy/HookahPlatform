import React from 'react';
import './StylesNavBar/auth.scss';

function auth() {
    return (
        <div className="auth-container">
            <div className="auth-text">
                <div className="headerAuth">Войти/Зарегистрироваться</div>

                <div className="textLog">
                    Логин
                    <input className="inpText" />
                </div>
                <div className="textLog">
                    Пароль
                    <input className="inpText" />
                </div>
                <button className="auth-button">Войти/Зарегистрироваться</button>
            </div>
        </div>
    );
}

export default auth;