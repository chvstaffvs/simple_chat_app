import React from "react";
import { BorderWrapper } from "../../styles/styles";
import { Button, Form, Input, InputWrapper } from "./styles";
import { useHistory } from "react-router-dom";
import { assignClient } from "../../services/api";

function Login() {
  const history = useHistory();

  const enterChat = (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    console.log("assigning");
    assignClient(username);
    history.push(`/chat/${username}`);
  };

  return (
    <BorderWrapper>
      <Form onSubmit={(event) => enterChat(event)} className="form">
        <span className="text title">Login</span>
        <InputWrapper>
          <Input placeholder="Nome de Usuário" name="username" required />
        </InputWrapper>
        <Button>Entrar</Button>
      </Form>
    </BorderWrapper>
  );
}

export default Login;
