import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Home from "./component/Home";
import Education from "./component/ComponentsNavBar/Education";
import "./scss/styles.scss";
import HookahList from "./component/ComponentsNavBar/HookahList";
import Footer from "./component/Footer";

function App() {
    return (<div className="hero">
            <NavBar />
            <div className={"container"}>
            <Routes>
                <Route path="/" element={<><Header /><Home /></>} />
                <Route path="/hookah-list" element={<HookahList />} />
                <Route path="/education" element={<Education />} />
            </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;



