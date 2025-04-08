import React, { useState } from "react";
import { Link } from "react-router-dom"; // Импортируем Link для навигации
import "./StylesNavBar/Education.scss";

const Education = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Функция для обработки загрузки изображений
    const handleImageLoad = () => {
        setImagesLoaded(true);
    };

    return (
        <section className="education-section">
            <div className="container">
                <h2 className="education-title">Обучение</h2>
                <p className="education-text">
                    Изучай новые техники, учись правильно забивать чашу и подбирать вкусы.
                </p>

                <div className="education-grid">
                    <div className="education-card">
                        <img
                            src="https://i.pinimg.com/736x/72/99/de/7299de4b2c54ded865d6b405c8f55e37.jpg"
                            alt="Забивка чаши"
                            className={`education-card-image ${imagesLoaded ? 'loaded' : ''}`}
                            onLoad={handleImageLoad}
                            loading="lazy"
                        />
                        <div className="content">
                            <h3>Забивка чаши</h3>
                            <p>Научись правильно забивать чашу для идеального дыма.</p>
                        </div>
                    </div>

                    <div className="education-card">
                        {/* Добавляем Link для перехода */}
                        <Link to="/tabaco">
                            <img
                                src="https://pp.userapi.com/c830208/v830208340/fa9be/4-yUQLBwo8Q.jpg"
                                alt="Смешивание вкусов"
                                className={`education-card-image ${imagesLoaded ? 'loaded' : ''}`}
                                onLoad={handleImageLoad}
                                loading="lazy"
                            />
                            <div className="content">
                                <h3>Смешивание вкусов</h3>
                                <p>Комбинируй табаки и создавай уникальные вкусы.</p>
                            </div>
                        </Link>
                    </div>

                    <div className="education-card">
                        <img
                            src="https://image.kazanexpress.ru/c0cn1b3c559vfk0bu57g/t_product_high.jpg"
                            alt="Работа с углями"
                            className={`education-card-image ${imagesLoaded ? 'loaded' : ''}`}
                            onLoad={handleImageLoad}
                            loading="lazy"
                        />
                        <div className="content">
                            <h3>Работа с углями</h3>
                            <p>Оптимизируй жар для долгого и вкусного курения.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

