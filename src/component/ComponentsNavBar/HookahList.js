import React from "react";
import {Link} from "react-router-dom";
import "./StylesNavBar/HookahList.scss";
import Search from "./Search/Search";

function HookahList({hookah, searchValue}) {
    const filteredHookah = hookah.filter((item) => {
        const search = searchValue.toLowerCase();
        return (
            item.name.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search) ||
            (item.address && item.address.toLowerCase().includes(search))
        );
    });

    return (
        <section className="hookah-list container">
            <div className="search-hookah">
                <Search/>
            </div>
            <h2 className="hookah-title">Кальянные</h2>
            <div className="hookah-grid">
                {filteredHookah.length > 0 ? (
                    filteredHookah.map((hookah) => (
                        <div key={hookah.id} className="hookah-card">
                            <div
                                className="hookah-image"
                                style={{backgroundImage: `url(${hookah.image})`}}
                            ></div>
                            <div className="hookah-content">
                                <h3>{hookah.name}</h3>
                                <p>{hookah.description}</p>
                                <p>Адрес: {hookah.address}</p>
                                <div className="hookah-buttons">
                                    <Link to={`/hookah/${hookah.id}`} className="button">
                                        Подробнее
                                    </Link>
                                    {hookah.imageMap && (
                                        <a
                                            className="button"
                                            href={hookah.imageMap}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Забронировать
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">Ничего не найдено по запросу «{searchValue}»</p>
                )}
            </div>
        </section>
    );
}

export default HookahList;








