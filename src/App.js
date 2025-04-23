import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHookahList, fetchTabacoList } from "./redux/slices/dataSlice";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import HookahList from "./component/ComponentsNavBar/HookahList";
import Footer from "./component/Footer";
import Education from "./component/ComponentsNavBar/Education";
import Community from "./component/ComponentsNavBar/Comunity";
import AboutUs from "./component/ComponentsNavBar/AboutUs";
import HookahDetailPage from "./component/ComponentsNavBar/HookahDetailPage";
import Tabaco from "./component/ComponentsNavBar/Tabaco";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Загружаем оба списка при старте приложения
        dispatch(fetchHookahList());
        dispatch(fetchTabacoList());
    }, [dispatch]);

    return (
        <div className="layout">
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hookah-list" element={<HookahList />} />
                    <Route path="/hookah/:id" element={<HookahDetailPage />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/tabaco" element={<Tabaco />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;