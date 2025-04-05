import React from "react";
import "./Home.scss";
import hookahImage from "../Image/HomeImage.avif"; // Импортируем изображение

const Home = () => {
    return (
        <section className="home" style={{ backgroundImage: `url(${hookahImage})` }}>
            <div className="home-container">
                <h1 className="home-title">Добро пожаловать в Hookah Club</h1>
                <p className="home-description">
                    Здесь вы найдете лучшие кальяны, вкусы и советы от экспертов. Присоединяйтесь к нашему сообществу и получайте уникальные знания!
                </p>

                <div className="home-features">
                    <div className="feature-card">
                        <h3>Лучшая кальянная продукция</h3>
                        <p>Мы предлагаем только качественные кальяны и аксессуары.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Советы от экспертов</h3>
                        <p>Прокачайте свои навыки с нашими обучающими материалами.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Сообщество единомышленников</h3>
                        <p>Обсуждайте, делитесь опытом и находите новых друзей.</p>
                    </div>
                </div>

                <div className="home-buttons">
                    <a href="/community" className="button join-community">
                        Присоединиться
                    </a>
                    <a href="/booking" className="button book-lounge">
                        Забронировать кальянную
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;



