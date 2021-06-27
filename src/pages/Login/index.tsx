import React, { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Container, Button, Div } from "./styles";
import googleIconImg from "../../assets/images/google-icon.svg";

export function Login() {
  const { sigInWithGoogle, user } = useAuth();
  const history = useHistory();

  async function hangleLogin() {
    if (!user) {
      await sigInWithGoogle();

      console.log(user)
    }

    history.push("/create-8789654");
  }

  return (
    <main>
      <Container>
        <Div>
          <Button onClick={hangleLogin} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Entre com a sua conta Google
          </Button>
        </Div>
      </Container>
    </main>
  );
}
