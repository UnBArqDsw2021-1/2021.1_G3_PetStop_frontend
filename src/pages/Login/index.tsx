import React from "react";
import { RegisterForm } from "../../components/RegisterForm/";
import { Form } from "react-bootstrap";
import "./style.css";

export function Login() {
  return (
    <div className="loginBody">
      <RegisterForm />
      <Form className="col-6 form_login">
        <h2>Login</h2>
        <label htmlFor="nome">Nome</label>
        <input className="inputLogin" type="text" />
        <label htmlFor="senha">Senha</label>
        <input className="inputLogin" type="text" />
        <button className="buttonLogin">Entrar</button>
      </Form>
    </div>
  );
}
