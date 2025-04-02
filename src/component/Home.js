import React from "react";

function Home ()  {
    return(<div>
        <div className="card">
            <div className="card-image" style={{ backgroundImage: "url('https://avatars.mds.yandex.net/get-altay/11409713/2a0000018eae03fcc4c60d430073982a14b6/XXXL')" }}></div>
            <div className="card-content">
                <h3>Кальянная-Бар "БрикВуд Перл"</h3>
                <p>Кальян-бар «БрикВуд Перл» — это место, где вы можете насладиться ароматными кальянами, вкусными коктейлями и уютной атмосферой.</p>
                <a href="#" className="button">Подробнее</a>
            </div>
        </div>
        <div className="card">
            <div className="card-image" style={{ backgroundImage: "url('https://avatars.mds.yandex.net/get-tycoon/5657946/2a000001843dff02678c110fc98391e0db8d/priority-headline-background')" }}></div>
            <div className="card-content">
                <h3>Кальянная-Бар "Tangiers Lounge"</h3>
                <p> Tangiers Lounge — это сеть кальянных баров с помпезным интерьером, отдельными VIP-комнатами, мягкими зонами с телевизорами и приставками Sony PlayStation.</p>
                <a href="#" className="button">Подробнее</a>
            </div>
        </div>
    </div>)

}

export default Home;
