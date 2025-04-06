import React from "react";
import "./StylesNavBar/AboutUs.scss"; // Подключаем стили

function AboutUs() {
    return (
        <section className="about-us container">
            <h2 className="about-title">О нас</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Мы - команда профессионалов, увлечённых кальянной культурой.
                        Мы предлагаем вам лучшие кальянные, всегда самые свежие новинки от табачных производителей, а также кальянные аппараты, обучающие материалы и сообщество для обмена опытом.
                    </p>
                    <p>
                        Наша цель – создать пространство, где каждый любитель кальянов может найти что-то интересное и полезное.
                    </p>
                    <p>
                        Мы работаем с лучшими кальянными, чтобы предложить вам только самые качественные и комфортные места для отдыха.
                    </p>
                </div>
                <div className="about-image">
                    <img
                        src="https://smokeshop.by/files/uploads/tabak-1.jpg"
                        alt="О нас"
                        loading="lazy" // Ленивая загрузка
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;

