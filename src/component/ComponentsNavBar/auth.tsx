import React, { useState } from 'react';
import { 
    User, 
    Lock, 
    Eye, 
    EyeOff, 
    Mail, 
    LogIn, 
    UserPlus, 
    Shield, 
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import './StylesNavBar/auth.scss';

function Auth() {
    const [rememberMe, setRememberMe] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
        setError('');
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        
        if (!login || !password) {
            setError('Пожалуйста, заполните все поля!');
            return;
        }

        setIsLoading(true);
        
        // Имитация загрузки
        setTimeout(() => {
            console.log('Форма отправлена');
            console.log('Логин:', login);
            console.log('Пароль:', password);
            console.log('Запомнить меня:', rememberMe);
            console.log('Режим:', isLoginMode ? 'Вход' : 'Регистрация');
            setIsLoading(false);
        }, 1500);
    };

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
        setError('');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-icon">
                        <Shield className="shield-icon" />
                    </div>
                    <h1 className="auth-title">
                        {isLoginMode ? 'Вход в аккаунт' : 'Регистрация'}
                    </h1>
                    <p className="auth-subtitle">
                        {isLoginMode 
                            ? 'Войдите в свой аккаунт для доступа к функциям' 
                            : 'Создайте новый аккаунт для начала работы'
                        }
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {error && (
                        <div className="error-message">
                            <AlertCircle className="error-icon" />
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="login" className="form-label">
                            <Mail className="label-icon" />
                            Логин или Email
                        </label>
                        <input
                            type="text"
                            id="login"
                            className="form-input"
                            placeholder="Введите логин или email"
                            autoComplete="username"
                            value={login}
                            onChange={handleLoginChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            <Lock className="label-icon" />
                            Пароль
                        </label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="form-input"
                                placeholder="Введите пароль"
                                autoComplete={isLoginMode ? "current-password" : "new-password"}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                            >
                                {showPassword ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
                            </button>
                        </div>
                    </div>

                    <div className="form-options">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="checkbox-input"
                            />
                            <span className="checkbox-custom">
                                <CheckCircle className="check-icon" />
                            </span>
                            <span className="checkbox-label">Запомнить меня</span>
                        </label>
                    </div>

                    <button 
                        type="submit" 
                        className={`submit-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="loading-spinner"></div>
                        ) : (
                            <>
                                {isLoginMode ? <LogIn className="button-icon" /> : <UserPlus className="button-icon" />}
                                {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
                            </>
                        )}
                    </button>
                </form>

                <div className="auth-footer">
                    <div className="mode-toggle">
                        <span className="toggle-text">
                            {isLoginMode ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
                        </span>
                        <button 
                            type="button" 
                            className="toggle-button"
                            onClick={toggleMode}
                        >
                            {isLoginMode ? 'Зарегистрироваться' : 'Войти'}
                        </button>
                    </div>
                </div>

                <div className="auth-features">
                    <div className="feature-item">
                        <Shield className="feature-icon" />
                        <span>Безопасное соединение</span>
                    </div>
                    <div className="feature-item">
                        <User className="feature-icon" />
                        <span>Личные данные защищены</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
