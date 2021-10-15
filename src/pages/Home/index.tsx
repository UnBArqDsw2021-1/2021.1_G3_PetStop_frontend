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

  function RecommendationList(prop: DataProps[]): JSX.Element[] {
    const listItems: JSX.Element[] = prop.map(
      (item: DataProps, index: number) => (
        <div className="recommendation-cart" key={"recommendation" + index}>
          <img
            className="recommendation-img"
            src={"data:image/png;base64, " + item.image}
            alt="event-image"
          />
          <h2>{item.title}</h2>
          {!!item.date && <p>{item.date}</p>}
          <p>{item.descricao}</p>
        </div>
      )
    );
    return listItems;
  }

  return (
    <div className="container">
      <div className="top-container">
        <div className="about-us">
          <h2>Nossa Missão</h2>
          <p>
            Desenvolver e executar ações para a promoção da convivência ética,
            responsável e sustentável entre as pessoas, os animais e o meio
            ambiente.
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
      <div className="bottom-container">
        {RecommendationList(recommendation)}
      </div>
    </div>
  );
}
