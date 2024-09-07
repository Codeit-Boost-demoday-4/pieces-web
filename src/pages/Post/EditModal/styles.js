import styled from "styled-components";

export const ModalWrapper = styled.div`
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
  align-items: center;
  gap: 30px;

  .title {
    margin-bottom: 20px;
    font-family: Spoqa Han Sans Neo;
    font-size: 24px;
    font-weight: 700;
    line-height: 30.05px;
    letter-spacing: -0.03em;
    text-align: center;
    color: #282828;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  .content {
    display: flex;
    flex-direction: column;
    margin: 0 40px;
  }
`;

export const Label = styled.label`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #282828;
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 45px;
  background: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 30px;

  &.image {
    width: 290px;
  }

  &.tag {
    margin-bottom: 10px;
  }
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 400px;
  height: 120px;
  background: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 10px;
  font-size: 14px;
  resize: none;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 6px;
  background-color: #282828;
  color: white;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #4a4a4a;
  }
`;

export const Logo = styled.img`
  width: 137px;
  height: 48px;
`;

export const FileSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FileSelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 45px;
  margin-left: 10px;
  background-color: white;
  border: solid 1px black;
  border-radius: 5px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const TagItem = styled.span`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  border: none;
  color: #8d8d8d;
  padding: 0 3px;
  height: 18px;
`;

export const TagText = styled.span`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #282828;
  margin-right: 5px;
`;

export const DeleteIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

export const ToggleText = styled.span`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #282828;
  margin-right: 10px;
  width: 40px;
`;

export const ToggleSwitch = styled.div`
  width: 48px;
  height: 24px;
  background-color: ${({ $isPublic }) => ($isPublic ? "#282828" : "#dddddd")};
  border-radius: 13px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1px;
  transition: background-color 0.3s ease;
`;

export const SwitchHandle = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  transition: transform 0.3s ease;
  transform: ${({ $isPublic }) =>
    $isPublic ? "translateX(0)" : "translateX(24px)"};
`;
