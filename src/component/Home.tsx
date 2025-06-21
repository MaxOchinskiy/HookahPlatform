import React from "react";
import { Link } from "react-router-dom";
import { 
    Coffee, 
    Users, 
    MapPin, 
    BookOpen, 
    Star, 
    Heart,
    ArrowRight,
    Shield,
    Award
} from 'lucide-react';
import "./Home.scss";

const Home: React.FC = () => {
    const features = [
        {
            icon: <MapPin className="feature-icon" />,
            title: "Лучшие кальянные",
            description: "Тщательно отобранные заведения с высоким качеством обслуживания"
        },
        {
            icon: <Users className="feature-icon" />,
            title: "Активное сообщество",
            description: "Присоединяйтесь к сообществу любителей кальянов"
        },
        {
            icon: <BookOpen className="feature-icon" />,
            title: "Обучение",
            description: "Узнайте все о кальянной культуре и технике"
        },
        {
            icon: <Coffee className="feature-icon" />,
            title: "Табачные смеси",
            description: "Каталог лучших табачных смесей от мировых производителей"
        }
    ];

    const stats = [
        { value: "150+", label: "Кальянных", icon: <MapPin className="stat-icon" /> },
        { value: "10K+", label: "Пользователей", icon: <Users className="stat-icon" /> },
        { value: "500+", label: "Отзывов", icon: <Star className="stat-icon" /> },
        { value: "24/7", label: "Поддержка", icon: <Shield className="stat-icon" /> }
    ];

    return (
        <section className="home">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-header">
                        <div className="hero-badge">
                            <Coffee className="badge-icon" />
                            <span>Лучшая платформа для любителей кальянов</span>
                        </div>
                        <h1 className="hero-title">
                            Добро пожаловать в 
                            <span className="title-accent"> Hookah Club</span>
                        </h1>
                        <p className="hero-subtitle">
                            Откройте для себя лучшие кальянные, присоединитесь к сообществу 
                            и погрузитесь в мир кальянной культуры
                        </p>
                    </div>

                    <div className="hero-actions">
                        <Link to="/community" className="btn-primary">
                            <Users className="btn-icon" />
                            <span>Присоединиться к сообществу</span>
                            <ArrowRight className="btn-arrow" />
                        </Link>
                        <Link to="/hookah-list" className="btn-secondary">
                            <MapPin className="btn-icon" />
                            <span>Найти кальянную</span>
                        </Link>
                    </div>

                    <div className="hero-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-icon-wrapper">
                                    {stat.icon}
                                </div>
                                <div className="stat-content">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div className="features-container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <Award className="title-icon" />
                            Почему выбирают нас
                        </h2>
                        <p className="section-subtitle">
                            Мы создаем лучшее пространство для любителей кальянной культуры
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon-wrapper">
                                    {feature.icon}
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <div className="cta-container">
                    <div className="cta-content">
                        <h2 className="cta-title">
                            Готовы начать путешествие?
                        </h2>
                        <p className="cta-description">
                            Присоединяйтесь к нашему сообществу и откройте для себя 
                            лучшие кальянные в вашем городе
                        </p>
                        <div className="cta-actions">
                            <Link to="/auth" className="btn-primary">
                                <Heart className="btn-icon" />
                                <span>Начать сейчас</span>
                            </Link>
                            <Link to="/aboutUs" className="btn-outline">
                                <span>Узнать больше</span>
                                <ArrowRight className="btn-arrow" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
