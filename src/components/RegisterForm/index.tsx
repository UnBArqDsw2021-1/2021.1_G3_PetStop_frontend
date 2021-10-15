import React, { useState } from "react";
import "./styles.css";
import { Form } from "react-bootstrap";

// Utils Imports
import { signUp } from "../../services/auth";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  async function handleSignUp() {
    const user = {
      name,
      email,
      password,
      description: "Descrição de teste.",
    };

    try {
      await signUp(user);

      alert("Usuário criado com sucesso.");
      setName("");
      setEmail("");
      setPass("");
      setPassConfirm("");
    } catch {
      alert("Erro ao realizar o cadstro favor tentar novamente.");
    }
  }

  return (
    <Form className="w-100 form_register">
      <h2>Cadastro</h2>
      <label htmlFor="nome">Nome</label>
      <input
        className="inputReg"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label htmlFor="email">E-mail</label>
      <input
        className="inputReg"
        type="email"
        placeholder="user@email.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="senha">Senha</label>
      <input
        className="inputReg"
        type="password"
        placeholder="******"
        onChange={(e) => setPass(e.target.value)}
        value={password}
      />
      <label htmlFor="senha">Confirme Sua Senha</label>
      <input
        className="inputReg"
        type="password"
        placeholder="******"
        value={passConfirm}
        onChange={(e) => setPassConfirm(e.target.value)}
      />
      <button
        className="buttonReg"
        onClick={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        Cadastrar-se
      </button>
    </Form>
  );
}
