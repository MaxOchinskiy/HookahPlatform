import React from "react";
import { Link } from "react-router-dom";
import "./StylesNavBar/HookahList.scss"; // Подключаем стили

function HookahList({ hookah }) {
    return (
        <section className="hookah-list container">
            <h2 className="hookah-title">Кальянные</h2>
            <div className="hookah-grid">
                {hookah.map((bar) => (
                    <div key={bar.id} className="hookah-card">
                        <div
                            className="hookah-image"
                            style={{ backgroundImage: `url(${bar.image})` }}
                        ></div>
                        <div className="hookah-content">
                            <h3>{bar.name}</h3>
                            <p>{bar.description}</p>
                            <p>Адрес: {bar.address}</p>
                            <div className="hookah-buttons">
                                <Link to={`/hookah/${bar.id}`} className="button">
                                    Подробнее
                                </Link>
                                <a
                                    className="button"
                                    href={`https://yandex.ru/maps/2/saint-petersburg/?ll=${bar.long}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Забронировать
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HookahList;




