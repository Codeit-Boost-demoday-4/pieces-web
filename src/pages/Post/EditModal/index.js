import React, { useState, useRef } from "react";
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  Content,
  Label,
  Input,
  TextArea,
  Button,
  FileSelectContainer,
  FileSelectButton,
  TagList,
  TagItem,
  TagText,
  DeleteIcon,
  ToggleContainer,
  ToggleWrapper,
  ToggleText,
  ToggleSwitch,
  SwitchHandle,
} from "./styles.js";
import closeButton from "../../../assets/close-button.svg";
//import deleteTagImage from "../../../assets/delete-tag.svg"; // 태그 삭제 아이콘 경로
import api from "../../../api.js"; // axios 인스턴스

const EditModal = ({ handleCloseModal }) => {
  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [moment, setMoment] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [postPassword, setPostPassword] = useState("");
  const [content, setContent] = useState(""); // 본문 내용 상태
  const [inputValue, setInputValue] = useState(""); // 태그 입력 상태
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null); // 파일 선택을 위한 ref

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImage(fileUrl);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const toggleSwitch = () => {
    setIsPublic((prev) => !prev);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const postData = {
        nickname,
        title,
        content,
        postPassword,
        imageUrl: image || "", // 이미지가 없으면 빈 문자열로 처리
        tags,
        location,
        moment,
        isPublic,
      };

      const response = await api.put(`/api/groups/1/posts`, postData); // groupId를 임시로 1로 지정

      if (response.status === 200 || response.status === 201) {
        alert("추억이 성공적으로 수정되었습니다!");
        handleCloseModal();
      } else {
        throw new Error(response.data.message || "Failed");
      }
    } catch (error) {
      console.error(error);
      alert("업로드에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <span className="title">추억 수정</span>

        <CloseButton onClick={handleCloseModal}>
          <img src={closeButton} alt="닫기" width={30} height={30} />
        </CloseButton>

        <Content>
          <div className="content">
            <Label>닉네임</Label>
            <Input
              type="text"
              placeholder="닉네임을 입력해 주세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />

            <Label>제목</Label>
            <Input
              type="text"
              placeholder="제목을 입력해 주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <Label>이미지</Label>
            <FileSelectContainer>
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
              />
              {/*}
              <FileSelectButton onClick={() => fileInputRef.current.click()}>
                파일 선택
              </FileSelectButton>
  */}
            </FileSelectContainer>

            <Label>본문</Label>
            <TextArea
              placeholder="본문 내용을 입력해 주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="content">
            <Label>태그</Label>
            <Input
              type="text"
              placeholder="태그를 입력해 주세요"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
            />
            <TagList>
              {tags.map((tag, index) => (
                <TagItem key={index}>
                  <TagText>#{tag}</TagText>
                  <DeleteIcon onClick={() => removeTag(index)}>X</DeleteIcon>
                </TagItem>
              ))}
            </TagList>

            <Label>장소</Label>
            <Input
              type="text"
              placeholder="장소를 입력해 주세요"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <Label>추억의 순간</Label>
            <Input
              type="date"
              value={moment}
              onChange={(e) => setMoment(e.target.value)}
            />

            <Label>추억 공개 선택</Label>
            <ToggleContainer>
              <ToggleText>{isPublic ? "공개" : "비공개"}</ToggleText>
              <ToggleWrapper onClick={toggleSwitch}>
                <ToggleSwitch $isPublic={isPublic}>
                  <SwitchHandle $isPublic={isPublic} />
                </ToggleSwitch>
              </ToggleWrapper>
            </ToggleContainer>

            <Label>수정 권한 인증</Label>
            <Input
              type="password"
              placeholder="추억 비밀번호를 입력해 주세요"
              value={postPassword}
              onChange={(e) => setPostPassword(e.target.value)}
            />
          </div>
        </Content>

        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "수정 중..." : "수정하기"}
        </Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default EditModal;
