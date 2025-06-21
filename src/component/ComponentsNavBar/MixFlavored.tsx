import React, { useState } from "react";
import { BookOpen, Copy, CheckCircle, RefreshCw, Star, Sparkles, XCircle } from "lucide-react";
import "./StylesNavBar/MixFlavored.scss";

interface Flavor {
    name: string;
    type: string;
    profile: string;
    strength: "лёгкий" | "средний" | "крепкий";
    brand: string;
    line: string;
}

interface Mix {
    title: string;
    mix: { flavor: string; percentage: number }[];
    brands: string[];
    strength: string;
}

const flavors: Flavor[] = [
    { name: "Peach Ice Tea", type: "чай", profile: "персиковый, сладкий", strength: "средний", brand: "Must Have", line: "Original" },
    { name: "Mango Sling", type: "фрукт", profile: "манго, тропики", strength: "средний", brand: "Must Have", line: "Original" },
    { name: "Melonade", type: "ягоды", profile: "дыня с лимонадом", strength: "средний", brand: "Must Have", line: "Original" },
    { name: "Pinkman", type: "цитрус-ягоды", profile: "Розовый грейпфрут с земляничным сиропом", strength: "средний", brand: "Must Have", line: "Original" },
    { name: "SpaseFlover", type: "тропические фрукты", profile: "манго,маракуя,личи,роза", strength: "средний", brand: "Must Have", line: "Original" },
    { name: "GenesisRasberry", type: "малина", profile: "малина", strength: "средний", brand: "DarkSide", line: "Core" },
    { name: "Bergamonstr", type: "чай", profile: "бергамот, чай", strength: "средний", brand: "DarkSide", line: "Core" },
    { name: "Dark Spirit", type: "напиток", profile: "кола с ромом", strength: "средний", brand: "DarkSide", line: "Core" },
    { name: "Crazy Cactus", type: "фрукт", profile: "кактус, терпкий", strength: "крепкий", brand: "BlackBurn", line: "Classic" },
    { name: "Holly Cola", type: "напиток", profile: "кола, свежий", strength: "крепкий", brand: "BlackBurn", line: "Classic" },
    { name: "Tropical Boom", type: "тропики", profile: "ананас, маракуйя", strength: "крепкий", brand: "BlackBurn", line: "Classic" },
    { name: "Blueberry", type: "ягода", profile: "черника, мягкий", strength: "лёгкий", brand: "Starline", line: "Light" },
    { name: "Lemon Pie", type: "десерт", profile: "лимонный пирог", strength: "лёгкий", brand: "Starline", line: "Light" },
    { name: "Apple Candy", type: "фрукт", profile: "сладкое яблоко", strength: "лёгкий", brand: "Starline", line: "Light" },
    { name: "Cranberry", type: "ягода", profile: "кислая клюква", strength: "крепкий", brand: "Bonche", line: "Classic" },
    { name: "Cold Pear", type: "фрукт", profile: "груша с холодком", strength: "крепкий", brand: "Bonche", line: "Classic" },
    { name: "Cheesecake", type: "десерт", profile: "сырный торт", strength: "крепкий", brand: "Bonche", line: "Classic" },
    { name: "Cherry Bomb", type: "ягода", profile: "вишня, взрывной", strength: "крепкий", brand: "Troffimoff", line: "Strong" },
    { name: "Pineapple Express", type: "фрукт", profile: "ананас, травяной", strength: "крепкий", brand: "Troffimoff", line: "Strong" },
    { name: "Spicy Citrus", type: "цитрус", profile: "пряный апельсин", strength: "крепкий", brand: "Troffimoff", line: "Strong" },
];

function getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMix(strength: string = "любой"): Mix {
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

const tips = [
    "Старайтесь сочетать фрукты с фруктами, а десерты с десертами.",
    "Добавляйте немного цитруса для свежести.",
    "Не бойтесь экспериментировать с крепостью!",
    "Для яркого вкуса используйте Must Have или DarkSide.",
    "Сначала пробуйте миксы в маленьких пропорциях.",
    "Сладкие вкусы хорошо сочетаются с ягодами.",
    "Добавьте немного мяты для охлаждающего эффекта.",
];

const brandIcons: Record<string, React.ReactNode> = {
    "Must Have": <Star className="brand-icon musthave" />, 
    "DarkSide": <Star className="brand-icon darkside" />, 
    "BlackBurn": <Star className="brand-icon blackburn" />, 
    "Starline": <Star className="brand-icon starline" />, 
    "Bonche": <Star className="brand-icon bonche" />, 
    "Troffimoff": <Star className="brand-icon troffimoff" />
};

const MixFlavored: React.FC = () => {
    const [mix, setMix] = useState<Mix | null>(null);
    const [history, setHistory] = useState<Mix[]>([]);
    const [copied, setCopied] = useState(false);
    const [showHistory, setShowHistory] = useState(false);

    const handleGenerate = (strength: string) => {
        const result = generateMix(strength);
        setMix(result);
        setHistory(prev => [result, ...prev.slice(0, 9)]); // max 10
        setCopied(false);
    };

    const handleCopy = () => {
        if (!mix) return;
        const text = `${mix.title}\n${mix.mix.map(m => `${m.flavor}: ${m.percentage}%`).join(", ")}\nКрепость: ${mix.strength}\nБренды: ${mix.brands.join(", ")}`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <section className="mixflavored">
            <div className="mixflavored-container">
                <div className="mixflavored-header">
                    <h1 className="mixflavored-title">
                        <Sparkles className="title-icon" />
                        Генератор миксов
                    </h1>
                    <p className="mixflavored-subtitle">
                        Получи уникальный рецепт кальянного микса одним кликом!
                    </p>
                </div>

                <div className="mixflavored-controls">
                    { ["лёгкий", "средний", "крепкий", "любой"].map((s) => (
                        <button
                            key={s}
                            onClick={() => handleGenerate(s)}
                            className={`mix-btn ${mix?.strength === s ? "active" : ""}`}
                        >
                            {s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                    ))}
                    <button className="mix-btn refresh" onClick={() => handleGenerate(mix?.strength || "любой")}> <RefreshCw /> Новый</button>
                    <button className="mix-btn history" onClick={() => setShowHistory(v => !v)}>
                        {showHistory ? <XCircle /> : <BookOpen />} История
                    </button>
                </div>

                <div className="mixflavored-main">
                    {mix ? (
                        <div className="mix-card animate">
                            <h2 className="mix-title">{mix.title}</h2>
                            <ul className="mix-list">
                                {mix.mix.map((item, idx) => (
                                    <li key={idx}>
                                        <span className="mix-flavor">{item.flavor}</span>
                                        <span className="mix-percent">{item.percentage}%</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mix-info">
                                <span className="mix-strength">Крепость: <b>{mix.strength}</b></span>
                                <span className="mix-brands">
                                    {mix.brands.map((b, i) => (
                                        <span className="brand" key={i}>{brandIcons[b] || <Star />} {b}</span>
                                    ))}
                                </span>
                            </div>
                            <button className="copy-btn" onClick={handleCopy}>
                                {copied ? <CheckCircle className="copy-icon" /> : <Copy className="copy-icon" />} {copied ? "Скопировано!" : "Скопировать"}
                            </button>
                        </div>
                    ) : (
                        <div className="mix-placeholder">
                            <Sparkles className="placeholder-icon" />
                            <p>Выберите крепость и получите свой первый микс!</p>
                        </div>
                    )}
                </div>

                <div className="mixflavored-tips">
                    <h3><CheckCircle className="tips-icon" /> Советы по смешиванию:</h3>
                    <ul>
                        {tips.map((tip, idx) => (
                            <li key={idx}>{tip}</li>
                        ))}
                    </ul>
                </div>

                {showHistory && history.length > 0 && (
                    <div className="mixflavored-history">
                        <h3><BookOpen className="history-icon" /> История миксов</h3>
                        <ul>
                            {history.map((h, idx) => (
                                <li key={idx} className="history-item">
                                    <span className="history-title">{h.title}</span>
                                    <span className="history-strength">({h.strength})</span>
                                    <span className="history-brands">
                                        {h.brands.map((b, i) => (
                                            <span className="brand" key={i}>{brandIcons[b] || <Star />} {b}</span>
                                        ))}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MixFlavored; 