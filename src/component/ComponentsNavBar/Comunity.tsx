import React, { useState } from "react";
import { 
    Users, 
    MessageCircle, 
    Calendar, 
    TrendingUp, 
    Star, 
    Heart, 
    Share2, 
    ExternalLink,
    Award,
    Clock,
    MapPin,
    Phone
} from "lucide-react";
import "./StylesNavBar/Community.scss";

interface CommunityTopic {
    id: string;
    title: string;
    description: string;
    image: string;
    participants: number;
    category: string;
    icon: React.ReactNode;
}

interface CommunityEvent {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    participants: number;
    maxParticipants: number;
    type: "meetup" | "competition" | "workshop";
}

interface CommunityStat {
    label: string;
    value: string;
    icon: React.ReactNode;
    color: string;
}

const Community: React.FC = () => {
    const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(4).fill(false));

    const handleImageLoad = (index: number) => {
        setImagesLoaded((prev) => {
            const newImagesLoaded = [...prev];
            newImagesLoaded[index] = true;
            return newImagesLoaded;
        });
    };

    const communityTopics: CommunityTopic[] = [
        {
            id: "flavors",
            title: "Лучшие вкусы для кальяна",
            description: "Обсуждаем топовые вкусы, делимся рецептами миксов и новинками от производителей",
            image: "https://hookahhouse.ru/upload/iblock/9f0/9f00f7a0e570d7a1a5ab179dd064e7e5.jpg",
            participants: 1247,
            category: "Вкусы",
            icon: <Heart className="topic-icon" />
        },
        {
            id: "packing",
            title: "Техники забивки чаши",
            description: "Учимся правильно забивать чашу, изучаем различные методы и делимся секретами",
            image: "https://hookahhouse.ru/upload/iblock/d20/fwi3s2g2cvcibq00k784xchb8sk536ch.jpg",
            participants: 892,
            category: "Обучение",
            icon: <Award className="topic-icon" />
        },
        {
            id: "coals",
            title: "Выбор углей для кальяна",
            description: "Разбираем типы углей, их характеристики и учимся контролировать жар",
            image: "https://smoke-jeen.com/images/thumbnails/380/253/blog/15/img-2dc34bb79a05186f1beded133ac269ba-ugli-dlya-kalyana.jpg",
            participants: 654,
            category: "Оборудование",
            icon: <TrendingUp className="topic-icon" />
        },
        {
            id: "maintenance",
            title: "Обслуживание кальяна",
            description: "Советы по уходу за кальяном, чистке и продлению срока службы",
            image: "https://hookahmarket.life/image/catalog/chistka1.png",
            participants: 445,
            category: "Уход",
            icon: <Clock className="topic-icon" />
        }
    ];

    const upcomingEvents: CommunityEvent[] = [
        {
            id: "meetup-1",
            title: "Кальянный митап в Москве",
            date: "15 декабря",
            time: "19:00",
            location: "Кальянная Lounge Bar",
            description: "Встреча кальянщиков, обмен опытом, дегустация новых вкусов",
            participants: 23,
            maxParticipants: 30,
            type: "meetup"
        },
        {
            id: "competition-1",
            title: "Чемпионат по забивке чаши",
            date: "22 декабря",
            time: "15:00",
            location: "Hookah Academy",
            description: "Соревнования среди мастеров забивки с призами",
            participants: 15,
            maxParticipants: 20,
            type: "competition"
        },
        {
            id: "workshop-1",
            title: "Мастер-класс по миксам",
            date: "28 декабря",
            time: "18:00",
            location: "Smoke Studio",
            description: "Учимся создавать уникальные миксы вкусов",
            participants: 18,
            maxParticipants: 25,
            type: "workshop"
        }
    ];

    const communityStats: CommunityStat[] = [
        {
            label: "Участников",
            value: "2,847",
            icon: <Users className="stat-icon" />,
            color: "var(--accent)"
        },
        {
            label: "Тем для обсуждения",
            value: "156",
            icon: <MessageCircle className="stat-icon" />,
            color: "var(--success)"
        },
        {
            label: "Мероприятий в месяц",
            value: "8",
            icon: <Calendar className="stat-icon" />,
            color: "var(--warning)"
        },
        {
            label: "Активных экспертов",
            value: "42",
            icon: <Star className="stat-icon" />,
            color: "var(--info)"
        }
    ];

    const getEventIcon = (type: string) => {
        switch (type) {
            case "meetup": return <Users className="event-icon" />;
            case "competition": return <Award className="event-icon" />;
            case "workshop": return <TrendingUp className="event-icon" />;
            default: return <Calendar className="event-icon" />;
        }
    };

    const getEventColor = (type: string) => {
        switch (type) {
            case "meetup": return "var(--accent)";
            case "competition": return "var(--warning)";
            case "workshop": return "var(--success)";
            default: return "var(--info)";
        }
    };

    return (
        <section className="community">
            <div className="community-container">
                <div className="community-header">
                    <h1 className="community-title">
                        <Users className="title-icon" />
                        Сообщество
                    </h1>
                    <p className="community-subtitle">
                        Присоединяйтесь к нашему сообществу, обсуждайте кальянные темы, делитесь опытом и находите единомышленников!
                    </p>
                </div>

                <div className="community-stats">
                    {communityStats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon-wrapper" style={{ color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="community-topics">
                    <h2 className="section-title">
                        <MessageCircle className="section-icon" />
                        Популярные темы
                    </h2>
                    <div className="topics-grid">
                        {communityTopics.map((topic, index) => (
                            <div key={topic.id} className="topic-card">
                                <div className="topic-image-container">
                                    <img
                                        src={topic.image}
                                        alt={topic.title}
                                        className={`topic-image ${imagesLoaded[index] ? 'loaded' : ''}`}
                                        onLoad={() => handleImageLoad(index)}
                                        loading="lazy"
                                    />
                                    <div className="topic-overlay">
                                        <div className="topic-category">{topic.category}</div>
                                    </div>
                                </div>
                                <div className="topic-content">
                                    <div className="topic-header">
                                        {topic.icon}
                                        <h3 className="topic-title">{topic.title}</h3>
                                    </div>
                                    <p className="topic-description">{topic.description}</p>
                                    <div className="topic-meta">
                                        <span className="participants">
                                            <Users className="meta-icon" />
                                            {topic.participants} участников
                                        </span>
                                        <button className="join-topic-btn">
                                            <Share2 className="btn-icon" />
                                            Присоединиться
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="community-events">
                    <h2 className="section-title">
                        <Calendar className="section-icon" />
                        Ближайшие события
                    </h2>
                    <div className="events-list">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="event-card">
                                <div className="event-icon-wrapper" style={{ color: getEventColor(event.type) }}>
                                    {getEventIcon(event.type)}
                                </div>
                                <div className="event-content">
                                    <h3 className="event-title">{event.title}</h3>
                                    <p className="event-description">{event.description}</p>
                                    <div className="event-meta">
                                        <span className="event-date">
                                            <Calendar className="meta-icon" />
                                            {event.date} в {event.time}
                                        </span>
                                        <span className="event-location">
                                            <MapPin className="meta-icon" />
                                            {event.location}
                                        </span>
                                        <span className="event-participants">
                                            <Users className="meta-icon" />
                                            {event.participants}/{event.maxParticipants}
                                        </span>
                                    </div>
                                </div>
                                <button className="join-event-btn">
                                    Записаться
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="community-join">
                    <div className="join-card">
                        <div className="join-content">
                            <h2>Присоединяйтесь к сообществу!</h2>
                            <p>Общайтесь с единомышленниками, участвуйте в мероприятиях и развивайтесь вместе с нами</p>
                            <div className="join-buttons">
                                <a
                                    href="https://t.me/hookahcommunity"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="join-btn primary"
                                >
                                    <MessageCircle className="btn-icon" />
                                    Telegram группа
                                    <ExternalLink className="external-icon" />
                                </a>
                                <a
                                    href="https://discord.gg/hookahcommunity"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="join-btn secondary"
                                >
                                    <Users className="btn-icon" />
                                    Discord сервер
                                    <ExternalLink className="external-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
