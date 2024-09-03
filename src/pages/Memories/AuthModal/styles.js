import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
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
  //justify-content: center;
  z-index: 999;

  span {
    margin-top: 40px;
    font-family: Spoqa Han Sans Neo;
    font-size: 24px;
    font-weight: 700;
    line-height: 30.05px;
    letter-spacing: -0.03em;
    text-align: center;
    color: #282828;
  }

  label {
    margin: 40px 0 10px 40px;
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 500;
    line-height: 20.03px;
    letter-spacing: -0.03em;
    text-align: left;
  }

  input {
    margin: 0 40px 40px 40px;
    height: 45px;
    padding: 0 20px;
    border: solid 1px #dddddd;
    border-radius: 5px;
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
  position: absolute;
  bottom: 40px;
  border-radius: 5px;
  background-color: #282828;
  color: white;
  margin: 0 40px;
  font-size: 16px;
`;
