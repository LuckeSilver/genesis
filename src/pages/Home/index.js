import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import "./styles.css";
import Header from "../../components/Header";
import Topografia from "../../assets/topografia.png"
import Topografia2 from "../../assets/topografia2.png"
import Topografo3 from "../../assets/topografia3.png"

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
        </>
    );
}
