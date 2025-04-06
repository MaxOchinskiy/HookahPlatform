import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import HookahList from "./component/ComponentsNavBar/HookahList";
import Footer from "./component/Footer";
import Education from "./component/ComponentsNavBar/Education";
import Community from "./component/ComponentsNavBar/Comunity";
import AboutUs from "./component/ComponentsNavBar/AboutUs";
import HookahDetailPage from "./component/ComponentsNavBar/HookahDetaliPage";

function App() {
    const [hookahList, setHookahList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState(null);

    useEffect(() => {
        fetch("/Hookah.json")
            .then((response) => response.json())
            .then((data) => {
                setHookahList(data.hookah);
                setLoading(false);
            })

    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="layout">
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hookah-list" element={<HookahList hookah={hookahList} />} />
                    <Route path="/hookah/:id" element={<HookahDetailPage hookah={hookahList} />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;



