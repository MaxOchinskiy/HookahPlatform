import React, { useState } from "react";
import "./StylesNavBar/Community.scss";

// Массив для популярных тем
const popularTopics = [
    {
        img: "https://hookahhouse.ru/upload/iblock/9f0/9f00f7a0e570d7a1a5ab179dd064e7e5.jpg",
        alt: "Вкусы кальяна",
        text: "Лучшие вкусы для кальяна 🍇",
    },
    {
        img: "https://hookahhouse.ru/upload/iblock/d20/fwi3s2g2cvcibq00k784xchb8sk536ch.jpg",
        alt: "Забивка чаши",
        text: "Как правильно забивать чашу? 🤔",
    },
    {
        img: "https://smoke-jeen.com/images/thumbnails/380/253/blog/15/img-2dc34bb79a05186f1beded133ac269ba-ugli-dlya-kalyana.jpg",
        alt: "Угли для кальяна",
        text: "Как выбрать угли для кальяна? 🔥",
    },
    {
        img: "https://hookahmarket.life/image/catalog/chistka1.png",
        alt: "Обслуживание кальяна",
        text: "Советы по обслуживанию кальяна 🛠",
    },
];

const Community = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Функция для обработки загрузки изображений
    const handleImageLoad = () => {
        setImagesLoaded(true);
    };

    return (
        <section className="community-container">
            <h2 className="community-title">Сообщество</h2>
            <p className="community-description">
                Присоединяйтесь к нашему сообществу, обсуждайте кальянные, делитесь опытом и находите единомышленников!
            </p>

            <div className="community-section">
                <h3 className="community-subtitle">Популярные темы🔥</h3>
                <div className="community-cards">
                    {popularTopics.map((item, index) => (
                        <div className="community-card" key={index}>
                            <img
                                src={item.img}
                                alt={item.alt}
                                className={`community-card-image ${imagesLoaded ? 'loaded' : ''}`}
                                onLoad={handleImageLoad}
                                loading="lazy"  // Для отложенной загрузки
                            />
                            <div className="community-card-content">
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <a
                href="https://web.telegram.org/k/"
                target="_blank"
                rel="noopener noreferrer"
                className="join-button"
                aria-label="Присоединиться к сообществу Telegram"
            >
                Вступить в сообщество
            </a>
        </section>
    );
};

export default Community;




