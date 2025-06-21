import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortOrder } from "../../redux/slices/hookahSlice";
import { Link } from "react-router-dom";
import { MapPin, Search as SearchIcon, SortAsc, SortDesc, ExternalLink, Star, Clock, Users } from "lucide-react";
import Search from "./Search/Search";
import LoadingSpinner from "../LoadingSpinner";
import ImageWithFallback from "../ImageWithFallback";
import "./StylesNavBar/HookahList.scss";
import { Hookah, RootState } from "../../redux/types";

const HookahCard: React.FC<{ hookah: Hookah }> = ({ hookah }) => {
    const mainImage = hookah.images && hookah.images.length > 0 ? hookah.images[0] : '';

    return (
        <div className="hookah-card">
            <div className="hookah-image-container">
                <ImageWithFallback 
                    src={mainImage} 
                    alt={hookah.name}
                    className="hookah-image"
                />
                <div className="hookah-overlay">
                    <div className="hookah-rating">
                        <Star className="rating-icon" />
                        <span>4.8</span>
                    </div>
                </div>
            </div>
            <div className="hookah-content">
                <div className="hookah-header">
                    <h3 className="hookah-name">{hookah.name}</h3>
                    <div className="hookah-meta">
                        <span className="hookah-status">
                            <Clock className="meta-icon" />
                            Открыто
                        </span>
                    </div>
                </div>
                <p className="hookah-description">{hookah.description}</p>
                <div className="hookah-address">
                    <MapPin className="address-icon" />
                    <span>{hookah.address}</span>
                </div>
                <div className="hookah-buttons">
                    <Link to={`/hookah/${hookah.id}`} className="btn-primary">
                        <Users className="btn-icon" />
                        Подробнее
                    </Link>
                    {hookah.imageMap && (
                        <a
                            className="btn-secondary"
                            href={hookah.imageMap}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink className="btn-icon" />
                            Забронировать
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const HookahList: React.FC = () => {
    const dispatch = useDispatch();

    // Типизация состояния Redux
    const { hookahList, loading, error } = useSelector(
        (state: RootState) => state.data
    );
    const { searchValue, sortOrder } = useSelector(
        (state: RootState) => state.hookah
    );

    if (loading) return <LoadingSpinner size="large" text="Загрузка кальянных..." />;
    if (error) return <p className="error">{error}</p>;

    const filteredHookah = hookahList.filter((item) => {
        const search = searchValue.toLowerCase();
        return (
            item.name.toLowerCase().includes(search) ||
            (item.description && item.description.toLowerCase().includes(search)) ||
            (item.address && item.address.toLowerCase().includes(search))
        );
    });

    const sortedHookah = filteredHookah.sort((a, b) =>
        sortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
    );

    return (
        <section className="hookah-list">
            <div className="hookah-list-container">
                <div className="hookah-list-header">
                    <div className="header-content">
                        <h1 className="hookah-list-title">
                            <MapPin className="title-icon" />
                            Кальянные
                        </h1>
                        <p className="hookah-list-subtitle">
                            Найдите лучшие кальянные в вашем городе
                        </p>
                    </div>
                    <div className="hookah-list-stats">
                        <div className="stat-item">
                            <span className="stat-value">{hookahList.length}</span>
                            <span className="stat-label">Кальянных</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{filteredHookah.length}</span>
                            <span className="stat-label">Найдено</span>
                        </div>
                    </div>
                </div>

                <div className="hookah-controls">
                    <div className="search-section">
                        <Search slice="hookah" />
                    </div>
                    <div className="sort-section">
                        <label htmlFor="sortOrder" className="sort-label">
                            {sortOrder === "asc" ? <SortAsc className="sort-icon" /> : <SortDesc className="sort-icon" />}
                            Сортировка:
                        </label>
                        <select
                            id="sortOrder"
                            value={sortOrder}
                            onChange={(e) => dispatch(setSortOrder(e.target.value as "asc" | "desc"))}
                            className="sort-select"
                        >
                            <option value="asc">По названию (А-Я)</option>
                            <option value="desc">По названию (Я-А)</option>
                        </select>
                    </div>
                </div>

                <div className="hookah-grid">
                    {sortedHookah.length > 0 ? (
                        sortedHookah.map((hookah) => (
                            <HookahCard key={hookah.id} hookah={hookah} />
                        ))
                    ) : (
                        <div className="no-results">
                            <SearchIcon className="no-results-icon" />
                            <h3>Ничего не найдено</h3>
                            <p>По запросу «{searchValue}» ничего не найдено</p>
                            <p>Попробуйте изменить поисковый запрос</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HookahList;
