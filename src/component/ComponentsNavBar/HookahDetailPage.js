import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "./StylesNavBar/HookahDetailPage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Обновленный компонент стрелок
const PrevArrow = ({ onClick }) => (
    <button className="custom-arrow prev" onClick={onClick}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
        </svg>
    </button>
);

const NextArrow = ({ onClick }) => (
    <button className="custom-arrow next" onClick={onClick}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
        </svg>
    </button>
);

const HookahDetailPage = ({ hookah }) => {
    const { id } = useParams();
    const bar = hookah.find((bar) => bar.id.toString() === id);

    if (!bar) {
        return <p>Кальянная не найдена</p>;
    }

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <section className="hookah-detail">
            <h1>{bar.name}</h1>
            <p>{bar.description}</p>

            <div className="section">
                <h2>Атмосфера и интерьер</h2>
                <p>{bar.atmosphere}</p>
            </div>

            <div className="section">
                <h2>Меню и услуги</h2>
                <ul>
                    {bar.menu.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="section">
                <h2>Отзывы</h2>
                <ul>
                    {bar.reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>

            <div className="section">
                <h2>Фотогалерея</h2>
                <div className="gallery">
                    <Slider {...sliderSettings}>
                        {bar.images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="section">
                <h2>Цены и акции</h2>
                <p>{bar.prices}</p>
            </div>

            <div className="section">
                <h2>Календарь бронирований</h2>
                <p>
                    Проверьте доступные столы для бронирования{" "}
                    <a
                        href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.150795%2C59.858067&mode=poi&poi%5Bpoint%5D=30.150149%2C59.858241&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D114866836014&z=19.44"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        здесь
                    </a>.
                </p>
            </div>

            <div className="section">
                <h2>Контактная информация</h2>
                <p>{bar.contactInfo}</p>
                <p>{bar.address}</p>
            </div>
        </section>
    );
};

export default HookahDetailPage;
