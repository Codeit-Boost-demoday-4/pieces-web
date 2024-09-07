import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  CloseButton,
  Container,
  ModalLabel,
  ModalInput,
  ImageUpload,
  ImageInput,
  FileSelectButton,
  ModalTextarea,
  SwitchContainer,
  Switch,
  SwitchCircle,
  SwitchLabel,
  EditSubmitButton,
  EditSuccessMessage,
} from "./styles.js";
import api from "../../../api.js"; // axios 인스턴스
import closeButton from "../../../assets/close-button.svg";

const UpdateGroupModal = ({ handleCloseModal }) => {
  const { groupId } = useParams();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // 현재 선택된 이미지 URL
  const [originalImageUrl, setOriginalImageUrl] = useState(""); // 초기 이미지 URL
  const [isPublic, setIsPublic] = useState(true);
  const [introduction, setIntroduction] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchGroupInfo = async () => {
      try {
        const response = await api.get(`/api/groups/${groupId}`);
        if (response.status === 200) {
          const groupData = response.data;
          setName(groupData.name || "");
          setOriginalImageUrl(groupData.imageUrl || ""); // 초기 이미지 URL 저장
          setImageUrl(groupData.imageUrl || ""); // 현재 이미지 URL 설정
          setIsPublic(groupData.isPublic);
          setIntroduction(groupData.introduction || "");
          setIsSwitchOn(groupData.isPublic);
        } else {
          throw new Error("Failed to fetch group data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchGroupInfo();
  }, [groupId]);

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

  const handleEditSubmit = async () => {
    setIsLoading(true);
    try {
      const groupData = {
        name: name || undefined, // 이름이 비어있으면 undefined로 설정
        password: password || undefined, // 비밀번호가 비어있으면 undefined로 설정
        imageUrl: imageUrl === originalImageUrl ? originalImageUrl : imageUrl, // 이미지 URL이 변경되지 않은 경우 원래 URL 사용
        isPublic: isPublic, // 공개 여부
        introduction: introduction || undefined, // 소개가 비어있으면 undefined로 설정
      };

      const response = await api.put(`/api/groups/${groupId}`, groupData);

      if (response.status === 200 || response.status === 201) {
        alert("그룹 정보가 성공적으로 수정되었습니다!");
        handleCloseModal();
      } else {
        throw new Error(response.data.message || "Failed");
      }
    } catch (error) {
      console.error(error);
      alert("수정에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalOverlay onClick={handleCloseModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>그룹 정보 수정</ModalTitle>

        <CloseButton onClick={handleCloseModal}>
          <img src={closeButton} alt="닫기" width={30} height={30} />
        </CloseButton>

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
          <ModalTextarea
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            placeholder="그룹을 소개해 주세요"
          />
        </Container>

        <Container>
          <ModalLabel>그룹 공개 선택</ModalLabel>
          <SwitchContainer onClick={handleSwitchToggle}>
            <Switch isOn={isSwitchOn}>
              <SwitchCircle isOn={isSwitchOn} />
            </Switch>
            <SwitchLabel>{isSwitchOn ? "공개" : "비공개"}</SwitchLabel>
          </SwitchContainer>
        </Container>

        <Container>
          <ModalLabel>수정 권한 인증</ModalLabel>
          <ModalInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해 주세요"
          />
        </Container>

        <EditSubmitButton onClick={handleEditSubmit}>
          {isLoading ? "수정 중..." : "수정하기"}
        </EditSubmitButton>

        {isEditSuccess && (
          <EditSuccessMessage>수정이 완료되었습니다!</EditSuccessMessage>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default UpdateGroupModal;
