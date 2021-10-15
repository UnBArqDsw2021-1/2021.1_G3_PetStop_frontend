import React, { useState } from "react";

import "./styles.css";

interface Evento {
  id: number;
  local: string;
  picture: string;
  description: string;
  date: string;
  time: string;
}

export function Eventos() {
  const [events] = useState<Evento[]>([
    {
      id: 1,
      local: "Parque da Cidade",
      picture:
        "https://jundiai.sp.gov.br/noticias/wp-content/uploads/sites/32/2019/10/parque-da-cidade-1280x853.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "10/10/2010",
      time: "10h10m",
    },
    {
      id: 2,
      local: "Parque da Cidade",
      picture:
        "https://jundiai.sp.gov.br/noticias/wp-content/uploads/sites/32/2019/10/parque-da-cidade-1280x853.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "10/10/2010",
      time: "10h10m",
    },
    {
      id: 3,
      local: "Parque da Cidade",
      picture:
        "https://jundiai.sp.gov.br/noticias/wp-content/uploads/sites/32/2019/10/parque-da-cidade-1280x853.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "10/10/2010",
      time: "10h10m",
    },
    {
      id: 4,
      local: "Parque da Cidade",
      picture:
        "https://jundiai.sp.gov.br/noticias/wp-content/uploads/sites/32/2019/10/parque-da-cidade-1280x853.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "10/10/2010",
      time: "10h10m",
    },
    {
      id: 5,
      local: "Parque da Cidade",
      picture:
        "https://jundiai.sp.gov.br/noticias/wp-content/uploads/sites/32/2019/10/parque-da-cidade-1280x853.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "10/10/2010",
      time: "10h10m",
    },
  ]);

  return (
    <div className="events-page">
      <div className="events-container">
        <h1>NOSSOS EVENTOS</h1>
        <div className="events-list">
          {events.map((eventItem) => (
            <div className="event-item" key={eventItem.id}>
              <img
                className="event-pic"
                src={eventItem.picture}
                alt={`Foto da localização ${eventItem.local}`}
              />
              <div className="text-container">
                <h4 className="event-local">{eventItem.local}</h4>
                <p className="event-time">
                  Data: {eventItem.date} - Hora: {eventItem.time}
                </p>
                <p className="event-description">{eventItem.description}</p>
              </div>
              <button className="join-btn">PARTICIPAR</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
