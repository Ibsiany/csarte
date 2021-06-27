import { useState } from "react";
import { database } from "../../services/firebase";
import { Container, Input, Header, Body, Button } from "./styles";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

export function Create() {
  const { user } = useAuth();
  const [value, setValue] = useState('');

  async function createFile() {
    if (user && user.id === `${process.env.REACT_APP_APP_ID_GMAIL}`) {
      const card = {
        content: value,
        author: {
          name: user?.name,
          avatar: user?.avatar,
        },
      };

      await database.ref(`home/files`).push(card);
      setValue('');
      toast.success("Arquivo salvo com sucesso.");
    }
    toast.error("Você não tem permissão para executar essa função.");
    setValue('');
  }

  console.log(user)

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <Header>
        <h1> Cadastro de fotos </h1>
      </Header>
      <Body>
        <Input type="text" onChange={(event) => setValue(event.target.value)} value={value}/>
        <Button onClick={createFile}>Cadastrar URL da foto</Button>
      </Body>
    </Container>
  );
}
