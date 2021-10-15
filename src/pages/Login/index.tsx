import React from "react";
import { Form } from "react-bootstrap";

// Components Imports
import { RegisterForm } from "../../components/RegisterForm/";

// Styles Imports
import "./style.css";

export function Login() {
  return (
    <div className="loginBody">
      <div className="reg-container">
        <RegisterForm />
      </div>
      <div className="login-container">
        <Form className="col-6 form_login">
          <h2>Login</h2>
          <label htmlFor="nome">Seu e-mail</label>
          <input
            className="inputLogin"
            type="text"
            placeholder="user@email.com"
          />
          <label htmlFor="senha">Senha</label>
          <input
            className="inputLogin"
            type="password"
            placeholder="********"
          />
          <button className="buttonLogin">Entrar</button>
        </Form>
      </div>
    </div>
  );
}
