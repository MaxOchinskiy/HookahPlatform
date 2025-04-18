import React from "react";
import "./Home.scss";
import hookahImage from "../Image/fonHome.jpg"; // Фоновое изображение

const Home = () => {
    return (
        <section className="home" style={{ backgroundImage: `url(${hookahImage})` }}>
            <div className="home-container">
                <h1 className="home-title">Добро пожаловать в Hookah Club</h1>
                <div className="home-buttons">
                    <a href="/community" className="button join-community">
                        Присоединиться
                    </a>
                    <a href="/hookah-list" className="button book-lounge">
                        Забронировать кальянную
                    </a>
                </div>
                <div className="home-description">
                    <h2>О нашем сервисе</h2>
                    <p>
                        Hookah Club — это платформа, которая объединяет лучших
                        производителей табака, кальянные и любителей отдыха.
                        Здесь вы можете бронировать кальянные, находить сообщества
                        по интересам и узнавать последние новости индустрии.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;