import React, {useEffect, useState} from 'react';
import './StylesNavBar/Tobaco.scss';
import Search from "./Search/Search";


function Tabaco({ searchValue }) {
    const [tabacos, setTabacos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch("https://67f4eef9913986b16fa26cac.mockapi.io/Tabaco")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка загрузки данных');
                }
                return response.json();
            })
            .then((tabs) => setTabacos(tabs))
            .catch((error) => {
                console.error('Ошибка:', error);
                setError('Не удалось загрузить данные. Пожалуйста, попробуйте позже.');
            })
            .finally(() => setIsLoading(false));
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

    // Сортировка по названию бренда
    const sortedTabacos = [...filteredTabacos].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.brand.localeCompare(b.brand);
        } else {
            return b.brand.localeCompare(a.brand);
        }
    });
    if (error) {
        return (
            <div className="tabaco-container">
                <h1>Табачные смеси</h1>
                <div className="error-message">{error}</div>
            </div>
        );
    }

    return (
        <div className="tabaco-container">
            {/* Верхний блок с заголовком, поиском и сортировкой */}
            <div className="tabaco-header">
                <h1>Табачные смеси</h1>
                <div className="controls">
                    <div className="search-tabaco">
                        <Search />
                    </div>
                    <div className="sort-tabaco">
                        <label htmlFor="sortOrder">Сортировка:</label>
                        <select
                            id="sortOrder"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="asc">По названию (А-Я)</option>
                            <option value="desc">По названию (Я-А)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Список табака */}
            <ul className="tabaco-list">
                {sortedTabacos.length > 0 ? (
                    sortedTabacos.map((tabaco) => (
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
                                        className="button-info"
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



