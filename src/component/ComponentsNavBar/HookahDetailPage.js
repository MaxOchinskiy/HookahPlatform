import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import './StylesNavBar/HookahDetailPage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Компонент стрелок
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

const HookahDetailPage = () => {
    const { id } = useParams();
    const { hookahList, loading, error } = useSelector((state) => state.data); // Данные из Redux

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p className="error">{error}</p>;

    // Находим кальянную по ID
    const bar = hookahList.find((bar) => bar.id.toString() === id);

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
                            <div key={index} className="image-wrapper">
                                <div className="image-container">
                                    <img src={image} alt={`Фото ${index + 1}`} className="img"/>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="section">
                <h2>Цены</h2>
                <p>{bar.price}</p>
            </div>

            <div className="section">
                <h2>Бронирование</h2>
                {bar.imageMap ? (
                    <p>
                        Проверьте доступные столы для бронирования{' '}
                        <a href={bar.imageMap} target="_blank" rel="noopener noreferrer">
                            здесь
                        </a>.
                    </p>
                ) : (
                    <p>Бронирование не доступно</p>
                )}
            </div>

            <div className="section">
                <h2>Контактная информация</h2>
                <p>{bar.contactInfo}</p>
                <p>{bar.address}</p>
            </div>

            <div className="map">
                <a href={bar.nameUrl} className="name"> </a>
                <a href={bar.bio} className="bio"> </a>
                <a href={bar.info} className="info"> </a>
                <iframe
                    src={bar.imageMap}
                    className="frame1"
                    title="Map"
                ></iframe>
            </div>
        </section>
    );
};

export default HookahDetailPage;