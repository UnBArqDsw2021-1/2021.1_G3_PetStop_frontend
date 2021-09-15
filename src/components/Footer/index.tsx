import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import "./styles.css";

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div>
          <h3>FALE CONOSCO</h3>
          <p>petstop@petstop.com</p>
          <p>(61) 91234-4321</p>
        </div>
        <div>
          <h3>MAPA DO SITE</h3>
          <a href="#">Eventos</a>
          <a href="#">Doações</a>
          <a href="#">Adoções</a>
          <a href="#">Seja um voluntário</a>
        </div>
        <div>
          <h3>SIGA-NOS NAS REDES SOCIAIS</h3>
          <div className="social-container">
            <a href="#">
              <AiOutlineInstagram size={35} color="var(--blue-light)" />
            </a>
            <a href="#">
              <AiOutlineTwitter size={35} color="var(--blue-light)" />
            </a>
            <a href="#">
              <AiFillLinkedin size={35} color="var(--blue-light)" />
            </a>
            <a href="#">
              <AiOutlineWhatsApp size={35} color="var(--blue-light)" />
            </a>
          </div>
        </div>
      </div>
      <div className="rights-reserved">
        <p>Todos os direitos reservados - 2021</p>
      </div>
    </div>
  );
}
