import React from "react";
import happyImg from "../../assets/images/happy.png";
import instagramImg from "../../assets/images/instagram-logo.png";
import gmailImg from "../../assets/images/gmail-logo.png";
import behanceImg from "../../assets/images/behance-logo.png";
import { FaTrashAlt } from "react-icons/fa";

import {
  Container,
  Header,
  Body,
  Footer,
  Imagem,
  Div,
  ContainerContact,
  ContainerHeader,
  DivContact,
  Button,
  ContainerButton,
} from "./styles";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";
import { useFiles } from "../../hooks/useFiles";

export function Home() {
  const { user } = useAuth();
  const {photos} = useFiles()


  function desableButton() {
    if (user && user.id === `${process.env.REACT_APP_APP_ID_GMAIL}`) {
      return true;
    }
    return false;
  }

  async function deletePhoto(id: string) {
    if (user && user.id === `${process.env.REACT_APP_APP_ID_GMAIL}`) {
      if (window.confirm("Tem certeza que deseja excluir essa foto?")) {
        await database.ref(`home/files/${id}`).remove();
      }
    }
  }

  return (
    <Container>
      <Header>
        <ContainerHeader>
          <h1 className="title">
            Oi vocês, seja bem vindo(a) ao meu mundo <img src={happyImg} />
          </h1>
        </ContainerHeader>
        <ContainerContact>
          Faça já seu orçamento:
          <DivContact>
            <a href="mailto:planetacsgc@gmail.com" target="_blank">
              <img src={gmailImg} alt="behance"/>
            </a>
            <a href="https://www.instagram.com/cstefanyart/" target="_blank">
              <img src={instagramImg} alt="instagram"/>
            </a>
            <a href="https://www.behance.net/cibellestefany" target="_blank">
              <img src={behanceImg} alt="gmail"/>
            </a>
          </DivContact>
        </ContainerContact>
      </Header>
      <Body>
        {photos.map((photo) => {
          return (
            <Div>
              <a href={photo.content} target="_blank">
                <Imagem src={photo.content} alt="imagem" />
              </a>
              <ContainerButton>
                <Button
                  onClick={() => deletePhoto(photo.id)}
                  disabled={desableButton() === false}
                >
                  {desableButton() ? <FaTrashAlt /> : ""}
                </Button>
              </ContainerButton>
            </Div>
          );
        })}
      </Body>
      <Footer>
        Projeto realizado por{" "}
        <a href="https://www.linkedin.com/in/ibsiany/" target="_blank">
          Ibsiany Dias
        </a>
      </Footer>
    </Container>
  );
}
