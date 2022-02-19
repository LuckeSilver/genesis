import React from "react";
import Lottie from "react-lottie";

import "./styles.css";

import contato from "../../assets/contato.json";

export default function Animation() {
  const defaultOptions = {
    title: "about",
    loop: true,
    autoplay: true,
    animationData: contato,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="animationContainer2">
      <Lottie options={defaultOptions} />
    </div>
  );
}
