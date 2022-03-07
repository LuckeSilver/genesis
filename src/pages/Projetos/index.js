import React from "react";
import Header from "../../components/Header";
import Cards from "../../components/Cards";

import "./styles.css"

export default function Sobre() {
    return (
        <>
            <div className="teste">
                <Header/>
            </div>
            <div className="container-project">
                <h1 className="title-project">
                    Nossos Serviços
                </h1>
                <Cards/>
            </div>
        </>
    );
}
