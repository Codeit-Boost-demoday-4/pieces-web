import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`;

export const Modal = styled.div`
  position: relative;
  width: 480px;
  height: 335px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  z-index: 999;

  span {
    font-family: Spoqa Han Sans Neo;
    font-size: 24px;
    font-weight: 700;
    line-height: 30.05px;
    letter-spacing: -0.03em;
    text-align: center;
    color: #282828;
  }

  input {
    margin: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
`;

export const Button = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 5px;
  background-color: #282828;
  color: white;
`;
