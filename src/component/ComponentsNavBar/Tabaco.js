import React from 'react';
import './StylesNavBar/Tobaco.scss'; // Импортируем стили

function Tabaco() {
    const tabacos = [
        {
            id: 1,
            image:"https://shisha-premium77.ru/upload/iblock/a47/0mt0m95ppx2ic3hcyk4gl370twgrci9s.jpg",
            brand: "Al Fakher",
            flavor: "Mint",
            description: "Освежающий вкус мяты, популярный среди любителей кальяна.",
            type: "Мокрый",
            price: "600 руб."
        },
        {
            id: 2,
            image:"https://gergeswholesaler-tobaccoshisha.co.uk/cdn/shop/products/nakhla-cift-elma_436x436.jpg?v=1657294246",
            brand: "Nakhla",
            flavor: "Double Apple",
            description: "Классический вкус двойного яблока с легкой кислинкой.",
            type: "Мокрый",
            price: "450 руб."
        },
        {
            id: 3,
            image:"https://cdn.shopify.com/s/files/1/0082/3502/4466/files/Starbuzz-Exotic-Blue_Surfer-Hookah-Tobacco.webp?v=1714665500",
            brand: "Starbuzz",
            flavor: "Blue Mist",
            description: "Легкий и сладкий вкус с оттенками ягод и мяты.",
            type: "Мокрый",
            price: "950 руб."
        },
        {
            id: 4,
            image:"https://htreviews.org/uploads/objects/3/5e4eb7f848abde95016fb6eb8a3d2cc2.webp",
            brand: "Darkside",
            flavor: "Blackberry",
            description: "Глубокий вкус черники с насыщенной сладостью и легкой кислинкой.",
            type: "Сухой",
            price: "700 руб."
        },
        {
            id: 5,
            image:"https://кальяныч.рф/site/files/catalog_item/24694/img/G9VLRXQ37syhw0JYhLtc07gYw3DEdM.jpg",
            brand: "Tangiers",
            flavor: "Lime",
            description: "Яркий и насыщенный вкус лайма, который идеально подходит для жаркого летнего вечера.",
            type: "Сухой",
            price: "850 руб."
        },
        {
            id: 6,
            image:"https://zahrahusa.com/cdn/shop/articles/2fc66e299a50d61f67c5eeb94ae4981a.jpg?v=1537255297",
            brand: "Fumari",
            flavor: "White Gummy Bear",
            description: "Сладкий и фруктовый вкус, напоминающий любимые желейные конфеты.",
            type: "Мокрый",
            price: "800 руб."
        }
    ];

    return (
        <div className="tabaco-container">
            <h1>Табачные смеси</h1>
            <ul className="tabaco-list">
                {tabacos.map((tabaco) => (
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
