import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StylesNavBar/HookahList.scss";
import Search from "./Search/Search";

function HookahList({ hookah, searchValue }) {
  const [sortOrder, setSortOrder] = useState("asc");

  // Фильтрация по значению поиска
  const filteredHookah = hookah.filter((item) => {
    const search = searchValue.toLowerCase();
    return (
      item.name.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search) ||
      (item.address && item.address.toLowerCase().includes(search))
    );
  });

  // Сортировка по названию кальянной
  const sortedHookah = [...filteredHookah].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <section className="hookah-list">
      {/* Верхний блок с заголовком, поиском и сортировкой */}
      <div className="hookah-header">
        <h2 className="hookah-title">Кальянные</h2>
        <div className="hookah-controls">
          <div className="search-hookah">
            <Search />
          </div>
          <div className="sort-hookah">
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

      {/* Грид списка кальянных */}
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
}

export default HookahList;