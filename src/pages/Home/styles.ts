import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
  opacity: 0.7;
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 6.5rem;
  width: 100vw;

  position: fixed;

  font-family: "Poppins", sans-serif;
  color: black;
  font-size: 0.8rem;

  img {
    margin-bottom: -0.4rem;
  }
`;

export const Body = styled.body`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #21d190;
  background-image: linear-gradient(315deg, #21d190 0%, #d65bca 74%);
  padding-top: 7.5rem;
  padding-bottom: 1rem;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  width: 70%;
`;

export const ContainerContact = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
`;

export const DivContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 2rem;
    max-height: 2rem;
    margin-left: 0.5rem;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Imagem = styled.img`
  background: transparent;
  max-width: 40%;
  max-height: 40%;
  width: auto;
  height: auto;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  background: gray;
  width: 100vw;

  a{
    color: blue;
    padding-left: 0.5rem;
    text-decoration: underline
  }
`;
