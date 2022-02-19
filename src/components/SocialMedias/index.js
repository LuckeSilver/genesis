import React from "react";

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
        <a href="tel:+55021981343917" target="blank">
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
