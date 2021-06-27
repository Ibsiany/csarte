import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import happyImg from "../../assets/images/happy.png";
import instagramImg from "../../assets/images/instagram-logo.png";
import gmailImg from "../../assets/images/gmail-logo.png";
import behanceImg from "../../assets/images/behance-logo.png";

import {
  Container,
  Header,
  Body,
  Footer,
  Imagem,
  Div,
  ContainerContact,
  ContainerHeader,
  DivContact
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

      const parsedQuestions = Object.entries(firebaseFiles).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
          };
        }
      );

      console.log(parsedQuestions);
      setPhotos(parsedQuestions);
    });

    return () => {
      fileRef.off("value");
    };
  }, [user?.id]);

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
            </Div>
          );
        })}
      </Body>
      <Footer>Projeto realizado por <a href="https://www.linkedin.com/in/ibsiany/" target="_blank">Ibsiany Dias</a></Footer>
    </Container>
  );
}
