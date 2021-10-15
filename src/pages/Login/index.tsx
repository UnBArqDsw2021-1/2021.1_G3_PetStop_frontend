import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// Components Imports
import { RegisterForm } from "../../components/RegisterForm/";
import { useAuth } from "../../hooks/useAuth";

// Styles Imports
import "./style.css";

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn(email, pass);
      alert("Login realizado com sucesso");
      history.push("/");
    } catch {
      alert("Erro ao realizar login, favor tentar novamente.");
    }
  }

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="senha">Senha</label>
          <input
            className="inputLogin"
            type="password"
            placeholder="********"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            className="buttonLogin"
            onClick={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
          >
            Entrar
          </button>
        </Form>
      </div>
    </div>
  );
}
