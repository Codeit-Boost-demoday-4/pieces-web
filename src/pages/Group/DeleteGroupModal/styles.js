import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const DeleteModalContent = styled.div`
  background-color: #FAFAFA;
  border-radius: 6px;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DeleteModalTitle = styled.h2`
  width: 100%;
  height: 30px;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #282828;
  text-align: center;
  margin: 0 auto;
  line-height: 30px;
  white-space: nowrap;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeleteModalLabel = styled.label`
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #282828;
  margin-bottom: 10px;
`;

export const DeleteModalInput = styled.input`
  width: 400px;
  height: 45px;
  background-color: #FAFAFA;
  border: 1px solid #DDDDDD;
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
`;

export const DeleteSubmitButton = styled.button`
  width: 400px;
  height: 50px;
  background-color: #282828;
  color: #FFFFFF;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;
