import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";


export default function MainRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/projetos" element={<Projetos/>} />
            <Route path="/contato" element={<Contato/>} />
        </Routes>
    );
}
