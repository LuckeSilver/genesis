import React from 'react';
import { Link } from "react-router-dom";
import {
    SiGmail,
    SiWhatsapp
} from "react-icons/si"

import Logo from "../../assets/logo-redondo.png"

import "./styles.css"

export default function Header() {
    return (
        <>
            <header>
                <section className="contatos">
                    <div className="contato">
                        <p><SiGmail className="whatsapp email" size={20} color="white"/> Email@email.com</p>
                        <a href="tel:+55021981343917" target="blank">
                            <p><SiWhatsapp className="whatsapp" size={20} color="white"/>(21)98134-3917</p>
                        </a>
                    </div>
                </section>
                <nav className="menu">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="logo escrito gênesis topografia" />
                        </Link>
                    </div>
                    <div className="navigation">
                        <Link className="linkMenu" to="/">
                            Home
                        </Link>
                        <Link className="linkMenu" to="/sobre">
                            Sobre
                        </Link>
                        <Link className="linkMenu" to="/projetos">
                            Projetos
                        </Link>
                        <Link className="linkMenu" to="/contato">
                            Contato
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
}