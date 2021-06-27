import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useState } from "react";

type IPhotos = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
};

type FirebaseFiles = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

export function Home() {
  const { user } = useAuth();
  const [photos, setPhotos] = useState<IPhotos[]>([]);

  useEffect(() => {
    const fileRef = database.ref(`home`);

    fileRef.on("value", (file) => {
      const data = file.val();

      const firebaseFiles: FirebaseFiles = data.files ?? {};

      const parsedFiles = Object.entries(firebaseFiles).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
        };
      });

      setPhotos(parsedFiles);
    });

    return () => {
      fileRef.off("value");
    };
  }, [user?.id]);

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
            <Link to="https://www.instagram.com/planetate.rra/" target="_blank">
              <img src={instagramImg} />
            </Link>
            <Link to="https://www.behance.net/cibellestefany" target="_blank">
              <img src={gmailImg} />
            </Link>
            <Link to="mailto:planetacsgc@gmail.com" target="_blank">
              <img src={behanceImg} />
            </Link>
          </DivContact>
        </ContainerContact>
      </Header>
      <Body>
        {photos.map((photo) => {
          return (
            <Div>
              <Imagem src={photo.content} alt="imagem" />
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
