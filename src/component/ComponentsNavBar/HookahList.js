import React from "react";
import { Link } from "react-router-dom";
import "./StylesNavBar/HookahList.scss"; // Подключаем стили

function HookahList  ({hookah}) {

    return (
        <section className="hookah-list container">
            <h2>Лучшие кальянные</h2>
            <div className="hookah-grid">
                {hookah.map((bar) => (
                    <div key={bar.id} className="hookah-card">
                        <div className="hookah-image" style={{ backgroundImage: `url(${bar.image})` }}></div>
                        <div className="hookah-content">
                            <h3>{bar.name}</h3>
                            <p>{bar.description}</p>
                            <p>Адрес: {bar.address}</p>
                            <Link to={bar.link} className="button">Подробнее</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HookahList;
