import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api.js"; // axios 인스턴스
import {
  HomeLayout,
  Content,
  Title,
  Container,
  ModalLabel,
  ModalInput,
  ImageUpload,
  ImageInput,
  FileSelectButton,
  Textarea,
  SwitchContainer,
  Switch,
  SwitchCircle,
  SwitchLabel,
  SubmitButton,
} from "./styles.js";
import { LogoTopBar } from "../../../components/LogoTopBar/index.js";

const MakeGroup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [introduction, setIntroduction] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImageUrl(fileUrl);
    }
  };

  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn);
    setIsPublic((prev) => !prev);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const groupData = {
        name,
        password,
        imageUrl,
        isPublic,
        introduction,
      };

      const response = await api.post(`/api/groups`, groupData);

      if (response.status === 200 || response.status === 201) {
        alert("그룹이 성공적으로 생성되었습니다!");
        navigate("/");
      } else {
        throw new Error(response.data.message || "Failed");
      }
    } catch (error) {
      console.error(error);
      alert("생성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <LogoTopBar />
      <HomeLayout>
        <Content onClick={(e) => e.stopPropagation()}>
          <Title>그룹 만들기</Title>

          <Container>
            <ModalLabel>그룹명</ModalLabel>
            <ModalInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="그룹명을 입력해 주세요"
            />
          </Container>

          <Container>
            <ModalLabel>대표 이미지</ModalLabel>
            <ImageUpload>
              <ImageInput
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
              />
              <FileSelectButton onClick={() => fileInputRef.current.click()}>
                파일 선택
              </FileSelectButton>
            </ImageUpload>
          </Container>

          <Container>
            <ModalLabel>그룹 소개</ModalLabel>
            <Textarea
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              placeholder="그룹을 소개해 주세요"
            />
          </Container>

          <Container>
            <ModalLabel>그룹 공개 선택</ModalLabel>
            <SwitchContainer onClick={handleSwitchToggle}>
              <SwitchLabel>{isSwitchOn ? "공개" : "비공개"}</SwitchLabel>
              <Switch $isOn={isSwitchOn}>
                <SwitchCircle $isOn={isSwitchOn} />
              </Switch>
            </SwitchContainer>
          </Container>

          <Container>
            <ModalLabel>비밀번호 생성</ModalLabel>
            <ModalInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해 주세요"
            />
          </Container>

          <SubmitButton onClick={handleSubmit}>
            {isLoading ? "생성 중..." : "만들기"}
          </SubmitButton>
        </Content>
      </HomeLayout>
    </>
  );
};

export default MakeGroup;
