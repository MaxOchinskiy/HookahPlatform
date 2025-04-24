import React from 'react';
import './StylesNavBar/auth.scss';

function Auth() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить обработку формы
        console.log('Форма отправлена');
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

                    <button type="submit" className="auth-button">Войти/Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}

export default Auth;
