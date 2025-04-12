import React, { useEffect, useState } from 'react';
import './StylesNavBar/Tobaco.scss';

function Tabaco() {
    const [tabacos, setTabacos] = useState([]);
    useEffect(() => {
        fetch("https://67f4eef9913986b16fa26cac.mockapi.io/Tabaco")
            .then((response) => {
                return response.json();
            })
            .then((tabs) => {
                setTabacos(tabs);
            });
    }, []);

    return (
        <div className="tabaco-container">
            <h1>Табачные смеси</h1>
            <ul className="tabaco-list">
                {tabacos.map((tabaco) => (
                    <li key={tabaco.id} className="tabaco-item">
                        <img src={tabaco.image} alt={tabaco.brand} />
                        <div className="content">
                            <h2>{tabaco.brand}</h2>
                            <p>Бренды : {tabaco.description}</p>
                            <p>Линейки крепости: {tabaco.line}</p>
                            <p>Тип: {tabaco.type}</p>
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
                ))}
            </ul>
        </div>
    );
}

export default Tabaco;

