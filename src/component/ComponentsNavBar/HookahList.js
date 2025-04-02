import React from "react";
import { Link } from "react-router-dom";
import "./StylesNavBar/HookahList.scss"; // Подключаем стили

const hookahBars = [/*Долелать Json*/
    {
        id: 1,
        name: "БрикВуд Перл",
        image: "https://avatars.mds.yandex.net/get-altay/11409713/2a0000018eae03fcc4c60d430073982a14b6/XXXL",
        description: "Уютное место с ароматными кальянами и вкусными коктейлями.",
        link: "/hookahs/brickWood",
        address: "просп. Героев, 33, Санкт-Петербург"
    },
    {
        id: 2,
        name: "Tangiers Lounge",
        image: "https://avatars.mds.yandex.net/get-tycoon/5657946/2a000001843dff02678c110fc98391e0db8d/priority-headline-background",
        description: "Помпезный интерьер, VIP-комнаты, PlayStation и мягкие зоны.",
        link: "/hookahs/tangiers",
        address: "ул. Катерников, 8, Санкт-Петербург"
    },
    {
        id: 3,
        name: "Days",
        image: "https://avatars.mds.yandex.net/get-altay/4379646/2a00000181caa9b63274cdf4b5024fd822bd/XXXL",
        description: "Кальян-бар Days — это уютное место с красивым интерьером и потрясающим видом на Финский залив.",
        link: "/hookahs/days",
        address: "Балтийский бульвар,4, Санкт-Петербург"
    },
    {
        id: 4,
        name: "Liberty Lounge Bar",
        image: "https://avatars.mds.yandex.net/get-altay/9829646/2a00000190eb5f93d2a3f0da471183ab9105/XXXL",
        description: "Кальян-бар Days — это уютное место с красивым интерьером и потрясающим видом на Финский залив.",
        link: "/hookahs/libertyLoungeBar",
        address: "наб. Матисова канала, 1, Санкт-Петербург"
    },
    {
        id: 5,
        name: "Cloud Factory",
        image: "https://avatars.mds.yandex.net/get-altay/13322921/2a00000195e3260d06e40e3d75ce43fe7146/XXXL",
        description: "Cloud Factory — это кальянный бар, где вы можете насладиться дымными кальянами, авторскими чаями и конфетами, а также поиграть в игровые приставки.",
        link: "/hookahs/cloudFactory",
        address: "ул. Адмирала Трибуца, 7, Санкт-Петербург"
    },
    {
        id: 6,
        name: "SmokeTime Lounge",
        image: "https://avatars.mds.yandex.net/get-altay/9237948/2a00000188cd61faf22eea595216b7746064/XXXL",
        description: "SmokeTime Lounge — это кальянный бар, расположенный на шестом этаже бизнес-центра. Интерьер заведения выполнен в индустриальном стиле, что придает ему особый шарм.",
        link: "/hookahs/smokeTimeLounge",
        address: "Брестский бульвар, 8, Санкт-Петербург"
    }
];

const HookahList = () => {
    return (
        <section className="hookah-list container">
            <h2>Лучшие кальянные</h2>
            <div className="hookah-grid">
                {hookahBars.map((bar) => (
                    <div key={bar.id} className="hookah-card">
                        <div className="hookah-image" style={{ backgroundImage: `url(${bar.image})` }}></div>
                        <div className="hookah-content">
                            <h3>{bar.name}</h3>
                            <p>{bar.description}</p>
                            <p>Адрес: {bar.address}</p>
                            <Link to={bar.link} className="button">Подробнее</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HookahList;
