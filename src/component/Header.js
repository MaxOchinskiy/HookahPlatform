import React from "react";
import { Link } from "react-router-dom";
import "../scss/styles.scss";

function Header  () {
    return (
        <div className="container">
                <h1>Добро пожаловать в мир кальянов</h1>
                <p>Найди лучшую кальянную в своём городе и узнавай секреты искусства курения.</p>
                <Link to="/booking" className="button">Забронировать кальянную</Link>
            </div>
        )
}

export default Header;
