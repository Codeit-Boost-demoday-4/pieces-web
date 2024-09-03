import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Memories.css";
import logo from "../../assets/memories/logo.png"; // 로고 이미지 불러오기
import fileButton from "../../assets/memories/파일선택창.png"; // 파일 선택 버튼 이미지 불러오기
import deleteTagImage from "../../assets/memories/태그삭제.png"; // 태그 삭제 버튼 이미지 불러오기
import AuthModal from "./AuthModal";
import axios from "axios";

const Memories = () => {
  //const groupId = useParams(); // URL에서 groupId를 가져옴
  const groupId = 1;

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
  const [groupPassword, setGroupPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [moment, setMoment] = useState("");

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

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
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

      const response = await axios.post(`/groups/${groupId}/posts`, postData);

      // 서버에서 성공적인 응답을 받은 경우
      if (response.status === 200 || response.status === 201) {
        alert("추억이 성공적으로 업로드되었습니다!");
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
    <div className="memories-container">
      <img src={logo} alt="로고" className="logo" />

      {/* 닉네임 */}
      <label className="nickname-label">닉네임</label>
      <input
        type="text"
        className="nickname-input"
        placeholder="닉네임을 입력해 주세요"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      {/* 제목 */}
      <label className="title-label">제목</label>
      <input
        type="text"
        className="title-input"
        placeholder="제목을 입력해 주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* 이미지 */}
      <label className="image-label">이미지</label>
      <input
        type="text"
        className="image-input"
        placeholder="파일을 선택해 주세요"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      {/* 파일 선택 버튼 */}
      <div className="file-button-container">
        <img
          src={fileButton}
          alt="파일 선택 버튼"
          className="file-button-image"
        />
        <span className="file-button-text">파일 선택</span>
      </div>

      {/* 본문 */}
      <label className="content-label">본문</label>
      <textarea
        className="content-input"
        placeholder="본문 내용을 입력해 주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      {/* 태그 */}
      <label className="tag-label">태그</label>
      <input
        type="text"
        className="tag-input"
        placeholder="태그를 입력해 주세요"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />

      {/* 태그 리스트 */}
      <div className="tag-list">
        {tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            <span className="tag-text">#{tag}</span>
            <img
              src={deleteTagImage}
              alt="태그 삭제"
              className="tag-delete"
              onClick={() => removeTag(index)}
            />
          </div>
        ))}
      </div>

      {/* 장소 */}
      <label className="place-label">장소</label>
      <input
        type="text"
        className="place-input"
        placeholder="장소를 입력해 주세요"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      {/* 추억의 순간 */}
      <label className="moment-label">추억의 순간</label>
      <input
        type="text"
        className="moment-input"
        placeholder="YYYY-MM-DD"
        value={moment}
        onChange={(e) => setMoment(e.target.value)}
      />

      {/* 비밀번호 */}
      <label className="password-label">비밀번호</label>
      <input
        type="password"
        className="password-input"
        placeholder="비밀번호를 입력해 주세요"
        value={postPassword}
        onChange={(e) => setPostPassword(e.target.value)}
      />

      {/* 추억 공개 선택 */}
      <div className="public-toggle-container">
        <label className="public-label">추억 공개 선택</label>
        <div className="toggle-wrapper" onClick={toggleSwitch}>
          <span className="public-text">{isPublic ? "공개" : "비공개"}</span>
          <div className={`toggle-switch ${isPublic ? "public" : "private"}`}>
            <div className="switch-handle"></div>
          </div>
        </div>
      </div>

      {/* 올리기 버튼 */}
      <button
        className="submit-button"
        onClick={openModal}
        disabled={isLoading}
      >
        {isLoading ? "업로드 중..." : "올리기"}
      </button>

      {/* AuthModal */}
      {isModalOpen && (
        <AuthModal onSubmit={handleAuthSubmit} onClose={closeModal} />
      )}
    </div>
  );
};

export default Memories;
