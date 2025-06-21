import  { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
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
import TabacoPage from "./component/ComponentsNavBar/Tabaco";
import Auth from "./component/ComponentsNavBar/auth";
import PackingMethodsPage from "./component/ComponentsNavBar/PackingMethodsPage";
import MixFlavored from "./component/ComponentsNavBar/MixFlavored";
import WorkCoal from "./component/ComponentsNavBar/WorkCoal";
import ErrorBoundary from "./component/ErrorBoundary";
import "./App.scss";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Загружаем оба списка при старте приложения
        dispatch(fetchHookahList());
        dispatch(fetchTabacoList());
    }, [dispatch]);

    return (
        <ErrorBoundary>
            <div className="layout">
                <NavBar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hookah-list" element={<HookahList />} />
                        <Route path="/hookah/:id" element={<HookahDetailPage />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/education/packing" element={<PackingMethodsPage />} />
                        <Route path="/education/mix" element={<MixFlavored />} />
                        <Route path="/education/coal" element={<WorkCoal />} />
                        <Route path="/tabaco" element={<TabacoPage />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/aboutUs" element={<AboutUs />} />
                        <Route path="/auth" element={<Auth/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </ErrorBoundary>
    );
}

export default App;