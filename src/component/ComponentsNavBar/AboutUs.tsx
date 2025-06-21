import React from "react";
import { 
    Users, 
    Target, 
    Heart, 
    Award, 
    Coffee, 
    Globe, 
    Star, 
    CheckCircle,
    TrendingUp,
    Shield
} from 'lucide-react';
import ImageWithFallback from '../ImageWithFallback';
import "./StylesNavBar/AboutUs.scss";

function AboutUs() {
    const teamMembers = [
        {
            name: "Алексей Петров",
            role: "Основатель",
            description: "Эксперт по кальянной культуре с 10-летним опытом"
        },
        {
            name: "Мария Сидорова",
            role: "Куратор контента",
            description: "Специалист по табачным смесям и рецептам"
        },
        {
            name: "Дмитрий Козлов",
            role: "Технический директор",
            description: "Разработчик платформы и систем"
        }
    ];

    const features = [
        {
            icon: <Coffee className="feature-icon" />,
            title: "Лучшие кальянные",
            description: "Тщательно отобранные заведения с высоким качеством обслуживания"
        },
        {
            icon: <TrendingUp className="feature-icon" />,
            title: "Свежие новинки",
            description: "Всегда актуальная информация о новых табачных смесях"
        },
        {
            icon: <Users className="feature-icon" />,
            title: "Сообщество",
            description: "Активное сообщество любителей кальянов для обмена опытом"
        },
        {
            icon: <Award className="feature-icon" />,
            title: "Качество",
            description: "Работаем только с проверенными и качественными заведениями"
        }
    ];

    const stats = [
        { value: "150+", label: "Кальянных", icon: <Coffee className="stat-icon" /> },
        { value: "10K+", label: "Пользователей", icon: <Users className="stat-icon" /> },
        { value: "500+", label: "Отзывов", icon: <Star className="stat-icon" /> },
        { value: "24/7", label: "Поддержка", icon: <Shield className="stat-icon" /> }
    ];

    return (
        <section className="about-us">
            <div className="about-container">
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <Users className="title-icon" />
                            О нас
                        </h1>
                        <p className="hero-subtitle">
                            Мы создаем лучшее пространство для любителей кальянной культуры
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <div className="content-grid">
                        {/* About Text */}
                        <div className="about-text-section">
                            <div className="section-header">
                                <Heart className="section-icon" />
                                <h2>Наша миссия</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Мы - команда профессионалов, увлечённых кальянной культурой.
                                    Мы предлагаем вам лучшие кальянные, всегда самые свежие новинки от табачных производителей, а также кальянные аппараты, обучающие материалы и сообщество для обмена опытом.
                                </p>
                                <p>
                                    Наша цель – создать пространство, где каждый любитель кальянов может найти что-то интересное и полезное.
                                </p>
                                <p>
                                    Мы работаем с лучшими кальянными, чтобы предложить вам только самые качественные и комфортные места для отдыха.
                                </p>
                            </div>
                        </div>

                        {/* About Image */}
                        <div className="about-image-section">
                            <div className="image-container">
                                <ImageWithFallback
                                    src="https://smokeshop.by/files/uploads/tabak-1.jpg"
                                    alt="О нас"
                                    className="about-image"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="features-section">
                        <div className="section-header">
                            <Target className="section-icon" />
                            <h2>Что мы предлагаем</h2>
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

                    {/* Stats Section */}
                    <div className="stats-section">
                        <div className="section-header">
                            <TrendingUp className="section-icon" />
                            <h2>Наши достижения</h2>
                        </div>
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card">
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

                    {/* Team Section */}
                    <div className="team-section">
                        <div className="section-header">
                            <Users className="section-icon" />
                            <h2>Наша команда</h2>
                        </div>
                        <div className="team-grid">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-card">
                                    <div className="member-avatar">
                                        <Users className="avatar-icon" />
                                    </div>
                                    <div className="member-info">
                                        <h3 className="member-name">{member.name}</h3>
                                        <span className="member-role">{member.role}</span>
                                        <p className="member-description">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="values-section">
                        <div className="section-header">
                            <Award className="section-icon" />
                            <h2>Наши ценности</h2>
                        </div>
                        <div className="values-list">
                            <div className="value-item">
                                <CheckCircle className="value-icon" />
                                <span>Качество и надежность во всем</span>
                            </div>
                            <div className="value-item">
                                <CheckCircle className="value-icon" />
                                <span>Открытость и честность с клиентами</span>
                            </div>
                            <div className="value-item">
                                <CheckCircle className="value-icon" />
                                <span>Постоянное развитие и инновации</span>
                            </div>
                            <div className="value-item">
                                <CheckCircle className="value-icon" />
                                <span>Забота о комфорте пользователей</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
