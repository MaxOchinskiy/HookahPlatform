import React, { useState } from 'react';
import './StylesNavBar/auth.scss';

function Auth() {
    const [rememberMe, setRememberMe] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!login || !password) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }
        console.log('Форма отправлена');
        console.log('Логин:', login);
        console.log('Пароль:', password);
        console.log('Запомнить меня:', rememberMe);
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
                            value={login}
                            onChange={handleLoginChange}
                        />
                    </div>

                    <div className="textLog">
                        <label htmlFor="password">Пароль</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="inpText"
                                placeholder="Введите пароль"
                                autoComplete="current-password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
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
