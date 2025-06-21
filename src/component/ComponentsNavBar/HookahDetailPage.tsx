import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { 
    MapPin, 
    Clock, 
    Star, 
    Heart, 
    Share2, 
    Music, 
    Coffee, 
    MessageCircle, 
    ChevronLeft, 
    ChevronRight,
    Camera,
    Info,
    CalendarCheck2
} from 'lucide-react';
import ImageWithFallback from '../ImageWithFallback';
import LoadingSpinner from '../LoadingSpinner';
import { RootState, Hookah, Review } from '../../redux/types';
import "./StylesNavBar/HookahDetailPage.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button className="custom-arrow prev" onClick={onClick}>
        <ChevronLeft size={24} />
    </button>
);

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button className="custom-arrow next" onClick={onClick}>
        <ChevronRight size={24} />
    </button>
);

const HookahDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { hookahList, loading, error } = useSelector((state: RootState) => state.data);

    if (loading) return <LoadingSpinner size="large" text="Загрузка информации о кальянной..." />;
    if (error) return <p className="error-message">{error}</p>;

    const bar = hookahList.find((b: Hookah) => b.id.toString() === id);

    if (!bar) {
        return (
            <div className="not-found-container">
                <MapPin className="not-found-icon" />
                <h2>Кальянная не найдена</h2>
                <p>К сожалению, мы не смогли найти информацию по вашему запросу.</p>
            </div>
        );
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    return (
        <section className="hookah-detail-page">
            <div className="hookah-detail-container">
                <div className="detail-header-card">
                    <div className="header-content">
                        <h1 className="header-title">{bar.name}</h1>
                        <p className="header-description">{bar.description}</p>
                        <div className="header-meta">
                            <span className="meta-item">
                                <MapPin className="meta-icon" /> {bar.address}
                            </span>
                            <span className="meta-item">
                                <Clock className="meta-icon" /> {bar.workingHours || 'Часы работы не указаны'}
                            </span>
                            <span className="meta-item">
                                <Star className="meta-icon filled" /> {bar.rating || 'Нет оценок'} ({bar.reviews?.length || 0} отзывов)
                            </span>
                        </div>
                        <div className="header-actions">
                            {bar.imageMap && (
                                <a href={bar.imageMap} className="btn-action book" target="_blank" rel="noopener noreferrer">
                                    <CalendarCheck2 className="btn-icon" />
                                    Забронировать
                                </a>
                            )}
                            <button className="btn-action favorite">
                                <Heart className="btn-icon" />
                                В избранное
                            </button>
                            <button className="btn-action share">
                                <Share2 className="btn-icon" />
                            </button>
                        </div>
                    </div>
                    {bar.images && bar.images.length > 0 && (
                        <div className="header-image-container">
                            <ImageWithFallback src={bar.images[0]} alt={bar.name} className="header-image"/>
                        </div>
                    )}
                </div>

                <div className="detail-content-grid">
                    <div className="info-card">
                        <div className="card-header">
                            <Camera className="card-icon" />
                            <h2 className="card-title">Фотогалерея</h2>
                        </div>
                        {bar.images && bar.images.length > 0 ? (
                            <Slider {...sliderSettings} className="gallery-slider">
                                {bar.images.map((image: string, index: number) => (
                                    <div key={index} className="slide-image-container">
                                        <ImageWithFallback src={image} alt={`Фото ${index + 1}`} className="slide-image" />
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p className="card-body">Нет доступных фото.</p>
                        )}
                    </div>

                    <div className="info-card">
                        <div className="card-header">
                            <Music className="card-icon" />
                            <h2 className="card-title">Атмосфера и интерьер</h2>
                        </div>
                        <p className="card-body">{bar.atmosphere || 'Описание отсутствует.'}</p>
                    </div>

                    <div className="info-card">
                        <div className="card-header">
                            <Coffee className="card-icon" />
                            <h2 className="card-title">Меню и услуги</h2>
                        </div>
                        <ul className="card-list">
                            {bar.menu && bar.menu.length > 0 ? (
                                bar.menu.map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                ))
                            ) : (
                                <li className='empty'>Информация о меню отсутствует.</li>
                            )}
                        </ul>
                    </div>

                    <div className="info-card">
                        <div className="card-header">
                            <MessageCircle className="card-icon" />
                            <h2 className="card-title">Отзывы</h2>
                        </div>
                        <div className="card-body reviews">
                            {bar.reviews && bar.reviews.length > 0 ? (
                                bar.reviews.map((review: Review, index: number) => (
                                    <div key={index} className="review">
                                        <div className="review-header">
                                            <strong>{review.author}</strong>
                                            <div className="review-rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`star-icon ${i < review.rating ? 'filled' : ''}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="review-comment">"{review.comment}"</p>
                                    </div>
                                ))
                            ) : (
                                <p>Отзывов пока нет.</p>
                            )}
                        </div>
                    </div>

                    {bar.imageMap && (
                        <div className="info-card map-card">
                            <div className="card-header">
                                <Info className="card-icon" />
                                <h2 className="card-title">Мы на карте</h2>
                            </div>
                            <div className="map-container">
                                <iframe
                                    src={bar.imageMap}
                                    width="100%"
                                    height="400"
                                    style={{ border: 0, borderRadius: 'var(--radius)' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title={`Карта ${bar.name}`}
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HookahDetailPage;