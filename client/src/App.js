import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage/index";
import HealthPage from "./screens/Health/HealthPage";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HealthPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />


            </Routes>
        </BrowserRouter>
    );
};

export default App;