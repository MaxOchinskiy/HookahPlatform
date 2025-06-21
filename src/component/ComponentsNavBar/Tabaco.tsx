import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortOrder } from '../../redux/slices/tabacoSlice';
import { 
    Search as SearchIcon, 
    SortAsc, 
    SortDesc, 
    ExternalLink, 
    Leaf, 
    Flame, 
    Package,
    Star,
    Filter,
    Coffee,
    TrendingUp,
    Users
} from 'lucide-react';
import Search from './Search/Search';
import LoadingSpinner from '../LoadingSpinner';
import ImageWithFallback from '../ImageWithFallback';
import type { Tabaco } from '../../redux/types';
import { RootState } from '../../redux/types';
import './StylesNavBar/Tobaco.scss';

const TabacoCard: React.FC<{ tabaco: Tabaco }> = ({ tabaco }) => {
    return (
        <div className="tabaco-card">
            <div className="tabaco-image-container">
                <ImageWithFallback 
                    src={tabaco.image} 
                    alt={tabaco.brand}
                    className="tabaco-image"
                />
                <div className="tabaco-overlay">
                    <div className="tabaco-badge">
                        <Flame className="badge-icon" />
                        <span>{tabaco.line}</span>
                    </div>
                </div>
            </div>
            
            <div className="tabaco-content">
                <div className="tabaco-header">
                    <h3 className="tabaco-brand">{tabaco.brand}</h3>
                    <div className="tabaco-type">
                        <Leaf className="type-icon" />
                        <span>{tabaco.type}</span>
                    </div>
                </div>
                
                <p className="tabaco-description">{tabaco.description}</p>
                
                <div className="tabaco-details">
                    <div className="detail-item">
                        <Package className="detail-icon" />
                        <span>Линия: {tabaco.line}</span>
                    </div>
                    {tabaco.strength && (
                        <div className="detail-item">
                            <Flame className="detail-icon" />
                            <span>Крепость: {tabaco.strength}/10</span>
                        </div>
                    )}
                    {tabaco.nicotine && (
                        <div className="detail-item">
                            <Star className="detail-icon" />
                            <span>Никотин: {tabaco.nicotine}%</span>
                        </div>
                    )}
                </div>
                
                {tabaco.flavor && tabaco.flavor.length > 0 && (
                    <div className="tabaco-flavors">
                        <h4>Вкусы:</h4>
                        <div className="flavor-tags">
                            {tabaco.flavor.slice(0, 3).map((flavor, index) => (
                                <span key={index} className="flavor-tag">{flavor}</span>
                            ))}
                            {tabaco.flavor.length > 3 && (
                                <span className="flavor-tag more">+{tabaco.flavor.length - 3}</span>
                            )}
                        </div>
                    </div>
                )}
                
                {tabaco.http && (
                    <a
                        href={tabaco.http}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tabaco-link"
                    >
                        <ExternalLink className="link-icon" />
                        Подробнее
                    </a>
                )}
            </div>
        </div>
    );
};

const TabacoPage: React.FC = () => {
    const dispatch = useDispatch();
    const { tabacoList, loading, error } = useSelector((state: RootState) => state.data);
    const { searchValue, sortOrder } = useSelector((state: RootState) => state.tabaco);

    if (loading) return <LoadingSpinner size="large" text="Загрузка табачных смесей..." />;
    if (error) return <p className="error-message">{error}</p>;

    const filteredTabacos = tabacoList.filter((tabaco: Tabaco) =>
        tabaco.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
        tabaco.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        tabaco.type.toLowerCase().includes(searchValue.toLowerCase())
    );

    const sortedTabacos = filteredTabacos.sort((a, b) =>
        sortOrder === 'asc' ? a.brand.localeCompare(b.brand) : b.brand.localeCompare(a.brand)
    );

    // Статистика
    const totalTabacos = tabacoList.length;
    const premiumTabacos = tabacoList.filter(t => t.line?.toLowerCase().includes('premium')).length;
    const popularBrands = tabacoList.filter(t => t.brand?.toLowerCase().includes('darkside') || t.brand?.toLowerCase().includes('tangiers')).length;

    return (
        <div className="tabaco-list">
            <div className="tabaco-list-container">
                <div className="tabaco-list-header">
                    <div className="header-content">
                        <h1 className="tabaco-list-title">
                            <Coffee className="title-icon" />
                            Табачные смеси
                        </h1>
                        <p className="tabaco-list-subtitle">
                            Откройте для себя лучшие табачные смеси от ведущих производителей
                        </p>
                    </div>
                    
                    <div className="tabaco-list-stats">
                        <div className="stat-item">
                            <span className="stat-value">{totalTabacos}</span>
                            <span className="stat-label">Всего смесей</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{premiumTabacos}</span>
                            <span className="stat-label">Премиум</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{popularBrands}</span>
                            <span className="stat-label">Популярные</span>
                        </div>
                    </div>
                </div>

                <div className="tabaco-controls">
                    <div className="search-section">
                        <Search slice="tabaco" />
                    </div>
                    
                    <div className="sort-section">
                        <label className="sort-label">
                            <Filter className="sort-icon" />
                            Сортировка:
                        </label>
                        <select
                            value={sortOrder}
                            onChange={(e) => dispatch(setSortOrder(e.target.value as 'asc' | 'desc'))}
                            className="sort-select"
                        >
                            <option value="asc">По названию (А-Я)</option>
                            <option value="desc">По названию (Я-А)</option>
                        </select>
                    </div>
                </div>

                <div className="tabaco-grid">
                    {sortedTabacos.length > 0 ? (
                        sortedTabacos.map((tabaco: Tabaco) => (
                            <TabacoCard key={tabaco.id} tabaco={tabaco} />
                        ))
                    ) : (
                        <div className="no-results">
                            <SearchIcon className="no-results-icon" />
                            <h3>Ничего не найдено</h3>
                            <p>Попробуйте изменить поисковый запрос</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TabacoPage;
