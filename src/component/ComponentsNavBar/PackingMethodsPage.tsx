import React, { useState } from "react";
import { 
    Flame, 
    Layers, 
    CircleDot, 
    Target, 
    Zap, 
    AlignJustify,
    ChevronDown,
    ChevronUp,
    BookOpen
} from "lucide-react";
import "./StylesNavBar/PackingMethodsPage.scss";

interface PackingMethod {
    title: string;
    icon: React.ReactNode;
    description: string[];
    difficulty: "easy" | "medium" | "hard";
    pros: string[];
    cons: string[];
    tips?: string[];
}

const PackingMethodsPage: React.FC = () => {
    const [expandedMethods, setExpandedMethods] = useState<number[]>([0]);

    const toggleMethod = (index: number) => {
        setExpandedMethods(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "easy": return "var(--success)";
            case "medium": return "var(--warning)";
            case "hard": return "var(--error)";
            default: return "var(--accent)";
        }
    };

    const getDifficultyText = (difficulty: string) => {
        switch (difficulty) {
            case "easy": return "Легкий";
            case "medium": return "Средний";
            case "hard": return "Сложный";
            default: return "Неизвестно";
        }
    };

    const methods: PackingMethod[] = [
        {
            title: "В отступ",
            icon: <CircleDot className="method-icon" />,
            description: [
                "Табак насыпается рыхло, ниже уровня края чаши.",
                "Классический метод для начинающих."
            ],
            difficulty: "easy",
            pros: [
                "Мягкое курение",
                "Экономия табака",
                "Подходит для новичков"
            ],
            cons: [
                "Менее насыщенный вкус",
                "Дольше прогрев",
                "Больше вредных веществ"
            ],
            tips: [
                "Используйте 2-3 угля для начала",
                "Не утрамбовывайте табак"
            ]
        },
        {
            title: "Ровная забивка",
            icon: <Layers className="method-icon" />,
            description: [
                "Табак укладывается на уровень края чаши, без утрамбовки.",
                "Универсальный метод для большинства табаков."
            ],
            difficulty: "medium",
            pros: [
                "Сбалансированная крепость и вкус",
                "Стабильная тяга",
                "Подходит для большинства табаков"
            ],
            cons: [
                "Требует точного контроля жара",
                "Нужен опыт для идеального результата"
            ],
            tips: [
                "Равномерно распределяйте табак",
                "Следите за температурой"
            ]
        },
        {
            title: "Плотная (Турецкая) забивка",
            icon: <Target className="method-icon" />,
            description: [
                "Табак утрамбовывается плотно, до краёв чаши.",
                "Традиционный турецкий метод."
            ],
            difficulty: "hard",
            pros: [
                "Долгая сессия",
                "Высокая крепость",
                "Интенсивный вкус"
            ],
            cons: [
                "Риск перегрева",
                "Подходит не для всех табаков",
                "Требует опыта"
            ],
            tips: [
                "Используйте влажные табаки",
                "Контролируйте жар очень внимательно"
            ]
        },
        {
            title: "Забивка в касание",
            icon: <Zap className="method-icon" />,
            description: [
                "Табак слегка касается фольги или Каллауда.",
                "Метод для опытных кальянщиков."
            ],
            difficulty: "hard",
            pros: [
                "Интенсивный вкус",
                "Высокая дымность",
                "Быстрый прогрев"
            ],
            cons: [
                "Риск сгорания",
                "Требует опыта",
                "Не подходит для новичков"
            ],
            tips: [
                "Используйте только качественные табаки",
                "Будьте готовы к частой замене углей"
            ]
        },
        {
            title: "Phunnel-style забивка",
            icon: <Flame className="method-icon" />,
            description: [
                "Табак выкладывается по кругу в чаше с центральным отверстием.",
                "Современный метод для влажных табаков."
            ],
            difficulty: "medium",
            pros: [
                "Отлично подходит для влажных табаков",
                "Более насыщенный вкус",
                "Сохраняется сироп",
                "Высокая дымность"
            ],
            cons: [
                "Нужно точно распределять табак",
                "Делает табак менее крепким"
            ],
            tips: [
                "Используйте специальные Phunnel чаши",
                "Распределяйте табак равномерно по кругу"
            ]
        },
        {
            title: "Overpack (Забивка с горкой)",
            icon: <CircleDot className="method-icon" />,
            description: [
                "Табак лежит выше уровня чаши, часто касается фольги или каллауда.",
                "Экстремальный метод для максимального вкуса."
            ],
            difficulty: "hard",
            pros: [
                "Максимум вкуса и крепости",
                "Интенсивные ощущения"
            ],
            cons: [
                "Высокий риск сгорания",
                "Нужна точная укладка",
                "Только для опытных"
            ],
            tips: [
                "Используйте только качественные табаки",
                "Будьте готовы к частой замене углей"
            ]
        },
        {
            title: "Semi-dense (Полуплотная забивка)",
            icon: <Layers className="method-icon" />,
            description: [
                "Что-то между плотной и ровной забивкой.",
                "Универсальный метод для разных табаков."
            ],
            difficulty: "medium",
            pros: [
                "Универсальность",
                "Хорошая балансировка жара",
                "Подходит для большинства табаков"
            ],
            cons: [
                "Требует практики для точной укладки",
                "Нужен опыт для идеального результата"
            ],
            tips: [
                "Экспериментируйте с плотностью",
                "Найдите свой баланс"
            ]
        },
        {
            title: "Казанская граната",
            icon: <Flame className="method-icon" />,
            description: [
                "Эффектная и экспериментальная забивка с 2–3 слоями табака разного типа.",
                "Создает «ядро» и «оболочку» для яркой динамики вкуса."
            ],
            difficulty: "hard",
            pros: [
                "Яркая динамика вкуса",
                "Необычный прогрев",
                "Запоминающийся эффект"
            ],
            cons: [
                "Сложность исполнения",
                "Возможен неравномерный прогрев",
                "Не для новичков"
            ],
            tips: [
                "Используйте контрастные вкусы",
                "Крепкий табак внутрь, ароматный снаружи"
            ]
        },
        {
            title: "Секторами",
            icon: <Layers className="method-icon" />,
            description: [
                "Табак делится на несколько секторов с разными слоями.",
                "Каждый сектор может иметь разную крепость или вкус."
            ],
            difficulty: "hard",
            pros: [
                "Экспериментальный и интересный вкус",
                "Постоянно меняющиеся ощущения",
                "Возможность комбинировать разные ароматы"
            ],
            cons: [
                "Требует опыта для правильной укладки",
                "Сложность в равномерном прогреве",
                "Сложно сбалансировать вкус"
            ],
            tips: [
                "Используйте контрастные вкусы",
                "Следите за равномерностью прогрева"
            ]
        },
        {
            title: "Забивка слоями",
            icon: <AlignJustify className="method-icon" />,
            description: [
                "Табак укладывается в чашу по слоям разной плотности.",
                "Каждый слой может быть разного состава."
            ],
            difficulty: "medium",
            pros: [
                "Позволяет контролировать крепость и вкус",
                "Равномерный прогрев",
                "Хорошая тяга"
            ],
            cons: [
                "Сложно сделать слои равномерно",
                "Риск перегрева при слишком плотных слоях"
            ],
            tips: [
                "Начинайте с менее плотных слоев снизу",
                "Контролируйте плотность каждого слоя"
            ]
        },
        {
            title: "Компот",
            icon: <Flame className="method-icon" />,
            description: [
                "Комбинирование нескольких слоёв разных вкусов табака.",
                "Подобно компоту, где сочетаются разные фрукты."
            ],
            difficulty: "hard",
            pros: [
                "Уникальная динамика вкусов",
                "Полноценное вкусовое разнообразие",
                "Интересные комбинации"
            ],
            cons: [
                "Требует опыта для правильной укладки",
                "Не все вкусы хорошо сочетаются",
                "Сложно для новичков"
            ],
            tips: [
                "Используйте сочетающиеся вкусы",
                "Контролируйте плотность слоёв"
            ]
        }
    ];

    return (
        <section className="packing-methods">
            <div className="packing-methods-container">
                <div className="packing-methods-header">
                    <h1 className="packing-methods-title">
                        <BookOpen className="title-icon" />
                        Методы забивки кальяна
                    </h1>
                    <p className="packing-methods-subtitle">
                        Изучите различные техники забивки чаши для достижения идеального вкуса и дыма
                    </p>
                </div>

                <div className="packing-methods-content">
                    {methods.map((method, index) => (
                        <div 
                            key={index} 
                            className={`packing-method-card ${expandedMethods.includes(index) ? 'expanded' : ''}`}
                        >
                            <div 
                                className="method-header"
                                onClick={() => toggleMethod(index)}
                            >
                                <div className="method-title-wrapper">
                                    {method.icon}
                                    <h2 className="method-title">{method.title}</h2>
                                    <span 
                                        className="difficulty-badge"
                                        style={{ backgroundColor: getDifficultyColor(method.difficulty) }}
                                    >
                                        {getDifficultyText(method.difficulty)}
                                    </span>
                                </div>
                                <div className="method-toggle">
                                    {expandedMethods.includes(index) ? (
                                        <ChevronUp className="toggle-icon" />
                                    ) : (
                                        <ChevronDown className="toggle-icon" />
                                    )}
                                </div>
                            </div>

                            {expandedMethods.includes(index) && (
                                <div className="method-content">
                                    <div className="description-block">
                                        <h3>Описание метода</h3>
                                        <ul>
                                            {method.description.map((desc, descIndex) => (
                                                <li key={descIndex}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pros-cons-grid">
                                        <div className="pros-block">
                                            <h3>
                                                <Target className="block-icon" />
                                                Преимущества
                                            </h3>
                                            <ul>
                                                {method.pros.map((pro, proIndex) => (
                                                    <li key={proIndex}>{pro}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="cons-block">
                                            <h3>
                                                <Zap className="block-icon" />
                                                Недостатки
                                            </h3>
                                            <ul>
                                                {method.cons.map((con, conIndex) => (
                                                    <li key={conIndex}>{con}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {method.tips && (
                                        <div className="tips-block">
                                            <h3>
                                                <Flame className="block-icon" />
                                                Полезные советы
                                            </h3>
                                            <ul>
                                                {method.tips.map((tip, tipIndex) => (
                                                    <li key={tipIndex}>{tip}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="packing-methods-footer">
                    <div className="footer-tip">
                        <BookOpen className="footer-icon" />
                        <p>Выберите подходящий метод в зависимости от вашего опыта и типа табака!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackingMethodsPage; 