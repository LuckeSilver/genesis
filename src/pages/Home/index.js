import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import {FaWhatsapp } from "react-icons/fa";


import "./styles.css";
import Header from "../../components/Header";
import Topografia from "../../assets/topografia.png"
import Topografia2 from "../../assets/topografia2.png"
import Topografo3 from "../../assets/topografia3.png"
import LogoRedondo from "../../assets/logo-redondo.png"

import GIF from "../../assets/topografo.gif"

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Home() {
    return (
        <>
            <Header/>
            <div className="carrossel">
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={3000}
                >
                    <div className="slide"><img src={Topografia} alt="Cara1" /></div>
                    <div lassName="slide"><img src={Topografia2} alt="cara2" /></div>
                    <div lassName="slide"><img src={Topografo3} alt="Cara3" /></div>
                </AutoplaySlider>
            </div>

            <div className="mobile">
                <img id="logo" src={LogoRedondo} alt="Logo Redondo" />
                <h2>Excelência em serviços topográficos!</h2>
                    <a className="watshapp" href="https://api.whatsapp.com/send?phone=5521981343917&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!" target="blank">
                        <FaWhatsapp size={25} color="#fff" />
                        <p>Contacte-nos</p>
                    </a>
                <img src={GIF} alt="Aimação com topografo" />
            </div>
        </>
    );
}
