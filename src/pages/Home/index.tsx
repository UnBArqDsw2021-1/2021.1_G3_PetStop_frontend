import React, { useEffect, useState } from "react";
import "./styles.css";

import imgTestimony from "../../assets/img22.jpg";

export function Home() {
  interface DataProps {
    title: string;
    date: string;
    descricao: string;
    image: string;
  }

  const [recommendation, setRecommendation] = useState<DataProps[]>(
    require("./data.json")
  );

  useEffect(() => {
    setRecommendation(require("./data.json"));
  }, []);

  return (
    <div className="container">
      <div className="top-container">
        <div className="about-us">
          <h2>Nossa Missão</h2>
          <p>
            Desenvolver e executar ações para a<br />
            promoção da convivência ética,
            <br />
            responsável e sustentável entre as pessoas,
            <br />
            os animais e o meio ambiente.
          </p>
          <button className="about-us-buttom">
            <h3>Saiba mais</h3>
          </button>
        </div>
        <div className="card">
          <div className="card-title">Depoimentos</div>
          <div className="row">
            <img id="img-testimony" src={imgTestimony} alt="Imagem depoimeto" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Quem Somos</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it tomake a type specimen book. It has survived
            not only five centuries, but also the leap has survived not only
            five centuries ...
          </p>
        </div>
      </div>
      <div className="bottom-container">RECOMENDACOES</div>
    </div>
  );
}
