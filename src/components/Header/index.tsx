import React from "react";
import { BiUserCircle } from "react-icons/bi";

import imgLogo from "../../assets/logo.png";

import { useAuth } from "../../hooks/useAuth";

import "./styles.css";

export function Header() {
  const { signedIn } = useAuth();

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
          <a href="/events">Eventos</a>
          <a href="#">Doações</a>
          <a href="#">Adoções</a>
          <a href="#">Seja um voluntário</a>
        </nav>
        {signedIn ? (
          <a href="#">Meu Perfil</a>
        ) : (
          <div className="login-container">
            <BiUserCircle size={50} color="var(--blue-light)" />
            <a href="/auth">
              Olá, Entre
              <br />
              ou cadastre-se
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
