import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.header`
  background-color: #f6f0c4;
  background-image: linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%);
  color: black;

  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5rem;
  width: 100vw;

  position: fixed;

  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
`;

export const Input = styled.input`
  color: black;
  padding: 0.5rem;
  width: 45rem;
`;

export const Button = styled.button`
  border: 1.5px solid #0f0f0f;
  border-radius: 0.25rem;
  background: #f0f0f0;
  padding: 0.3rem;
`;

export const Body = styled.body`
  background-color: #0cbaba;
  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);

  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 7.5rem;
`;
