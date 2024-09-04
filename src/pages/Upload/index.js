import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
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
import closeButton from "../../assets/close-button.svg";
import deleteTagImage from "../../assets/memories/태그삭제.png"; // 태그 삭제 버튼 이미지 불러오기
import AuthModal from "./AuthModal/index.js";
import { LogoTopBar } from "../../components/LogoTopBar.js";
import axios from "axios";

const Upload = () => {
  const groupId = useParams(); // URL에서 groupId를 가져옴
  //const groupId = 1;
  const nav = useNavigate();

  const [isPublic, setIsPublic] = useState(true);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 폼 입력값 상태
  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postPassword, setPostPassword] = useState("");
  //const [groupPassword, setGroupPassword] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [location, setLocation] = useState("");
  const [moment, setMoment] = useState("");

  // Input 요소를 참조하기 위한 ref 설정
  const fileInputRef = useRef(null);

  const toggleSwitch = () => {
    setIsPublic(!isPublic);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImageUrl(fileUrl); // 선택한 이미지의 URL을 상태에 저장
    }
  };

  /*
  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  */

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleClose = () => {
    nav(-1);
  };

  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleAuthSubmit = async (groupPassword) => {
    // 게시물 업로드 api 연결
    setIsLoading(true);
    closeModal(); // 모달 닫기

    try {
      const postData = {
        nickname,
        title,
        content,
        postPassword,
        groupPassword, // AuthModal에서 받은 groupPassword 사용
        imageUrl,
        tags,
        location,
        moment,
        isPublic,
      };

      const response = await axios.post(
        `https://pieces-server.onrender.com/api/groups/${groupId}/posts`,
        postData
      );

      // 서버에서 성공적인 응답을 받은 경우
      if (response.status === 200 || response.status === 201) {
        alert("추억이 성공적으로 업로드되었습니다!");
        nav(`group/${groupId}`);
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
    <Container>
      <LogoTopBar />

      <span className="title">추억 올리기</span>

      <CloseButton onClick={handleClose}>
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
              //className="image"
              type="file"
              accept="image/*"
              placeholder="파일을 선택해주세요"
              onChange={handleFileSelect}
            />
            {/*<FileSelectButton onClick={triggerFileSelect}>
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
            className="tag"
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
                <DeleteIcon
                  src={deleteTagImage}
                  alt="태그 삭제"
                  onClick={() => removeTag(index)}
                />
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
            placeholder="YYYY-MM-DD"
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

          <Label>비밀번호 생성</Label>
          <Input
            type="password"
            placeholder="추억 비밀번호를 생성해 주세요"
            value={postPassword}
            onChange={(e) => setPostPassword(e.target.value)}
          />
        </div>
      </Content>
      <Button onClick={openModal} disabled={isLoading}>
        {isLoading ? "업로드 중..." : "올리기"}
      </Button>

      {isModalOpen && (
        <AuthModal onSubmit={handleAuthSubmit} onClose={closeModal} />
      )}
    </Container>
  );
};

export default Upload;
