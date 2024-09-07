import styled from "styled-components";

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 100px;
  left: 0;
  width: calc(100vw - 80px);
  height: calc(100vh - 140px);
  padding: 0 40px 40px 40px;
  background-color: #fafafa;
  overflow-y: scroll; /* 필요 시 사용 가능 */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h2`
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
  gap: 10px;
`;

export const ImageInput = styled.input`
  width: calc(290px - 20px);
  height: calc(45px - 20px);
  background-color: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 10px;
`;

export const FileSelectButton = styled.button`
  width: 100px;
  height: 45px;
  background-color: #fafafa;
  color: #282828;
  border: solid 1px #282828;
  border-radius: 6px;
  cursor: pointer;
`;

export const Textarea = styled.textarea`
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
  background-color: ${({ $isOn }) => ($isOn ? "#a7a6a6" : "#282828")};
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
  left: ${({ $isOn }) => ($isOn ? "calc(100% - 22px)" : "2px")};
  transition: left 0.3s;
`;

export const SwitchLabel = styled.span`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.53px;
  letter-spacing: -0.03em;
`;

export const SubmitButton = styled.button`
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
