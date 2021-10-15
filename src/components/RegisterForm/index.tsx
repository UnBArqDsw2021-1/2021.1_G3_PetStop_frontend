import React from "react";
import "./styles.css";
import { Form } from "react-bootstrap";

export function RegisterForm() {
  return (
    <Form className="w-100 form_register">
      <h2>Cadastro</h2>
      <label htmlFor="nome">Nome</label>
      <input className="inputReg" type="text" />
      <label htmlFor="sobrenome">Sobrenome</label>
      <input className="inputReg" type="text" />
      <label htmlFor="email">E-mail</label>
      <input className="inputReg" type="email" placeholder="user@email.com" />
      <label htmlFor="senha">Senha</label>
      <input className="inputReg" type="password" placeholder="******" />
      <label htmlFor="senha">Confirme Sua Senha</label>
      <input className="inputReg" type="password" placeholder="******" />
      <button className="buttonReg">Cadastrar-se</button>
    </Form>
  );
}
