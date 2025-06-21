import React, { useState } from "react";
import { ChevronDown, ChevronUp, Flame, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import "./StylesNavBar/WorkCoal.scss";

interface CoalSection {
    title: string;
    description: string[];
    icon?: React.ReactNode;
    tips?: string[];
    warnings?: string[];
}

const WorkCoal: React.FC = () => {
    const [expandedSections, setExpandedSections] = useState<number[]>([0]);

    const toggleSection = (index: number) => {
        setExpandedSections(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const coalData: CoalSection[] = [
        {
            title: "Зачем нужен контроль жара?",
            icon: <Flame className="section-icon" />,
            description: [
                "Контроль жара — это управление температурой, передающейся в чашу с табаком.",
                "Если жар слишком слабый — табак «не раскроется», будет мало дыма и вкуса.",
                "Если жар слишком сильный — табак перегреется, появится горечь, першение, угар."
            ],
            tips: [
                "Добиться вкусной и долгой сессии",
                "Не испортить табак",
                "Не «убить» горло"
            ]
        },
        {
            title: "Какие бывают угли?",
            icon: <Flame className="section-icon" />,
            description: [
                "Кокосовые угли — лучший выбор для кальяна",
                "Древесные угли — быстро горят, много пепла",
                "Саморазжигающиеся угли — НЕ рекомендуются"
            ],
            tips: [
                "Tom Cococha, Crown, Cocoburn, Cocoloco",
                "Долго горят (60-90 минут)",
                "Минимум запаха и золы",
                "Стабильный жар"
            ],
            warnings: [
                "Саморазжигающиеся угли пропитаны химией",
                "Дают много вони, угар и головную боль",
                "Категорически не подходят для вкусового курения"
            ]
        },
        {
            title: "Как правильно контролировать жар?",
            icon: <Clock className="section-icon" />,
            description: [
                "Жар-контроль включает несколько способов управления температурой",
                "Количество угля: обычно 2–3 угля (25 мм)",
                "Тип колпака/калауда: регулирует количество жара",
                "Передвижение угля: можно перемещать по кругу"
            ],
            tips: [
                "Меньше углей — слабо, больше — риск перегрева",
                "При перегреве убери угли и дай чаше «отдохнуть» 1–2 минуты",
                "Меняй угли каждые 40–50 минут"
            ]
        },
        {
            title: "Температурозависимые табаки",
            icon: <AlertTriangle className="section-icon" />,
            description: [
                "Некоторые табаки очень чувствительны к температуре",
                "Требуют особого внимания к контролю жара"
            ],
            tips: [
                "DarkSide, Duft, Burn, Chabacco — средне-крепкие/крепкие",
                "Tangiers — суперкапризный, требует точного жара",
                "Musthave, Daily Hookah, Sebero — чувствительные вкусы"
            ],
            warnings: [
                "Боятся перегрева — теряют вкус или горчат",
                "Лучше жарить осторожно: начинать с 2.5 угля"
            ]
        },
        {
            title: "Советы для идеального жара",
            icon: <CheckCircle className="section-icon" />,
            description: [
                "Правильная подготовка углей — залог успешной сессии"
            ],
            tips: [
                "Разогревай угли на плитке 8–10 мин — они должны быть полностью красные",
                "Никогда не дуй на угли — они могут впитать влагу и «лопнуть»",
                "Разогрей чашу 5–10 минут — потом регулируй жар",
                "Меняй угли каждые 40–50 минут для стабильной температуры"
            ]
        }
    ];

    return (
        <section className="work-coal">
            <div className="work-coal-container">
                <div className="work-coal-header">
                    <h1 className="work-coal-title">
                        <Flame className="title-icon" />
                        Работа с углями
                    </h1>
                    <p className="work-coal-subtitle">
                        Изучите основы правильного контроля жара для идеального кальяна
                    </p>
                </div>

                <div className="work-coal-content">
                    {coalData.map((section, index) => (
                        <div 
                            key={index} 
                            className={`work-coal-section ${expandedSections.includes(index) ? 'expanded' : ''}`}
                        >
                            <div 
                                className="work-coal-section-header"
                                onClick={() => toggleSection(index)}
                            >
                                <div className="section-title-wrapper">
                                    {section.icon}
                                    <h2 className="section-title">{section.title}</h2>
                                </div>
                                <div className="section-toggle">
                                    {expandedSections.includes(index) ? (
                                        <ChevronUp className="toggle-icon" />
                                    ) : (
                                        <ChevronDown className="toggle-icon" />
                                    )}
                                </div>
                            </div>

                            {expandedSections.includes(index) && (
                                <div className="work-coal-section-content">
                                    <div className="description-block">
                                        <h3>Основная информация</h3>
                                        <ul>
                                            {section.description.map((desc, descIndex) => (
                                                <li key={descIndex}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {section.tips && (
                                        <div className="tips-block">
                                            <h3>
                                                <CheckCircle className="block-icon" />
                                                Полезные советы
                                            </h3>
                                            <ul>
                                                {section.tips.map((tip, tipIndex) => (
                                                    <li key={tipIndex}>{tip}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {section.warnings && (
                                        <div className="warnings-block">
                                            <h3>
                                                <AlertTriangle className="block-icon" />
                                                Важные предупреждения
                                            </h3>
                                            <ul>
                                                {section.warnings.map((warning, warningIndex) => (
                                                    <li key={warningIndex}>{warning}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="work-coal-footer">
                    <div className="footer-tip">
                        <Flame className="footer-icon" />
                        <p>Помните: правильный контроль жара — это искусство, которое приходит с опытом!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkCoal; 