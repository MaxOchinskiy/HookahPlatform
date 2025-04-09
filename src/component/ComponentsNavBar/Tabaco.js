import React, {useEffect, useState} from 'react';
import './StylesNavBar/Tobaco.scss'; // Импортируем стили

function Tabaco() {
    const [tabaco,setTabaco] = useState([]);
    useEffect(()=>{
        fetch("https://67f4eef9913986b16fa26cac.mockapi.io/Tabaco")
            .then((response)=>{
                return response.json();
            })
            .then((tab)=>{
                setTabaco(tab);
            })
    },[])
    return (
        <div className="tabaco-container">
            <h1>Табачные смеси</h1>
            <ul className="tabaco-list">
                {tabaco.map((tabaco) => (
                    <li key={tabaco.id} className="tabaco-item">
                        <img src={tabaco.image} alt={`${tabaco.brand} - ${tabaco.flavor}`} />
                        <div className="content">
                            <h2>{tabaco.brand} - {tabaco.flavor}</h2>
                            <p>{tabaco.description}</p>
                            <p>Тип: {tabaco.type}</p>
                            <p className="price">Цена: {tabaco.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tabaco;
