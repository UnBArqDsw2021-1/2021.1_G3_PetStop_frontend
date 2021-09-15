import React from "react";
import { BiUserCircle } from "react-icons/bi";

import imgLogo from "../../assets/logo.png";

import "./styles.css";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <a
          href="/"
          style={{
            filter: "brightness(1)",
          }}
        >
          <img src={imgLogo} alt="Logo Petstop" className="logo" />
        </a>
        <nav>
          <a href="#">Eventos</a>
          <a href="#">Doações</a>
          <a href="#">Adoções</a>
          <a href="#">Seja um voluntário</a>
        </nav>
        <div className="login-container">
          <BiUserCircle size={50} color="var(--blue-light)" />
          <a href="#">
            Olá, Entre
            <br />
            ou cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
}
