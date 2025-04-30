import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortOrder } from "../../redux/slices/hookahSlice";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import "./StylesNavBar/HookahList.scss";

// Типы для данных о кальяных и состояния Redux
interface Hookah {
    id: string;
    name: string;
    description: string;
    address: string;
    image: string;
    imageMap?: string;
}

interface RootState {
    data: {
        hookahList: Hookah[];
        loading: boolean;
        error: string | null;
    };
    hookah: {
        searchValue: string;
        sortOrder: "asc" | "desc";
    };
}

const HookahList: React.FC = () => {
    const dispatch = useDispatch();

    // Типизация состояния Redux
    const { hookahList, loading, error } = useSelector(
        (state: RootState) => state.data
    );
    const { searchValue, sortOrder } = useSelector(
        (state: RootState) => state.hookah
    );

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p className="error">{error}</p>;

    const filteredHookah = hookahList.filter((item) => {
        const search = searchValue.toLowerCase();
        return (
            item.name.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search) ||
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
            <div className="hookah-header">
                <h2 className="hookah-title">Кальянные</h2>
                <div className="hookah-controls">
                    <div className="search-hookah">
                        <Search slice="hookah" />
                    </div>
                    <div className="sort-hookah">
                        <label htmlFor="sortOrder">Сортировка:</label>
                        <select
                            id="sortOrder"
                            value={sortOrder}
                            onChange={(e) => dispatch(setSortOrder(e.target.value as "asc" | "desc"))}
                        >
                            <option value="asc">По названию (А-Я)</option>
                            <option value="desc">По названию (Я-А)</option>
                        </select>

                    </div>
                </div>
            </div>
            <div className="hookah-grid">
                {sortedHookah.length > 0 ? (
                    sortedHookah.map((hookah) => (
                        <div key={hookah.id} className="hookah-card">
                            <div
                                className="hookah-image"
                                style={{ backgroundImage: `url(${hookah.image})` }}
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
                    <p className="no-results">
                        Ничего не найдено по запросу «{searchValue}»
                    </p>
                )}
            </div>
        </section>
    );
};

export default HookahList;
