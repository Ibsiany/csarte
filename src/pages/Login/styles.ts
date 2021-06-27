import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #a4508b;
background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);

`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 3rem;
  border-radius: 8px;
  font-weight: 500;
  background: #ea4335;
  color: #fff;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
