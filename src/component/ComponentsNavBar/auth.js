import React, { useState } from 'react';
import './StylesNavBar/auth.scss';

function Auth() {
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена');
        console.log('Запомнить меня:', rememberMe);
        // Здесь можно использовать rememberMe для логики хранения токена/логина
    };

    return (
        <div className="auth-container">
            <div className="auth-text">
                <div className="headerAuth">Войти/Зарегистрироваться</div>

                <form onSubmit={handleSubmit}>
                    <div className="textLog">
                        <label htmlFor="login">Логин</label>
                        <input
                            type="text"
                            id="login"
                            className="inpText"
                            placeholder="Введите логин/email"
                            autoComplete="username"
                        />
                    </div>

                    <div className="textLog">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            className="inpText"
                            placeholder="Введите пароль"
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="remember-me">
                        <label className="custom-checkbox">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <span className="checkmark"></span>
                            Запомнить меня
                        </label>
                    </div>


                    <button type="submit" className="auth-button">Войти/Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}

export default Auth;
