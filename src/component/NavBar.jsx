import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    const [activeIndex, setActiveIndex] = React.useState(2);
    const onClickBar = (index) => {
        setActiveIndex(index);
    }
    return (<div className="navbar">
       <div className='container'>
        <ul>
            <li onClick={() => onClickBar(0)} className={activeIndex === 0 ? 'active' : ''}><Link to="/">Главная</Link>
            </li>
            <li onClick={() => onClickBar(1)} className={activeIndex === 1 ? 'active' : ''}><Link
                to="/hookah-list">Кальянные</Link></li>
            <li onClick={() => onClickBar(2)} className={activeIndex === 2 ? 'active' : ''}><Link
                to="/education">Обучение</Link></li>
            <li onClick={() => onClickBar(3)} className={activeIndex === 3 ? 'active' : ''}><Link
                to="/community">Сообщество</Link></li>
            <li onClick={() => onClickBar(4)} className={activeIndex === 4 ? 'active' : ''}><Link
                to="/contacts">Контакты</Link></li>
        </ul>
    </div>
</div>)
}

export default NavBar;

