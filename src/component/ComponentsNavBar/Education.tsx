import React, { useState } from "react";
import "./StylesNavBar/Education.scss";
import { useNavigate } from "react-router-dom";


const Education = () => {
    // Создаем состояние для каждого изображения
    const [imagesLoaded, setImagesLoaded] = useState([false, false, false]);

    // Функция для обработки загрузки изображений
    const handleImageLoad = (index: number) => {
        setImagesLoaded((prev) => {
            const newImagesLoaded = [...prev];
            newImagesLoaded[index] = true;
            return newImagesLoaded;
        });
    };
    const navigate = useNavigate();


    return (
        <section className="education-section">

            <div className="container">
                <h2 className="education-title">Обучение</h2>
                <p className="education-text">
                    Изучай новые техники, учись правильно забивать чашу и подбирать вкусы.
                </p>
                <div className="education-grid">
                    <div className="education-card" onClick={() => navigate("/education/packing")}>
                        <img
                            src="https://i.pinimg.com/736x/72/99/de/7299de4b2c54ded865d6b405c8f55e37.jpg"
                            alt="Забивка чаши"
                            className={`education-card-image ${imagesLoaded[0] ? 'loaded' : ''}`}
                            onLoad={() => handleImageLoad(0)}
                            loading="lazy"
                        />
                        <div className="content">
                            <h3>Забивка чаши</h3>
                            <p>Научись правильно забивать чашу для идеального дыма.</p>
                        </div>
                    </div>

                    <div className="education-card" onClick={() => navigate("/education/mix")}>
                        <img
                            src="https://pp.userapi.com/c830208/v830208340/fa9be/4-yUQLBwo8Q.jpg"
                            alt="Смешивание вкусов"
                            className={`education-card-image ${imagesLoaded[1] ? 'loaded' : ''}`}
                            onLoad={() => handleImageLoad(1)}
                            loading="lazy"
                        />
                        <div className="content">
                            <h3>Смешивание вкусов</h3>
                            <p>Комбинируй табаки и создавай уникальные вкусы.</p>
                        </div>
                    </div>

                    <div className="education-card">
                        <img
                            src="https://image.kazanexpress.ru/c0cn1b3c559vfk0bu57g/t_product_high.jpg"
                            alt="Работа с углями"
                            className={`education-card-image ${imagesLoaded[2] ? 'loaded' : ''}`}
                            onLoad={() => handleImageLoad(2)}
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
