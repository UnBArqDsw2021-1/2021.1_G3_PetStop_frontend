import React from "react";
import "./styles.css";
import { Form } from "react-bootstrap";

export function RegisterForm() {
  return (
    <div className="row">
      <Form className="col-6">
        <label htmlFor="nome">Nome</label>
        <input type="text" />
        <label htmlFor="sobrenome">Sobrenome</label>
        <input type="text" />
        <label htmlFor="sobrenome">E-mail</label>
        <input type="email" />
        <label htmlFor="sobrenome">Senha</label>
        <input type="text" />
      </Form>
    </div>
  );
}
