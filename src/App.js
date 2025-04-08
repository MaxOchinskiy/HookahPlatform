import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import HookahList from "./component/ComponentsNavBar/HookahList";
import Footer from "./component/Footer";
import Education from "./component/ComponentsNavBar/Education";
import Community from "./component/ComponentsNavBar/Comunity";
import AboutUs from "./component/ComponentsNavBar/AboutUs";
import HookahDetailPage from "./component/ComponentsNavBar/HookahDetailPage";
import preload from "./Image/preloader.svg";
import Tabaco from "./component/ComponentsNavBar/Tabaco";

function App() {
    const [hookahList, setHookahList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://67f4eef9913986b16fa26cac.mockapi.io/hookah")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка загрузки данных");
                }
                return response.json();
            })
            .then((data) => {
                setHookahList(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <img className="loading" src={preload} alt="loading" />;
    if (error) return <div className="error">Ошибка: {error}</div>;

    return (
        <div className="layout">
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hookah-list" element={<HookahList hookah={hookahList} />} />
                    <Route path="/hookah/:id" element={<HookahDetailPage hookah={hookahList} />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/tabaco" element={<Tabaco />}/>
                    <Route path="/community" element={<Community />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;

