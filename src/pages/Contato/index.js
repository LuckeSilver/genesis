import React from "react";

import "./styles.css";

import Animation from "../../components/Animation";
import Header from "../../components/Header";
import SocialMedias from "../../components/SocialMedias";
import LogoRedondo from "../../assets/logo-redondo.png"

export default function Contact() {
    return (
    <>
      <Header />
      <div className="contact-container">
        <div className="logo">
          <img src={LogoRedondo} alt="logo" />
        </div>
        
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <div className="titles">
            <h1>DIGA OLÁ!</h1>
            <div className="contactSubTitle">
              <hr />
              <h2>CONTACTE-NOS</h2>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input name="nome" required />
                <span className="text">Seu nome</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox">
                <input name="email" type="email" required />
                <span className="text">Seu e-mail</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <div className="inputBox boxArea textarea">
                  <textarea name="mensagem" cols="30" />
                  <span className="text">Sua mensagem</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <input type="submit" value="SEND MESSAGE" />
              </div>
            </div>
          </div>
          <div className="medias">
            <SocialMedias />
          </div>
        </form>
        <div className="medias"></div>
        <div className="animation">
          <Animation />
        </div>
      </div>
    </>
  );
}
