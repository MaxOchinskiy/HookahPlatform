import React from "react";
import "./StylesNavBar/Community.scss";
const Community = () => {
    return (
        <section className="container community">
            <h2 className="community-title">Сообщество</h2>
            <p className="community-description">Присоединяйтесь к нашему сообществу, обсуждайте кальянные, делитесь опытом и находите единомышленников!</p>

            <div className="community-section">
                <h3 className="community-subtitle">🔥 Популярные темы:</h3>
                <ul className="community-topics">
                    <li className="topic-item">
                        <img src="https://hookahhouse.ru/upload/iblock/9f0/9f00f7a0e570d7a1a5ab179dd064e7e5.jpg" alt="Вкусы кальяна" className="topic-image" />
                        Лучшие вкусы для кальяна 🍇
                    </li>
                    <li className="topic-item">
                        <img src="https://hookahhouse.ru/upload/iblock/d20/fwi3s2g2cvcibq00k784xchb8sk536ch.jpg" alt="Забивка чаши" className="topic-image" />
                        Как правильно забивать чашу? 🤔
                    </li>
                    <li className="topic-item">
                        <img src="https://smoke-jeen.com/images/thumbnails/380/253/blog/15/img-2dc34bb79a05186f1beded133ac269ba-ugli-dlya-kalyana.jpg" alt="Угли для кальяна" className="topic-image" />
                        Как выбрать угли для кальяна? 🔥
                    </li>
                    <li className="topic-item">
                        <img src="https://hookahmarket.life/image/catalog/chistka1.png" alt="Обслуживание кальяна" className="topic-image" />
                        Советы по обслуживанию кальяна 🛠
                    </li>
                </ul>
            </div>

            <button className="button join-button">Вступить в сообщество</button>
        </section>
    );
};

export default Community;


