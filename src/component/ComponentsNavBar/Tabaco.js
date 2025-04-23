import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortOrder } from '../../redux/slices/tabacoSlice';
import Search from './Search/Search';
import './StylesNavBar/Tobaco.scss';

const Tabaco = () => {
    const dispatch = useDispatch();
    const { tabacoList, loading, error } = useSelector((state) => state.data); // Данные из Redux
    const { searchValue, sortOrder } = useSelector((state) => state.tabaco); // Поиск и сортировка

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p className="error">{error}</p>;

    // Фильтрация табачных смесей
    const filteredTabacos = tabacoList.filter((tabaco) =>
        tabaco.brand.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Сортировка табачных смесей
    const sortedTabacos = filteredTabacos.sort((a, b) =>
        sortOrder === 'asc' ? a.brand.localeCompare(b.brand) : b.brand.localeCompare(a.brand)
    );

    return (
        <div className="tabaco-container">
            <div className="tabaco-header">
                <h1>Табачные смеси</h1>
                <div className="controls">
                    <div className="search-tabaco">
                        <Search slice="tabaco" />
                    </div>
                    <div className="sort-tabaco">
                        <label htmlFor="sortOrder">Сортировка:</label>
                        <select
                            id="sortOrder"
                            value={sortOrder}
                            onChange={(e) => dispatch(setSortOrder(e.target.value))}
                        >
                            <option value="asc">По названию (А-Я)</option>
                            <option value="desc">По названию (Я-А)</option>
                        </select>
                    </div>
                </div>
            </div>

            <ul className="tabaco-list">
                {sortedTabacos.length > 0 ? (
                    sortedTabacos.map((tabaco) => (
                        <li key={tabaco.id} className="tabaco-item">
                            <img src={tabaco.image} alt={tabaco.brand} />
                            <div className="content">
                                <h2>{tabaco.brand}</h2>
                                <p>Бренды: {tabaco.description}</p>
                                <p>Линейки крепости: {tabaco.line}</p>
                                <p>Тип: {tabaco.type}</p>
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
                    <p className="no-result">Ничего не найдено по текущему запросу</p>
                )}
            </ul>
        </div>
    );
};

export default Tabaco;