import React, { useState } from "react";
import { BookOpen, Flame, Palette, Target } from "lucide-react";
import "./StylesNavBar/Education.scss";
import { useNavigate } from "react-router-dom";

interface EducationCard {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    path: string;
    features: string[];
}

const Education: React.FC = () => {
    const [imagesLoaded, setImagesLoaded] = useState([false, false, false]);
    const navigate = useNavigate();

    const handleImageLoad = (index: number) => {
        setImagesLoaded((prev) => {
            const newImagesLoaded = [...prev];
            newImagesLoaded[index] = true;
            return newImagesLoaded;
        });
    };

    const educationCards: EducationCard[] = [
        {
            id: "packing",
            title: "Забивка чаши",
            description: "Научись правильно забивать чашу для идеального дыма и вкуса",
            icon: <Target className="card-icon" />,
            image: "https://i.pinimg.com/736x/72/99/de/7299de4b2c54ded865d6b405c8f55e37.jpg",
            path: "/education/packing",
            features: [
                "10 различных методов забивки",
                "Пошаговые инструкции",
                "Советы для разных типов табака"
            ]
        },
        {
            id: "mix",
            title: "Смешивание вкусов",
            description: "Комбинируй табаки и создавай уникальные вкусовые композиции",
            icon: <Palette className="card-icon" />,
            image: "https://pp.userapi.com/c830208/v830208340/fa9be/4-yUQLBwo8Q.jpg",
            path: "/education/mix",
            features: [
                "Генератор случайных миксов",
                "Правила сочетания вкусов",
                "Рекомендации по пропорциям"
            ]
        },
        {
            id: "coal",
            title: "Работа с углями",
            description: "Оптимизируй жар для долгого и вкусного курения",
            icon: <Flame className="card-icon" />,
            image: "https://image.kazanexpress.ru/c0cn1b3c559vfk0bu57g/t_product_high.jpg",
            path: "/education/coal",
            features: [
                "Типы углей и их характеристики",
                "Контроль температуры",
                "Советы для идеального жара"
            ]
        }
    ];

    return (
        <section className="education">
            <div className="education-container">
                <div className="education-header">
                    <h1 className="education-title">
                        <BookOpen className="title-icon" />
                        Обучение
                    </h1>
                    <p className="education-subtitle">
                        Изучай новые техники, учись правильно забивать чашу и подбирать вкусы
                    </p>
                </div>

                <div className="education-grid">
                    {educationCards.map((card, index) => (
                        <div 
                            key={card.id}
                            className="education-card"
                            onClick={() => navigate(card.path)}
                        >
                            <div className="card-image-container">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className={`card-image ${imagesLoaded[index] ? 'loaded' : ''}`}
                                    onLoad={() => handleImageLoad(index)}
                                    loading="lazy"
                                />
                                <div className="card-overlay">
                                    <div className="overlay-icon">
                                        {card.icon}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card-content">
                                <div className="card-header">
                                    {card.icon}
                                    <h3 className="card-title">{card.title}</h3>
                                </div>
                                
                                <p className="card-description">{card.description}</p>
                                
                                <div className="card-features">
                                    <h4>Что вы изучите:</h4>
                                    <ul>
                                        {card.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="card-action">
                                    <span className="action-text">Начать обучение</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="education-footer">
                    <div className="footer-tip">
                        <BookOpen className="footer-icon" />
                        <p>Выберите интересующую вас тему и начните изучение основ кальянного искусства!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
