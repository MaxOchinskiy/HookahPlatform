import React, { useState } from "react";

const flavors = [
    // Must Have средняя крепость
    { name: "Peach Ice Tea", type: "чай", profile: "персиковый, сладкий", strength: "средний", brand: "Must Have", line: "Original" },
    { name: "Mango Sling", type: "фрукт", profile: "манго, тропики", strength: "средний", brand: "Must Have", line: "Original" },
    { name: "Melonade", type: "ягоды", profile: "дыня с лимонадом", strength: "средний", brand: "Must Have", line: "Original" },
    { name: "Pinkman", type: "цитрус-ягоды", profile: "Розовый грейпфрут с земляничным сиропом", strength: "средний", brand: "Must Have", line: "Original" },
    { name: "SpaseFlover", type: "тропические фрукты", profile: "манго,маракуя,личи,роза", strength: "средний", brand: "Must Have", line: "Original" },

    // DarkSide средняя крепость
    { name: "GenesisRasberry", type: "малина", profile: "малина", strength: "средний", brand: "DarkSide", line: "Core" },
    { name: "Bergamonstr", type: "чай", profile: "бергамот, чай", strength: "средний", brand: "DarkSide", line: "Core" },
    { name: "Dark Spirit", type: "напиток", profile: "кола с ромом", strength: "средний", brand: "DarkSide", line: "Core" },

    // BlackBurn средняя крепость
    { name: "Crazy Cactus", type: "фрукт", profile: "кактус, терпкий", strength: "крепкий", brand: "BlackBurn", line: "Classic" },
    { name: "Holly Cola", type: "напиток", profile: "кола, свежий", strength: "крепкий", brand: "BlackBurn", line: "Classic" },
    { name: "Tropical Boom", type: "тропики", profile: "ананас, маракуйя", strength: "крепкий", brand: "BlackBurn", line: "Classic" },

    // Starline легкая крепость
    { name: "Blueberry", type: "ягода", profile: "черника, мягкий", strength: "лёгкий", brand: "Starline", line: "Light" },
    { name: "Lemon Pie", type: "десерт", profile: "лимонный пирог", strength: "лёгкий", brand: "Starline", line: "Light" },
    { name: "Apple Candy", type: "фрукт", profile: "сладкое яблоко", strength: "лёгкий", brand: "Starline", line: "Light" },

    // Bonche высокая кропость сигарный лист
    { name: "Cranberry", type: "ягода", profile: "кислая клюква", strength: "крепкий", brand: "Bonche", line: "Classic" },
    { name: "Cold Pear", type: "фрукт", profile: "груша с холодком", strength: "крепкий", brand: "Bonche", line: "Classic" },
    { name: "Cheesecake", type: "десерт", profile: "сырный торт", strength: "крепкий", brand: "Bonche", line: "Classic" },

    // Troffimoff высокая кропость сигарный лист
    { name: "Cherry Bomb", type: "ягода", profile: "вишня, взрывной", strength: "крепкий", brand: "Troffimoff", line: "Strong" },
    { name: "Pineapple Express", type: "фрукт", profile: "ананас, травяной", strength: "крепкий", brand: "Troffimoff", line: "Strong" },
    { name: "Spicy Citrus", type: "цитрус", profile: "пряный апельсин", strength: "крепкий", brand: "Troffimoff", line: "Strong" },
];


function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMix(strength = "любой") {
    let filtered = strength === "любой"
        ? flavors
        : flavors.filter(f => f.strength === strength);

    const main = getRandomElement(filtered);
    const support = getRandomElement(filtered.filter(f => f.name !== main.name));
    const accent = getRandomElement(filtered.filter(f => f.name !== main.name && f.name !== support.name));

    return {
        title: `${main.name} + ${support.name} + ${accent.name}`,
        mix: [
            { flavor: main.name, percentage: 60 },
            { flavor: support.name, percentage: 30 },
            { flavor: accent.name, percentage: 10 },
        ],
        brands: [main.brand, support.brand, accent.brand],
        strength,
    };
}

export default function HookahMixGenerator() {
    const [mix, setMix] = useState(null);

    const handleGenerate = (strength) => {
        const result = generateMix(strength);
        setMix(result);
    };

    return (
        <div className="min-h-screen bg-zinc-900 text-white p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Генератор Миксов</h1>
            <div className="flex gap-2 mb-6">
                {["лёгкий", "средний", "крепкий", "любой"].map((s) => (
                    <button
                        key={s}
                        onClick={() => handleGenerate(s)}
                        className={`px-4 py-2 rounded ${
                            s === "любой" ? "bg-blue-600 hover:bg-blue-500" : "bg-zinc-700 hover:bg-zinc-600"
                        }`}
                    >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                ))}
            </div>

            {mix && (
                <div className="w-full max-w-md bg-zinc-800 text-white border border-zinc-700 rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold mb-2">{mix.title}</h2>
                    <ul className="mb-2">
                        {mix.mix.map((item, idx) => (
                            <li key={idx}>
                                {item.flavor}: {item.percentage}%
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-zinc-400">Крепость: {mix.strength}</p>
                    <p className="text-sm text-zinc-400">Бренды: {mix.brands.join(", ")}</p>
                </div>
            )}
        </div>
    );
}
