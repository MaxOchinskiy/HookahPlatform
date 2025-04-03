import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Home from "./component/Home";
import "./scss/styles.scss";
import HookahList from "./component/ComponentsNavBar/HookahList";
import Footer from "./component/Footer";
import Education from "./component/ComponentsNavBar/Education";
import Community from "./component/ComponentsNavBar/Comunity";

function App() {
    // Состояние для списка кальянных
    const [hookahList, setHookahList] = useState([]);

    // Загрузка данных из JSON
    useEffect(() => {
        fetch("/Hookah.json") // Загружаем JSON-файл
            .then((response) => response.json())
            .then((data) => setHookahList(data.hookah)) // Сохраняем массив кальянных
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, []);

    return (
        <div className="hero">
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<><Header /><Home /></>} />
                    <Route path="/hookah-list" element={<HookahList hookah={hookahList} />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/community" element={<Community />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;




