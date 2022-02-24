import React from "react";

import {FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./styles.css";

export default function SocialMedias() {
  return (
    <>
      <div className="socialMedias">
        <a
          href="https://www.linkedin.com/"
          target="blank"
        >
          <FaLinkedin size={50} color="#c68c2c" />
        </a>
        <a href="https://www.instagram.com//" target="blank">
          <FaInstagram size={50} color="#c68c2c" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5521981343917&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!" target="blank">
          <FaWhatsapp size={50} color="#c68c2c" />
        </a>
      </div>
      <div className="row">
        <hr />
        <h2>Social Medias</h2>
      </div>
    </>
  );
}
