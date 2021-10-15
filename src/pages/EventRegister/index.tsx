import React from "react";
import { Form } from "react-bootstrap";

// Styles Imports
import "../Login/style.css";

export function RegisterEvent() {
  return (
    <div className="loginBody">
      <Form className="col-12 form_login">
        <h2>Cadastro de Eventos</h2>
        <label htmlFor="local">Local</label>
        <input className="inputLogin" type="text" required />
        <label htmlFor="senha">Data</label>
        <input
          className="inputLogin"
          type="datetime"
          placeholder="dd/mm/aaaa"
          required
        />
        <label htmlFor="time">Horário</label>
        <input
          className="inputLogin"
          type="text"
          placeholder="hh:mm"
          required
        />
        <label htmlFor="descricao">Descrição</label>
        <textarea className="inputText" rows={5} cols={30} />
        <label htmlFor="descricao">Imagem</label>
        <input type="text" className="inputLogin" placeholder="url" required />
        <button className="buttonLogin">Criar Evento</button>
      </Form>
    </div>
  );
}
