import styled from "styled-components";

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

export const ModalContent = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ModalTitle = styled.h2`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30.05px;
  letter-spacing: -0.03em;
  text-align: center;
  margin-top: 0;
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

export const ModalLabel = styled.label`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.03em;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const ModalInput = styled.input`
  width: calc(400px - 20px);
  height: calc(45px - 20px);
  padding: 10px;
  background-color: #fafafa;
  border: 1px solid #282828;
  border-radius: 5px;
  margin: 0;
`;

export const ImageUpload = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 939px;
  left: 760px;
`;

export const ImageInput = styled.input`
  position: absolute;
  width: 290px;
  height: 45px;
  top: calc(939px / 879 * 100%);
  left: calc(760px / 480 * 100%);
  background-color: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
`;

export const FileSelectButton = styled.button`
  position: absolute;
  width: 100px;
  height: 45px;
  top: calc(939px / 879 * 100%);
  left: calc(1060px / 480 * 100%);
  background-color: #282828;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const ModalTextarea = styled.textarea`
  width: calc(400px - 20px);
  height: calc(120px - 20px);
  padding: 10px;
  background-color: #fafafa;
  border: 1px solid #282828;
  border-radius: 6px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Switch = styled.div`
  width: 48px;
  height: 24px;
  background-color: ${({ isOn }) => (isOn ? "#a7a6a6" : "#282828")};
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const SwitchCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ isOn }) => (isOn ? "calc(100% - 22px)" : "2px")};
  transition: left 0.3s;
`;

export const SwitchLabel = styled.span`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.53px;
  letter-spacing: -0.03em;
`;

export const EditSubmitButton = styled.button`
  width: 400px;
  height: 50px;
  background-color: #282828;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
`;

export const EditSuccessMessage = styled.p`
  color: green;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;
