import React, { useEffect, useState } from 'react';
import './StylesNavBar/Tobaco.scss';
import Search from "./Search/Search";


function Tabaco({searchValue}) {
    const [tabacos, setTabacos] = useState([]);


    useEffect(() => {
        fetch("https://67f4eef9913986b16fa26cac.mockapi.io/Tabaco")
            .then((response) => response.json())
            .then((tabs) => setTabacos(tabs));

    }, []);


    // Фильтрация по значению поиска
    const filteredTabacos = tabacos.filter((tabaco) => {
        const search = searchValue.toLowerCase();
        return (
            tabaco.brand.toLowerCase().includes(search) ||
            tabaco.description.toLowerCase().includes(search) ||
            (tabaco.line && tabaco.line.toLowerCase().includes(search)) ||
            (tabaco.type && tabaco.type.toLowerCase().includes(search))
        );
    });

    return (
        <div className="tabaco-container">
            <h1>Табачные смеси</h1>
            <div className="search-tabaco">
            <Search/>
        </div>
            <ul className="tabaco-list">
                {filteredTabacos.length > 0 ? (
                    filteredTabacos.map((tabaco) => (
                        <li key={tabaco.id} className="tabaco-item">
                            <img src={tabaco.image} alt={tabaco.brand} />
                            <div className="content">
                                <h2>{tabaco.brand}</h2>
                                <p>Бренды : {tabaco.description}</p>
                                <p>Линейки крепости : {tabaco.line}</p>
                                <p>Тип : {tabaco.type}</p>

                                {tabaco.http && (
                                    <a
                                        href={tabaco.http}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Подробнее
                                    </a>
                                )}
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="no-result">Ничего не найдено по запросу «{searchValue}»</p>
                )}
            </ul>
        </div>
    );
}

export default Tabaco;


