import {Link} from "react-router-dom";
import React from "react";

const Education =()=>(
    <section className="container">
        <h2>Обучение</h2>
        <p>Изучай новые техники, учись правильно забивать чашу и подбирать вкусы.</p>
        <Link to="/learning" className="button">Перейти к обучению</Link>
    </section>
)
export default Education