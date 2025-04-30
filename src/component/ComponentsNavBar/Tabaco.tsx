import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store'; // предполагаем, что у тебя есть файл store.ts с типом RootState
import { setSortOrder } from '../../redux/slices/tabacoSlice';
import Search from './Search/Search';
import './StylesNavBar/Tobaco.scss';

interface TabacoItem {
    id: string;
    brand: string;
    description: string;
    line: string; // Крепость
    type: string; // Тип сырья
    image: string;
    http?: string;
}

const Tabaco: React.FC = () => {
    const dispatch = useDispatch();
    const { tabacoList, loading, error } = useSelector((state: RootState) => state.data);
    const { searchValue, sortOrder } = useSelector((state: RootState) => state.tabaco);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p className="error">{error}</p>;

    const filteredTabacos = tabacoList.filter((tabaco: TabacoItem) =>
        tabaco.brand.toLowerCase().includes(searchValue.toLowerCase())
    );

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
                            onChange={(e) => dispatch(setSortOrder(e.target.value as 'asc' | 'desc'))}
                        >
                            <option value="asc">По названию (А-Я)</option>
                            <option value="desc">По названию (Я-А)</option>
                        </select>
                    </div>
                </div>
            </div>

            <ul className="tabaco-list">
                {sortedTabacos.length > 0 ? (
                    sortedTabacos.map((tabaco: TabacoItem) => (
                        <li key={tabaco.id} className="tabaco-item">
                            <img src={tabaco.image} alt={tabaco.brand} />
                            <div className="content">
                                <h2>{tabaco.brand}</h2>
                                <p>Бренды: {tabaco.description}</p>
                                <p>Крепость: {tabaco.line}</p>
                                <p>Тип сырья: {tabaco.type}</p>
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
